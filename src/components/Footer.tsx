import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-muted border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Missão */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-gradient-hero p-2">
                <Heart className="h-5 w-5 text-white" fill="white" />
              </div>
              <span className="text-lg font-bold bg-gradient-hero bg-clip-text text-transparent">
                Impacto Social
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Transformando vidas através da ação voluntária e solidariedade. Juntos construímos um futuro melhor.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/projetos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Projetos
                </Link>
              </li>
              <li>
                <Link to="/cadastro" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Cadastre-se
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                contato@impactosocial.org.br
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                (11) 3456-7890
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                São Paulo, SP - Brasil
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="font-semibold mb-4">Siga-nos</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 rounded-full bg-background border hover:bg-primary hover:text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-background border hover:bg-secondary hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-background border hover:bg-accent hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Participe da nossa comunidade e acompanhe nossas ações sociais.
            </p>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Impacto Social. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
