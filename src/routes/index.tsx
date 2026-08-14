export const SystemStatus = `{
  "request_id": "16199089-9670-459f-8b22-d52d8a3d23c6",
  "http_method": "POST",
  "http_path": "/api/promotor/location-update",
  "duration_ms": 1,
  "sql": "INSERT INTO employee_live_locations (organization_id, employee_id, latitude, longitude, accuracy_meters, battery_level, is_moving, updated_at) VALUES ($1,$2,$3,$4,$5,$6,$7,NOW()) ON CONFLICT (employee_id) DO UPDATE SET latitude=$3, longitude=$4, accuracy_meters=$5, battery_level=$6, is_moving=$7, updated_at=NOW()",
  "param_count": 7,
  "param_types": [
    "string",
    "string",
    "number",
    "number",
    "number",
    "number",
    "boolean"
  ]
}`;