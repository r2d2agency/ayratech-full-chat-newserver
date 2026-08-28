
import express from 'express';
import { query } from '../db.js';
import { authenticate } from '../middleware/auth.js';
import { logError } from '../logger.js';

const router = express.Router();
router.use(authenticate);

// Ensure checklist_type column exists
async function ensureChecklistTypeColumn() {
  try {
    await query(`ALTER TABLE brand_checklists ADD COLUMN IF NOT EXISTS checklist_type VARCHAR(20) DEFAULT 'standard'`);
  } catch (e) {
    logError('merch-checklists.ensureType', e);
  }
}

// Middleware: attach orgId to every request
router.use(async (req, res, next) => {
  try {
    const orgRes = await query(
      `SELECT organization_id FROM organization_members WHERE user_id = $1 LIMIT 1`,
      [req.userId]
    );
    if (!orgRes.rows.length) return res.status(403).json({ error: 'Organização não encontrada' });
    req.orgId = orgRes.rows[0].organization_id;
    await ensureChecklistTypeColumn();
    next();
  } catch (e) {
    logError('merch checklist middleware', e);
    res.status(500).json({ error: 'Erro ao resolver organização' });
  }
});

// List checklists
router.get('/', async (req, res) => {
  try {
    const { brand_id } = req.query;
    let sql = 'SELECT * FROM brand_checklists WHERE organization_id = $1';
    const params = [req.orgId];
    if (brand_id) {
      sql += ' AND brand_id = $2';
      params.push(brand_id);
    }
    sql += ' ORDER BY name';
    const r = await query(sql, params);
    res.json(r.rows);
  } catch (e) {
    logError('get checklists', e);
    res.status(500).json({ error: e.message });
  }
});

// Create checklist
router.post('/', async (req, res) => {
  try {
    const { name, brand_id, description, require_checkin_photo, require_checkout_photo, checklist_type } = req.body;
    const type = checklist_type === 'checkin_only' ? 'checkin_only' : 'standard';
    const r = await query(
      `INSERT INTO brand_checklists (organization_id, brand_id, name, description, require_checkin_photo, require_checkout_photo, checklist_type)
       VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [req.orgId, brand_id, name, description, require_checkin_photo ?? true, require_checkout_photo ?? false, type]
    );
    res.json(r.rows[0]);
  } catch (e) {
    logError('create checklist', e);
    res.status(500).json({ error: e.message });
  }
});

// Update checklist
router.put('/:id', async (req, res) => {
  try {
    const { name, description, require_checkin_photo, require_checkout_photo, active, checklist_type } = req.body;
    const type = checklist_type === 'checkin_only' ? 'checkin_only' : 'standard';
    const r = await query(
      `UPDATE brand_checklists SET name=$1, description=$2, require_checkin_photo=$3, require_checkout_photo=$4, active=$5, checklist_type=$6, updated_at=NOW()
       WHERE id=$7 AND organization_id=$8 RETURNING *`,
      [name, description, require_checkin_photo, require_checkout_photo, active, type, req.params.id, req.orgId]
    );
    res.json(r.rows[0]);
  } catch (e) {
    logError('update checklist', e);
    res.status(500).json({ error: e.message });
  }
});

// Delete checklist
router.delete('/:id', async (req, res) => {
  try {
    await query('DELETE FROM brand_checklists WHERE id=$1 AND organization_id=$2', [req.params.id, req.orgId]);
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

export default router;
