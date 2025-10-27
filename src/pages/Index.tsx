import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Target, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-volunteers.jpg";

const Index = () => {
  const stats = [
    { icon: Users, value: "5.000+", label: "Voluntários Ativos" },
    { icon: Heart, value: "150+", label: "Projetos Realizados" },
    { icon: Target, value: "20.000+", label: "Vidas Impactadas" },
    { icon: TrendingUp, value: "98%", label: "Taxa de Satisfação" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Solidariedade",
      description: "Acreditamos no poder da união e da empatia para transformar realidades.",
    },
    {
      icon: Target,
      title: "Impacto Real",
      description: "Focamos em projetos que geram resultados mensuráveis e duradouros.",
    },
    {
      icon: CheckCircle2,
      title: "Transparência",
      description: "Prestamos contas de cada ação, garantindo confiança e credibilidade.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Voluntários trabalhando juntos"
              className="w-full h-full object-cover mix-blend-overlay"
            />
          </div>
          
          <div className="relative container mx-auto px-4 py-24 md:py-32">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
                Transformando Vidas Através da Ação Social
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Somos uma organização comprometida em criar impacto positivo nas comunidades brasileiras. 
                Junte-se a nós nessa missão de construir um futuro mais justo e solidário.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/projetos">
                  <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 shadow-lifted">
                    Conheça Nossos Projetos
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/cadastro">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 backdrop-blur-sm">
                    Seja Voluntário
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <stat.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Quem Somos</h2>
              <p className="text-lg text-muted-foreground">
                O Impacto Social nasceu da convicção de que pequenas ações podem gerar grandes transformações. 
                Desde 2015, mobilizamos voluntários, recursos e parcerias para desenvolver projetos nas áreas 
                de educação, alimentação e meio ambiente.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-card transition-shadow bg-gradient-card border-border">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-4 rounded-full bg-gradient-hero">
                        <value.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
          </div>
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Faça Parte Dessa Transformação
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Cada pessoa pode fazer a diferença. Cadastre-se agora e descubra como você pode 
                contribuir para construir um Brasil mais solidário e justo.
              </p>
              <Link to="/cadastro">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 shadow-lifted">
                  Cadastre-se Gratuitamente
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Entre em Contato</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Tem dúvidas ou quer saber mais sobre nossos projetos? Entre em contato conosco!
              </p>
              
              <Card className="p-8 bg-gradient-card border-border">
                <div className="space-y-6">
                  <div className="flex items-center justify-center gap-3 text-left">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <a href="mailto:contato@impactosocial.org.br" className="text-primary hover:underline">
                        contato@impactosocial.org.br
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center gap-3 text-left">
                    <div className="p-3 rounded-full bg-secondary/10">
                      <Users className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <div className="font-semibold">Telefone</div>
                      <a href="tel:+551134567890" className="text-secondary hover:underline">
                        (11) 3456-7890
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
