import { Link, useLocation } from "react-router-dom";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="rounded-full bg-gradient-hero p-2 shadow-glow transition-transform group-hover:scale-110">
            <Heart className="h-5 w-5 text-white" fill="white" />
          </div>
          <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            Impacto Social
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/") ? "text-primary" : "text-foreground"
            }`}
          >
            Início
          </Link>
          <Link
            to="/projetos"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/projetos") ? "text-primary" : "text-foreground"
            }`}
          >
            Projetos
          </Link>
          <Link to="/cadastro">
            <Button variant="default" className="bg-primary hover:bg-primary-hover">
              Cadastre-se
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-foreground"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>
            <Link
              to="/projetos"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/projetos") ? "text-primary" : "text-foreground"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Projetos
            </Link>
            <Link to="/cadastro" onClick={() => setIsMenuOpen(false)}>
              <Button variant="default" className="w-full bg-primary hover:bg-primary-hover">
                Cadastre-se
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
