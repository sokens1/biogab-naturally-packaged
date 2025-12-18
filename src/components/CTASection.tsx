import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="section-padding bg-hero-gradient relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-leaf/10 rounded-full blur-3xl" />

      <div className="container-main px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-6">
            Prêt à passer au{" "}
            <span className="text-accent">biodégradable</span> ?
          </h2>
          <p className="text-primary-foreground/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour découvrir comment nos emballages 
            écologiques peuvent transformer votre entreprise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="btn-cta rounded-full px-8 py-6 text-lg group"
            >
              <Link to="/contact">
                Demander un Devis Gratuit
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-6 text-lg border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50 bg-transparent"
            >
              <Link to="/catalogue">Voir le Catalogue</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
