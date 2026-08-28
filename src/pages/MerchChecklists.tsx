import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useBrandChecklists, useCreateBrandChecklist, useUpdateBrandChecklist, useDeleteBrandChecklist } from "@/hooks/use-merch-routes";
import { useBrands } from "@/hooks/use-merchandising";
import { toast } from "sonner";
import { Plus, Edit, ClipboardList, Camera, Package, CalendarDays, Archive, AlertTriangle, CheckCircle2, Trash2 } from "lucide-react";

const FREQUENCIES = [
  { value: 'every_visit', label: 'Toda visita' },
  { value: 'daily', label: 'Diária' },
  { value: 'weekly', label: 'Semanal' },
  { value: 'biweekly', label: 'Quinzenal' },
  { value: 'monthly', label: 'Mensal' },
];

const CHECKLIST_TYPES = [
  { value: 'standard', label: 'Padrão (com produtos/estoque)', icon: Package },
  { value: 'checkin_only', label: 'Apenas Check-in / Check-out', icon: ClipboardList },
];

export default function MerchChecklists() {
  const [selectedBrand, setSelectedBrand] = useState('');
  const { data: brands = [] } = useBrands();
  const { data: checklists = [], isLoading } = useBrandChecklists(selectedBrand || undefined);
  const createChecklist = useCreateBrandChecklist();
  const updateChecklist = useUpdateBrandChecklist();
  const deleteChecklist = useDeleteBrandChecklist();
  const [showEditor, setShowEditor] = useState(false);
  const [editing, setEditing] = useState<any>(null);
  const [form, setForm] = useState<any>({});

  const openCreate = () => {
    setEditing(null);
    setForm({
      brand_id: selectedBrand, name: '', description: '',
      require_checkin_photo: true, require_checkout_photo: false,
      require_category_photos: true,
      category_photo_mode: 'both', // 'before', 'after', or 'both'
      min_category_photos_before: 1,
      min_category_photos_after: 1,
      require_stock_count: false, require_validity_check: false,
      require_extra_point: false,
      stock_count_frequency: 'every_visit', validity_check_frequency: 'every_visit',
      checklist_type: 'standard',
    });
    setShowEditor(true);
  };

  const openEdit = (c: any) => {
    setEditing(c);
    setForm({ ...c });
    setShowEditor(true);
  };

  const handleSave = async () => {
    if (!form.name || !form.brand_id) { toast.error('Nome e marca são obrigatórios'); return; }
    try {
      if (editing) {
        await updateChecklist.mutateAsync({ id: editing.id, ...form });
        toast.success('Checklist atualizado');
      } else {
        await createChecklist.mutateAsync(form);
        toast.success('Checklist criado');
      }
      setShowEditor(false);
    } catch (err: any) { toast.error(err.message); }
  };

  const handleDelete = async (id: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!window.confirm('Tem certeza que deseja excluir este checklist?')) return;
    try {
      await deleteChecklist.mutateAsync(id);
      toast.success('Checklist excluído');
    } catch (err: any) { toast.error(err.message); }
  };

  return (
    <MainLayout>
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-3">
            <Select value={selectedBrand || '__all__'} onValueChange={v => setSelectedBrand(v === '__all__' ? '' : v)}>
              <SelectTrigger className="w-56"><SelectValue placeholder="Filtrar por marca" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="__all__">Todas as marcas</SelectItem>
                {brands.filter((b: any) => b?.id).map((b: any) => <SelectItem key={b.id} value={b.id}>{b.name}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <Button onClick={openCreate} disabled={!selectedBrand}>
            <Plus className="h-4 w-4 mr-1" /> Novo Checklist
          </Button>
        </div>

        {!selectedBrand && (
          <Card><CardContent className="py-12 text-center text-muted-foreground">
            <ClipboardList className="h-12 w-12 mx-auto mb-3 opacity-40" />
            <p>Selecione uma marca para gerenciar seus checklists</p>
          </CardContent></Card>
        )}

        {/* Checklists List */}
        {selectedBrand && (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {checklists.map((c: any) => (
              <Card key={c.id} className="hover:border-primary/30 transition-colors cursor-pointer" onClick={() => openEdit(c)}>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm">{c.name}</CardTitle>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground hover:text-destructive" 
                        onClick={(e) => handleDelete(c.id, e)}>
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                      <Badge variant={c.active !== false ? 'default' : 'secondary'} className="text-[10px]">
                        {c.active !== false ? 'Ativo' : 'Inativo'}
                      </Badge>
                    </div>
                  </div>
                  {c.brand_name && <p className="text-xs text-muted-foreground">{c.brand_name}</p>}
                </CardHeader>
                <CardContent>
                  {c.description && <p className="text-xs text-muted-foreground mb-3">{c.description}</p>}
                  <div className="flex flex-wrap items-center gap-1.5 mb-2">
                    <Badge variant={c.checklist_type === 'checkin_only' ? 'outline' : 'secondary'} className="text-[10px] gap-1 border-0">
                      {c.checklist_type === 'checkin_only' ? (
                        <><ClipboardList className="h-3 w-3" /> Apenas Check-in/out</>
                      ) : (
                        <><Package className="h-3 w-3" /> Completo</>
                      )}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {c.require_checkin_photo && <Badge variant="outline" className="text-[10px] gap-1"><Camera className="h-3 w-3" /> Foto Check-in</Badge>}
                    {c.require_checkout_photo && <Badge variant="outline" className="text-[10px] gap-1"><Camera className="h-3 w-3" /> Foto Check-out</Badge>}
                    {c.checklist_type !== 'checkin_only' && c.require_stock_count && <Badge variant="outline" className="text-[10px] gap-1"><Package className="h-3 w-3" /> Estoque ({FREQUENCIES.find(f => f.value === c.stock_count_frequency)?.label})</Badge>}
                    {c.checklist_type !== 'checkin_only' && c.require_validity_check && <Badge variant="outline" className="text-[10px] gap-1"><CalendarDays className="h-3 w-3" /> Validade ({FREQUENCIES.find(f => f.value === c.validity_check_frequency)?.label})</Badge>}
                    {c.require_extra_point && <Badge variant="outline" className="text-[10px] gap-1"><Archive className="h-3 w-3" /> Ponto Extra</Badge>}
                    {c.checklist_type !== 'checkin_only' && c.require_category_photos !== false && <Badge variant="outline" className="text-[10px] gap-1"><Camera className="h-3 w-3" /> Fotos Categoria (A/D)</Badge>}
                  </div>
                </CardContent>
              </Card>
            ))}
            {checklists.length === 0 && !isLoading && (
              <Card className="col-span-full"><CardContent className="py-8 text-center text-muted-foreground text-sm">
                Nenhum checklist configurado para esta marca
              </CardContent></Card>
            )}
          </div>
        )}
      </div>

      {/* Editor Dialog */}
      <Dialog open={showEditor} onOpenChange={setShowEditor}>
        <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <ClipboardList className="h-5 w-5" />
              {editing ? 'Editar Checklist' : 'Novo Checklist'}
            </DialogTitle>
          </DialogHeader>

          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="general">Geral</TabsTrigger>
              <TabsTrigger value="rules">Regras</TabsTrigger>
              <TabsTrigger value="frequency">Periodicidade</TabsTrigger>
            </TabsList>

            <TabsContent value="general" className="space-y-3 mt-3">
              <div>
                <Label>Marca</Label>
                <Select value={form.brand_id || '__none__'} onValueChange={v => setForm({ ...form, brand_id: v === '__none__' ? '' : v })}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="__none__">Selecione</SelectItem>
                    {brands.filter((b: any) => b?.id).map((b: any) => <SelectItem key={b.id} value={b.id}>{b.name}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Tipo de Checklist</Label>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  {CHECKLIST_TYPES.map(ct => {
                    const Icon = ct.icon;
                    const active = (form.checklist_type || 'standard') === ct.value;
                    return (
                      <button
                        key={ct.value}
                        type="button"
                        onClick={() => {
                          const patch: any = { checklist_type: ct.value };
                          if (ct.value === 'checkin_only') {
                            patch.require_stock_count = false;
                            patch.require_validity_check = false;
                            patch.require_category_photos = false;
                            patch.category_photo_mode = 'both';
                            patch.min_category_photos_before = 1;
                            patch.min_category_photos_after = 1;
                            patch.stock_count_frequency = 'every_visit';
                            patch.validity_check_frequency = 'every_visit';
                          }
                          setForm({ ...form, ...patch });
                        }}
                        className={`flex items-start gap-2 p-3 rounded-lg border text-left transition-colors ${
                          active
                            ? 'bg-primary/10 border-primary ring-1 ring-primary/30'
                            : 'bg-background hover:bg-muted/50 border-border'
                        }`}
                      >
                        <Icon className={`h-4 w-4 mt-0.5 ${active ? 'text-primary' : 'text-muted-foreground'}`} />
                        <div>
                          <p className={`text-sm font-medium ${active ? 'text-primary' : ''}`}>{ct.label}</p>
                          <p className="text-[11px] text-muted-foreground mt-0.5">
                            {ct.value === 'standard'
                              ? 'Requer produtos ativos na marca'
                              : 'Apenas presença (check-in/check-out)'}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
                {form.checklist_type === 'checkin_only' && (
                  <p className="text-[11px] text-amber-700 mt-2 flex items-center gap-1 bg-amber-50 p-2 rounded border border-amber-200">
                    <AlertTriangle className="h-3 w-3 shrink-0" />
                    Modo presença: categorias/produtos, estoque e validade são desativados automaticamente.
                  </p>
                )}
              </div>
              <div>
                <Label>Nome do Checklist *</Label>
                <Input value={form.name || ''} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Ex: Checklist Padrão Marca X" />
              </div>
              <div>
                <Label>Descrição</Label>
                <Textarea value={form.description || ''} onChange={e => setForm({ ...form, description: e.target.value })} rows={3} placeholder="Instruções gerais..." />
              </div>
              {editing && (
                <div className="flex items-center justify-between">
                  <Label>Ativo</Label>
                  <Switch checked={form.active !== false} onCheckedChange={v => setForm({ ...form, active: v })} />
                </div>
              )}
            </TabsContent>

            <TabsContent value="rules" className="space-y-3 mt-3">
              <p className="text-xs text-muted-foreground">Defina o que é obrigatório em cada visita para esta marca.</p>
              {form.checklist_type === 'checkin_only' ? (
                <div className="p-4 rounded-lg border bg-muted/30 text-center space-y-2">
                  <CheckCircle2 className="h-8 w-8 mx-auto text-green-600" />
                  <p className="text-sm font-medium">Modo Apenas Check-in / Check-out</p>
                  <p className="text-xs text-muted-foreground">
                    Produtos, categorias, estoque e validade são desativados. O checklist só exigirá presença (entrada e saída) no PDV.
                  </p>
                </div>
              ) : null}
              {[
                { key: 'require_checkin_photo', label: 'Foto de Check-in obrigatória', icon: Camera, always: true },
                { key: 'require_checkout_photo', label: 'Foto de Check-out obrigatória', icon: Camera, always: true },
                { key: 'require_stock_count', label: 'Contagem de estoque obrigatória', icon: Package, always: false },
                { key: 'require_validity_check', label: 'Verificação de validade obrigatória', icon: CalendarDays, always: false },
                { key: 'require_extra_point', label: 'Verificação de ponto extra', icon: Archive, always: true },
                { key: 'require_category_photos', label: 'Fotos da categoria (Antes/Depois) obrigatórias', icon: Camera, always: false },
              ].filter(r => r.always || form.checklist_type !== 'checkin_only').map(r => (
                <div key={r.key} className={`flex items-center justify-between p-3 rounded-lg border ${!r.always && form.checklist_type === 'checkin_only' ? 'opacity-50 pointer-events-none bg-muted/30' : ''}`}>
                  <div className="flex items-center gap-2">
                    <r.icon className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{r.label}</span>
                  </div>
                  <Switch
                    checked={!!form[r.key]}
                    onCheckedChange={v => {
                      const patch: any = { [r.key]: v };
                      if (!v && r.key === 'require_stock_count') patch.stock_count_frequency = 'every_visit';
                      if (!v && r.key === 'require_validity_check') patch.validity_check_frequency = 'every_visit';
                      setForm({ ...form, ...patch });
                    }}
                    disabled={!r.always && form.checklist_type === 'checkin_only'}
                  />
                </div>
              ))}

              {form.checklist_type !== 'checkin_only' && form.require_category_photos && (
                <div className="p-3 rounded-lg border bg-muted/30 space-y-4">
                  <div className="space-y-2">
                    <Label className="text-xs font-semibold flex items-center gap-1">
                      <Camera className="h-3.5 w-3.5" /> Modo de fotos da categoria
                    </Label>
                    <Select value={form.category_photo_mode || 'both'} onValueChange={v => setForm({ ...form, category_photo_mode: v })}>
                      <SelectTrigger className="bg-background">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="both">Antes e Depois</SelectItem>
                        <SelectItem value="before">Somente Antes</SelectItem>
                        <SelectItem value="after">Somente Depois</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {(form.category_photo_mode === 'both' || form.category_photo_mode === 'before') && (
                      <div>
                        <Label className="text-[11px] text-muted-foreground">Mínimo ANTES</Label>
                         <Input
                          type="number" min={0} max={20}
                          value={form.min_category_photos_before ?? 1}
                          onChange={e => setForm({ ...form, min_category_photos_before: Math.max(0, parseInt(e.target.value, 10) || 0) })}
                        />
                      </div>
                    )}
                    {(form.category_photo_mode === 'both' || form.category_photo_mode === 'after') && (
                      <div>
                        <Label className="text-[11px] text-muted-foreground">Mínimo DEPOIS</Label>
                         <Input
                          type="number" min={0} max={20}
                          value={form.min_category_photos_after ?? 1}
                          onChange={e => setForm({ ...form, min_category_photos_after: Math.max(0, parseInt(e.target.value, 10) || 0) })}
                        />
                      </div>
                    )}
                  </div>
                  <p className="text-[10px] text-muted-foreground">
                    {form.category_photo_mode === 'before' 
                      ? 'O promotor enviará fotos apenas antes de iniciar os ajustes.' 
                      : form.category_photo_mode === 'after' 
                      ? 'O promotor enviará fotos apenas após concluir os ajustes.' 
                      : 'O promotor enviará fotos do antes e do depois para comparação.'}
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="frequency" className="space-y-3 mt-3">
              <p className="text-xs text-muted-foreground">Configure a periodicidade de cada tipo de verificação.</p>
              {form.checklist_type === 'checkin_only' ? (
                <div className="p-4 rounded-lg border bg-muted/30 text-center py-8">
                  <CheckCircle2 className="h-8 w-8 mx-auto mb-2 text-green-600" />
                  <p className="text-sm font-medium">Nenhuma periodicidade necessária</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Checklist de presença (Apenas Check-in / Check-out) não requer configurações de periodicidade.
                  </p>
                </div>
              ) : (
                <>
                  {form.require_stock_count && (
                    <div>
                      <Label>Frequência de contagem de estoque</Label>
                      <Select value={form.stock_count_frequency || 'every_visit'} onValueChange={v => setForm({ ...form, stock_count_frequency: v })}>
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>
                          {FREQUENCIES.map(f => <SelectItem key={f.value} value={f.value}>{f.label}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                  {form.require_validity_check && (
                    <div>
                      <Label>Frequência de verificação de validade</Label>
                      <Select value={form.validity_check_frequency || 'every_visit'} onValueChange={v => setForm({ ...form, validity_check_frequency: v })}>
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>
                          {FREQUENCIES.map(f => <SelectItem key={f.value} value={f.value}>{f.label}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                  {!form.require_stock_count && !form.require_validity_check && (
                    <p className="text-sm text-muted-foreground text-center py-4">
                      Ative contagem de estoque ou validade na aba "Regras" para configurar periodicidade.
                    </p>
                  )}
                </>
              )}
            </TabsContent>
          </Tabs>

          <DialogFooter>
            <Button variant="outline" onClick={() => setShowEditor(false)}>Cancelar</Button>
            <Button onClick={handleSave} disabled={createChecklist.isPending || updateChecklist.isPending}>
              {editing ? 'Salvar Alterações' : 'Criar Checklist'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </MainLayout>
  );
}
