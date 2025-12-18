import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-main section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <img 
                src="/logo_biogab-removebg-preview.png" 
                alt="BIOGAB" 
                className="h-20 w-auto object-contain"
              />
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Votre partenaire de confiance pour des emballages biodégradables de qualité. 
              Ensemble, protégeons notre planète.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Liens Rapides</h4>
            <ul className="space-y-3">
              {[
                { href: "/catalogue", label: "Catalogue" },
                { href: "/services", label: "Personnalisation" },
                { href: "/a-propos", label: "Notre Histoire" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Nos Produits</h4>
            <ul className="space-y-3">
              {[
                "Sacs en Kraft",
                "Boîtes Repas",
                "Pailles Biodégradables",
                "Gobelets",
                "Couverts",
              ].map((product) => (
                <li key={product}>
                  <Link
                    to="/catalogue"
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">
                  Louis, Libreville, Gabon
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="tel:+241077617776"
                  className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 text-sm"
                >
                  +241 77 61 77 76
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="mailto:contact@biogab.com"
                  className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 text-sm"
                >
                  contactbiogab@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} BIOGAB. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link
              to="/mentions-legales"
              className="text-primary-foreground/60 hover:text-accent text-sm transition-colors duration-300"
            >
              Mentions Légales
            </Link>
            <Link
              to="/politique-confidentialite"
              className="text-primary-foreground/60 hover:text-accent text-sm transition-colors duration-300"
            >
              Politique de Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
