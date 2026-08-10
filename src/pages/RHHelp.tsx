import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle, BookOpen, Settings, Users, MapPin, Clock, Building2 } from "lucide-react";

const helpItems = [
  {
    title: "Configuração de Sede",
    description: "Como criar a sede da empresa para validação de ponto por geofencing.",
    icon: Building2,
    content: "No painel administrativo, acesse Gestão de Unidades/Locais. Cadastre a Unidade com as coordenadas GPS da sede para validação de cerca eletrônica (Geofencing)."
  },
  {
    title: "Habilitar Ponto Facial",
    description: "Procedimento para permitir que colaboradores batam ponto via celular com reconhecimento facial.",
    icon: Clock,
    content: "No cadastro do Colaborador, ative a opção 'Permitir Ponto Mobile' ou 'Reconhecimento Facial'. Vincule o colaborador à unidade 'Sede' criada anteriormente."
  },
  {
    title: "Controle de Acessos",
    description: "Como definir quais usuários têm acesso ao módulo de RH e Ponto.",
    icon: Settings,
    content: "Em Gestão de Permissões/Perfis, atribua ao usuário o perfil que permite acesso ao módulo de Ponto. Certifique-se de que o dispositivo do colaborador tenha permissão de Câmera e GPS ativa."
  }
];

export default function RHHelp() {
  return (
    <MainLayout>
      <div className="flex flex-col gap-6 p-6">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2 text-foreground">
            <HelpCircle className="h-8 w-8 text-primary" />
            Central de Ajuda RH
          </h1>
          <p className="text-muted-foreground mt-2">
            Procedimentos e manuais para gestão de recursos humanos e ponto.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {helpItems.map((item, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium mb-2">{item.description}</p>
                <div className="text-sm text-muted-foreground bg-muted p-3 rounded-md border border-border">
                  {item.content}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
