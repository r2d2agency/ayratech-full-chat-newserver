-- Tabela de Escalas (Horários)
CREATE TABLE IF NOT EXISTS public.rh_schedules (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL,
    name VARCHAR(100) NOT NULL,
    items JSONB NOT NULL DEFAULT '[]', -- Array de { day, entry, exit, ... }
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.rh_schedules TO authenticated;
GRANT ALL ON public.rh_schedules TO service_role;

-- Tabela de Vínculo de Colaborador com Escala
CREATE TABLE IF NOT EXISTS public.rh_employee_schedules (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    employee_id UUID NOT NULL,
    schedule_id UUID REFERENCES public.rh_schedules(id) ON DELETE CASCADE NOT NULL,
    active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(employee_id, schedule_id)
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.rh_employee_schedules TO authenticated;
GRANT ALL ON public.rh_employee_schedules TO service_role;
