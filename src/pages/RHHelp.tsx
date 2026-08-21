import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle, Users, Clock, Building2, ShieldCheck, MapPin, Monitor, FileText } from "lucide-react";

const helpItems = [
  {
    title: "Configuração de Sede",
    description: "Como criar a sede da empresa para validação de ponto por geofencing.",
    icon: Building2,
    content: "No painel de RH, acesse 'PDVs & Sedes'. Cadastre a Unidade 'Sede' com o endereço e as coordenadas GPS exatas para permitir a validação por cerca eletrônica (Geofencing)."
  },
  {
    title: "Habilitar Ponto Facial",
    description: "Como permitir que colaboradores batam ponto via celular com reconhecimento facial.",
    icon: Clock,
    content: "1. Empresa: No menu 'Administração' > 'Organizações', selecione a organização e vá na aba 'Configurações'. Ative o switch 'Obrigatoriedade Facial'.\n2. Colaborador: No cadastro (RH > Colaboradores), aba 'Segurança', você pode definir se ele segue a regra da empresa, se é sempre obrigado ou se está dispensado."
  },

  {
    title: "Vínculo de Colaborador à Sede",
    description: "Como associar um colaborador a uma unidade específica para validação de local.",
    icon: Users,
    content: "Para que o ponto seja validado na sede, abra o cadastro do colaborador em 'RH > Colaboradores', clique em editar e procure pelo campo 'Filial' ou 'Unidade'. Selecione a unidade 'Sede'. Isso garante que o Geofencing valide a batida apenas naquele local."
  },
  {
    title: "Visualização e Auditoria de Ponto",
    description: "Como acompanhar onde os colaboradores estão batendo o ponto.",
    icon: MapPin,
    content: "No menu RH > Ponto, você pode ver o 'Status Geo' de cada marcação. O sistema indica se o ponto foi 'Dentro do PDV' (ou Sede) ou 'Fora'. Nos relatórios XLS, há o detalhamento completo da unidade e coordenadas de cada registro."
  },
  {
    title: "Controle de Acessos",
    description: "Regras de visibilidade para colaboradores e gestores.",
    icon: ShieldCheck,
    content: "Colaboradores comuns veem apenas seu próprio ponto. Gestores com permissão administrativa acessam o painel completo de auditoria no módulo RH para monitorar toda a equipe."
  },
  {
    title: "Totem de Ponto",
    description: "Onde encontrar o link do totem para tablets ou quiosques.",
    icon: Monitor,
    content: "O link e a gestão dos totens de ponto estão localizados no menu 'RH > Exportação AFD'. Lá você pode criar novos totens, definir se exigem reconhecimento facial e copiar o link direto para acesso."
  },
  {
    title: "Fechamento de Folha de Ponto",
    description: "Como realizar o fechamento mensal ou individual dos registros de ponto.",
    icon: FileText,
    content: "1. Conferência: Acesse 'RH > Ponto', selecione o período e o colaborador. Verifique divergências (ícone amarelo/vermelho).\n2. Ajustes: Se necessário, use o botão 'Ajuste Manual' para corrigir marcações.\n3. Exportação: Clique em 'Exportar XLS' para gerar o espelho de ponto consolidado. O sistema calcula automaticamente horas extras e faltas com base na jornada cadastrada.\n4. Holerite: Após a conferência, você pode importar o holerite em 'RH > Holerites' para assinatura digital."
  },
  {
    title: "Marcas não aparecem na Rota",
    description: "Por que uma marca recém cadastrada não aparece para criar rotas?",
    icon: Package,
    content: "Para que uma marca apareça na criação de rotas, ela DEVE estar vinculada ao PDV selecionado.\n1. Acesse Merchandising > Marcas.\n2. Edite a marca desejada.\n3. Vá na aba 'PDVs Vinculados' e adicione o PDV.\n4. Certifique-se também de que o mix de produtos para esse PDV foi configurado."
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