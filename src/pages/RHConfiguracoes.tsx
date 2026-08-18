import React from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings, Clock, Shield } from "lucide-react";
import { WorkSchedulePanel } from "@/components/settings/WorkSchedulePanel";
import { useAuth } from "@/contexts/AuthContext";

export default function RHConfiguracoes() {
  const { user } = useAuth();
  const isAdminOrOwner = user?.role === 'owner' || user?.role === 'admin';

  return (
    <MainLayout>
      <div className="space-y-8">
        <div className="animate-slide-up">
          <h1 className="text-3xl font-bold text-foreground">Configurações de RH</h1>
          <p className="mt-1 text-muted-foreground">
            Gerencie as regras globais do módulo de Recursos Humanos
          </p>
        </div>

        <Tabs defaultValue="ponto" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
            <TabsTrigger value="ponto" className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Ponto & Horário
            </TabsTrigger>
            <TabsTrigger value="geral" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Geral
            </TabsTrigger>
          </TabsList>

          <TabsContent value="ponto" className="mt-6 space-y-6">
            <WorkSchedulePanel />
          </TabsContent>

          <TabsContent value="geral" className="mt-6">
            <div className="rounded-lg border border-dashed p-8 text-center text-muted-foreground">
              Configurações gerais de RH em breve.
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
}
