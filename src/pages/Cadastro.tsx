import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { UserPlus } from "lucide-react";
import { FormEvent, useState } from "react";
import cadastroHero from "@/assets/cadastro-hero.jpg";

const Cadastro = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio do formulário
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Cadastro realizado com sucesso!",
        description: "Entraremos em contato em breve com as próximas etapas.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  const handleCepBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const cep = e.target.value.replace(/\D/g, '');
    if (cep.length === 8) {
      // Simular busca de CEP - em produção, usar API ViaCEP
      toast({
        title: "CEP encontrado",
        description: "Endereço preenchido automaticamente.",
      });
    }
  };

  const formatCPF = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1');
  };

  const formatPhone = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1');
  };

  const formatCEP = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 mb-6">
                <UserPlus className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Cadastro de Voluntário</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Preencha o formulário abaixo para se tornar parte da nossa rede de voluntários. 
                Juntos podemos fazer a diferença!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Image Section */}
              <Card className="overflow-hidden border-border bg-gradient-card hidden md:block">
                <img
                  src={cadastroHero}
                  alt="Pessoa preenchendo cadastro"
                  className="w-full h-full object-cover"
                />
              </Card>

              {/* Form Section */}
              <Card className="border-border bg-gradient-card shadow-lifted">
                <CardHeader>
                  <CardTitle>Dados Pessoais</CardTitle>
                  <CardDescription>
                    Todos os campos são obrigatórios. Seus dados estão protegidos pela LGPD.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Nome Completo */}
                    <div className="space-y-2">
                      <Label htmlFor="nome" className="text-sm font-medium">
                        Nome Completo
                      </Label>
                      <Input
                        id="nome"
                        name="nome"
                        type="text"
                        placeholder="Digite seu nome completo"
                        required
                        minLength={3}
                        maxLength={100}
                        className="w-full"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        E-mail
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="seu@email.com"
                        required
                        maxLength={255}
                        className="w-full"
                      />
                    </div>

                    {/* CPF */}
                    <div className="space-y-2">
                      <Label htmlFor="cpf" className="text-sm font-medium">
                        CPF
                      </Label>
                      <Input
                        id="cpf"
                        name="cpf"
                        type="text"
                        placeholder="000.000.000-00"
                        required
                        pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
                        maxLength={14}
                        className="w-full"
                        onChange={(e) => {
                          e.target.value = formatCPF(e.target.value);
                        }}
                      />
                    </div>

                    {/* Telefone e Data de Nascimento */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="telefone" className="text-sm font-medium">
                          Telefone
                        </Label>
                        <Input
                          id="telefone"
                          name="telefone"
                          type="tel"
                          placeholder="(00) 00000-0000"
                          required
                          pattern="\(\d{2}\) \d{5}-\d{4}"
                          maxLength={15}
                          onChange={(e) => {
                            e.target.value = formatPhone(e.target.value);
                          }}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="dataNascimento" className="text-sm font-medium">
                          Data de Nascimento
                        </Label>
                        <Input
                          id="dataNascimento"
                          name="dataNascimento"
                          type="date"
                          required
                          max={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                    </div>

                    {/* CEP */}
                    <div className="space-y-2">
                      <Label htmlFor="cep" className="text-sm font-medium">
                        CEP
                      </Label>
                      <Input
                        id="cep"
                        name="cep"
                        type="text"
                        placeholder="00000-000"
                        required
                        pattern="\d{5}-\d{3}"
                        maxLength={9}
                        onBlur={handleCepBlur}
                        onChange={(e) => {
                          e.target.value = formatCEP(e.target.value);
                        }}
                      />
                    </div>

                    {/* Endereço */}
                    <div className="space-y-2">
                      <Label htmlFor="endereco" className="text-sm font-medium">
                        Endereço
                      </Label>
                      <Input
                        id="endereco"
                        name="endereco"
                        type="text"
                        placeholder="Rua, número, complemento"
                        required
                        maxLength={200}
                        className="w-full"
                      />
                    </div>

                    {/* Cidade e Estado */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="cidade" className="text-sm font-medium">
                          Cidade
                        </Label>
                        <Input
                          id="cidade"
                          name="cidade"
                          type="text"
                          placeholder="Sua cidade"
                          required
                          maxLength={100}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="estado" className="text-sm font-medium">
                          Estado
                        </Label>
                        <select
                          id="estado"
                          name="estado"
                          required
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          <option value="">Selecione</option>
                          <option value="AC">AC</option>
                          <option value="AL">AL</option>
                          <option value="AP">AP</option>
                          <option value="AM">AM</option>
                          <option value="BA">BA</option>
                          <option value="CE">CE</option>
                          <option value="DF">DF</option>
                          <option value="ES">ES</option>
                          <option value="GO">GO</option>
                          <option value="MA">MA</option>
                          <option value="MT">MT</option>
                          <option value="MS">MS</option>
                          <option value="MG">MG</option>
                          <option value="PA">PA</option>
                          <option value="PB">PB</option>
                          <option value="PR">PR</option>
                          <option value="PE">PE</option>
                          <option value="PI">PI</option>
                          <option value="RJ">RJ</option>
                          <option value="RN">RN</option>
                          <option value="RS">RS</option>
                          <option value="RO">RO</option>
                          <option value="RR">RR</option>
                          <option value="SC">SC</option>
                          <option value="SP">SP</option>
                          <option value="SE">SE</option>
                          <option value="TO">TO</option>
                        </select>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary-hover"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Enviando..." : "Finalizar Cadastro"}
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      Ao se cadastrar, você concorda com nossos termos de uso e política de privacidade.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Info Cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="p-6 text-center border-border bg-gradient-card">
                <div className="text-3xl font-bold text-primary mb-2">1</div>
                <h3 className="font-semibold mb-2">Cadastre-se</h3>
                <p className="text-sm text-muted-foreground">
                  Preencha o formulário com seus dados pessoais
                </p>
              </Card>
              
              <Card className="p-6 text-center border-border bg-gradient-card">
                <div className="text-3xl font-bold text-secondary mb-2">2</div>
                <h3 className="font-semibold mb-2">Receba Contato</h3>
                <p className="text-sm text-muted-foreground">
                  Nossa equipe entrará em contato em até 48 horas
                </p>
              </Card>
              
              <Card className="p-6 text-center border-border bg-gradient-card">
                <div className="text-3xl font-bold text-accent mb-2">3</div>
                <h3 className="font-semibold mb-2">Comece a Ajudar</h3>
                <p className="text-sm text-muted-foreground">
                  Participe de projetos e faça a diferença
                </p>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cadastro;
