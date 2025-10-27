import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, HandHeart, Coins, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import educationImage from "@/assets/project-education.jpg";
import foodImage from "@/assets/project-food.jpg";
import environmentImage from "@/assets/project-environment.jpg";

const Projetos = () => {
  const projects = [
    {
      title: "Educação para Todos",
      description: "Oferecemos reforço escolar e atividades educacionais para crianças em situação de vulnerabilidade social.",
      image: educationImage,
      category: "Educação",
    },
    {
      title: "Combate à Fome",
      description: "Distribuição de cestas básicas e refeições para famílias em situação de insegurança alimentar.",
      image: foodImage,
      category: "Alimentação",
    },
    {
      title: "Sustentabilidade Ambiental",
      description: "Projetos de reflorestamento, reciclagem e educação ambiental para preservar nosso planeta.",
      image: environmentImage,
      category: "Meio Ambiente",
    },
  ];

  const opportunities = [
    {
      icon: Heart,
      title: "Seja Voluntário",
      description: "Dedique algumas horas do seu tempo para fazer a diferença na vida de outras pessoas.",
      action: "Cadastre-se",
      link: "/cadastro",
    },
    {
      icon: Coins,
      title: "Faça uma Doação",
      description: "Contribua financeiramente para que possamos expandir nossos projetos e alcançar mais pessoas.",
      action: "Doar Agora",
      link: "#doar",
    },
    {
      icon: HandHeart,
      title: "Seja Parceiro",
      description: "Empresas e organizações podem se tornar parceiras e potencializar nosso impacto social.",
      action: "Saiba Mais",
      link: "#parceria",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-hero overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent_50%)]"></div>
          </div>
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Nossos Projetos Sociais
              </h1>
              <p className="text-xl text-white/90">
                Conheça as iniciativas que estão transformando vidas e comunidades em todo o Brasil. 
                Cada projeto é uma oportunidade de fazer a diferença.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Áreas de Atuação</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Trabalhamos em três pilares fundamentais para promover desenvolvimento sustentável e qualidade de vida.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>

            <div className="text-center">
              <p className="text-muted-foreground mb-6">
                Todos os nossos projetos seguem os Objetivos de Desenvolvimento Sustentável (ODS) da ONU
              </p>
            </div>
          </div>
        </section>

        {/* How to Help Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Como Você Pode Ajudar</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Existem várias formas de contribuir com nossos projetos. Escolha a que mais se adequa ao seu perfil.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {opportunities.map((opportunity, index) => (
                <Card key={index} className="text-center p-8 hover:shadow-card transition-all duration-300 bg-gradient-card border-border group">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-6">
                      <div className="p-4 rounded-full bg-gradient-hero group-hover:scale-110 transition-transform duration-300 shadow-glow">
                        <opportunity.icon className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{opportunity.title}</h3>
                    <p className="text-muted-foreground mb-6">{opportunity.description}</p>
                    <Link to={opportunity.link}>
                      <Button className="w-full bg-primary hover:bg-primary-hover">
                        {opportunity.action}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Donation Section */}
        <section id="doar" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 md:p-12 bg-gradient-card border-border shadow-lifted">
                <div className="text-center mb-8">
                  <div className="inline-flex p-4 rounded-full bg-accent/10 mb-6">
                    <Coins className="h-12 w-12 text-accent" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Faça uma Doação</h2>
                  <p className="text-lg text-muted-foreground">
                    Sua contribuição financeira nos ajuda a expandir nossos projetos e alcançar mais pessoas que precisam.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  <Card className="p-6 text-center border-2 border-primary/20 hover:border-primary hover:shadow-card transition-all cursor-pointer">
                    <div className="text-3xl font-bold text-primary mb-2">R$ 50</div>
                    <p className="text-sm text-muted-foreground">Alimenta 5 famílias por um dia</p>
                  </Card>
                  <Card className="p-6 text-center border-2 border-secondary/20 hover:border-secondary hover:shadow-card transition-all cursor-pointer">
                    <div className="text-3xl font-bold text-secondary mb-2">R$ 100</div>
                    <p className="text-sm text-muted-foreground">Material escolar para 10 crianças</p>
                  </Card>
                  <Card className="p-6 text-center border-2 border-accent/20 hover:border-accent hover:shadow-card transition-all cursor-pointer">
                    <div className="text-3xl font-bold text-accent mb-2">R$ 200</div>
                    <p className="text-sm text-muted-foreground">Planta 50 árvores nativas</p>
                  </Card>
                </div>

                <div className="bg-muted/50 rounded-lg p-6 mb-8">
                  <h3 className="font-semibold mb-4">Dados Bancários para Doação:</h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>Banco:</strong> Banco do Brasil</p>
                    <p><strong>Agência:</strong> 1234-5</p>
                    <p><strong>Conta Corrente:</strong> 67890-1</p>
                    <p><strong>CNPJ:</strong> 12.345.678/0001-90</p>
                    <p className="text-xs text-muted-foreground mt-4">
                      * Envie o comprovante para contato@impactosocial.org.br
                    </p>
                  </div>
                </div>

                <p className="text-sm text-center text-muted-foreground">
                  Todas as doações são transparentes e você receberá relatórios sobre como seu recurso foi aplicado.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pronto para Fazer a Diferença?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Cadastre-se agora e comece sua jornada como voluntário. Juntos podemos transformar realidades.
              </p>
              <Link to="/cadastro">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 shadow-lifted">
                  Quero Ser Voluntário
                  <Heart className="ml-2 h-5 w-5" fill="currentColor" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projetos;
