ALTER TABLE public.rh_schedules ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.rh_employee_schedules ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow all for authenticated" ON public.rh_schedules
    FOR ALL TO authenticated USING (true);

CREATE POLICY "Allow all for authenticated" ON public.rh_employee_schedules
    FOR ALL TO authenticated USING (true);
