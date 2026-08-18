import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Clock, Save, Loader2, Calendar } from "lucide-react";
import { api } from "@/lib/api";
import { toast } from "sonner";

interface WorkSchedule {
  timezone: string;
  work_days: number[];
  work_start: string;
  work_end: string;
  lunch_start: string;
  lunch_end: string;
  slot_duration_minutes: number;
  buffer_minutes: number;
  punch_tolerance_minutes: number;
}

const DAY_NAMES = [
  { id: 0, label: 'Dom' },
  { id: 1, label: 'Seg' },
  { id: 2, label: 'Ter' },
  { id: 3, label: 'Qua' },
  { id: 4, label: 'Qui' },
  { id: 5, label: 'Sex' },
  { id: 6, label: 'Sáb' },
];

export function WorkSchedulePanel() {
  const [schedule, setSchedule] = useState<WorkSchedule>({
    timezone: 'America/Sao_Paulo',
    work_days: [1, 2, 3, 4, 5],
    work_start: '08:00',
    work_end: '18:00',
    lunch_start: '12:00',
    lunch_end: '13:00',
    slot_duration_minutes: 60,
    buffer_minutes: 15,
    punch_tolerance_minutes: 15,
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    loadSchedule();
  }, []);

  const loadSchedule = async () => {
    try {
      const data = await api<WorkSchedule>('/api/organizations/work-schedule');
      setSchedule(data);
    } catch (error) {
      console.error('Error loading work schedule:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await api('/api/organizations/work-schedule', {
        method: 'PUT',
        body: schedule,
        auth: true,
      });
      toast.success('Horário de trabalho salvo');
    } catch (error) {
      toast.error('Erro ao salvar horário');
    } finally {
      setSaving(false);
    }
  };

  const toggleDay = (dayId: number) => {
    setSchedule(prev => ({
      ...prev,
      work_days: prev.work_days.includes(dayId)
        ? prev.work_days.filter(d => d !== dayId)
        : [...prev.work_days, dayId].sort(),
    }));
  };

  if (loading) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center py-8">
          <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-primary" />
          Horário de Trabalho
        </CardTitle>
        <CardDescription>
          Configure o expediente para que os agentes de IA agendem reuniões respeitando seus horários
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Work Days */}
        <div className="space-y-2">
          <Label>Dias de Trabalho</Label>
          <div className="flex gap-2">
            {DAY_NAMES.map(day => (
              <Button
                key={day.id}
                variant={schedule.work_days.includes(day.id) ? 'default' : 'outline'}
                size="sm"
                onClick={() => toggleDay(day.id)}
                className="w-12"
              >
                {day.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Work Hours */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              Início do Expediente
            </Label>
            <Input
              type="time"
              value={schedule.work_start}
              onChange={(e) => setSchedule(prev => ({ ...prev, work_start: e.target.value }))}
            />
          </div>
          <div className="space-y-2">
            <Label className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              Fim do Expediente
            </Label>
            <Input
              type="time"
              value={schedule.work_end}
              onChange={(e) => setSchedule(prev => ({ ...prev, work_end: e.target.value }))}
            />
          </div>
        </div>

        {/* Lunch Break */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Início do Almoço</Label>
            <Input
              type="time"
              value={schedule.lunch_start}
              onChange={(e) => setSchedule(prev => ({ ...prev, lunch_start: e.target.value }))}
            />
          </div>
          <div className="space-y-2">
            <Label>Fim do Almoço</Label>
            <Input
              type="time"
              value={schedule.lunch_end}
              onChange={(e) => setSchedule(prev => ({ ...prev, lunch_end: e.target.value }))}
            />
          </div>
        </div>

        {/* Slot Config */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Duração do Slot (min)</Label>
            <Input
              type="number"
              min={15}
              max={240}
              value={schedule.slot_duration_minutes}
              onChange={(e) => setSchedule(prev => ({ ...prev, slot_duration_minutes: parseInt(e.target.value) || 60 }))}
            />
            <p className="text-xs text-muted-foreground">Duração padrão de cada agendamento</p>
          </div>
          <div className="space-y-2">
            <Label>Intervalo entre Slots (min)</Label>
            <Input
              type="number"
              min={0}
              max={60}
              value={schedule.buffer_minutes}
              onChange={(e) => setSchedule(prev => ({ ...prev, buffer_minutes: parseInt(e.target.value) || 0 }))}
            />
            <p className="text-xs text-muted-foreground">Tempo de folga entre reuniões</p>
          </div>
        </div>

        {/* Punch Tolerance */}
        <div className="space-y-2">
          <Label>Tolerância para Bater Ponto (min)</Label>
          <Input
            type="number"
            min={0}
            max={120}
            value={schedule.punch_tolerance_minutes}
            onChange={(e) => setSchedule(prev => ({ ...prev, punch_tolerance_minutes: parseInt(e.target.value) || 0 }))}
          />
          <p className="text-xs text-muted-foreground">Tempo permitido para registro antes/depois do horário da escala</p>
        </div>

        {/* Preview */}
        <div className="rounded-lg bg-muted/50 p-4 text-sm">
          <p className="font-medium mb-1">📋 Resumo do expediente:</p>
          <p className="text-muted-foreground">
            {DAY_NAMES.filter(d => schedule.work_days.includes(d.id)).map(d => d.label).join(', ')} • {schedule.work_start} às {schedule.work_end} • Almoço {schedule.lunch_start}-{schedule.lunch_end} • Slots de {schedule.slot_duration_minutes}min • Tolerância de ponto: {schedule.punch_tolerance_minutes}min
          </p>
        </div>

        <Button onClick={handleSave} disabled={saving} className="w-full">
          {saving ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Salvando...
            </>
          ) : (
            <>
              <Save className="h-4 w-4 mr-2" />
              Salvar Horário de Trabalho
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}
