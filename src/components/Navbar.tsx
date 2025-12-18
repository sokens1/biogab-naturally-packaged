import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/catalogue", label: "Catalogue" },
    { href: "/services", label: "Services" },
    { href: "/a-propos", label: "À Propos" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <nav className="container-main">
        <div className="flex items-center justify-between h-16 md:h-16 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src="/logo_biogab-removebg-preview.png" 
              alt="BIOGAB" 
              className="h-16 w-auto max-h-full object-contain transition-opacity duration-300 group-hover:opacity-80"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive(link.href)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="btn-cta rounded-full px-6">
              <Link to="/contact">Demander un Devis</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg animate-fade-up">
            <div className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive(link.href)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="btn-cta rounded-full mt-2">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Demander un Devis
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
