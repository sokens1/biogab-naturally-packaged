import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTASection from "@/components/CTASection";
import { Check, Palette, Package, Truck } from "lucide-react";

const steps = [
  {
    icon: Palette,
    title: "1. Conception",
    description:
      "Partagez-nous votre logo et vos idées. Notre équipe créative vous propose des maquettes personnalisées.",
  },
  {
    icon: Package,
    title: "2. Production",
    description:
      "Une fois le design validé, nous lançons la production avec des matériaux 100% biodégradables.",
  },
  {
    icon: Truck,
    title: "3. Livraison",
    description:
      "Vos emballages personnalisés sont livrés directement à votre entreprise dans les meilleurs délais.",
  },
];

const benefits = [
  "Renforce l'identité de votre marque",
  "Différencie vos produits de la concurrence",
  "Montre votre engagement écologique",
  "Crée une expérience client mémorable",
  "Professionnalise votre image",
  "Options de tailles et formats variés",
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero */}
        <section className="bg-hero-gradient py-16 md:py-24">
          <div className="container-main px-4 text-center">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-4">
              Services de Personnalisation
            </h1>
            <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto">
              Ajoutez votre identité à nos emballages écologiques. Logo, couleurs, 
              messages — tout est possible avec BIOGAB.
            </p>
          </div>
        </section>

        {/* Process */}
        <section className="section-padding bg-background">
          <div className="container-main px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                Comment ça marche
              </span>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground">
                Un processus simple en 3 étapes
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-border" />
                  )}
                  
                  <div className="bg-card rounded-2xl p-8 text-center card-nature relative z-10">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-accent flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-accent-foreground" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding bg-muted">
          <div className="container-main px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                  Avantages
                </span>
                <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
                  Pourquoi personnaliser vos emballages ?
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Des emballages à votre image renforcent votre marque et montrent 
                  votre engagement pour l'environnement.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-accent-foreground" />
                      </div>
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card rounded-2xl p-8 card-nature">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Types de personnalisation
                </h3>
                <div className="space-y-4">
                  {[
                    { title: "Impression Logo", desc: "Votre logo imprimé en haute qualité" },
                    { title: "Couleurs Personnalisées", desc: "Choix de couleurs selon votre charte" },
                    { title: "Messages & Slogans", desc: "Textes promotionnels ou informatifs" },
                    { title: "QR Codes", desc: "Liens vers vos réseaux ou site web" },
                  ].map((type, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-muted hover:bg-primary/5 transition-colors duration-300"
                    >
                      <h4 className="font-semibold text-foreground">{type.title}</h4>
                      <p className="text-muted-foreground text-sm">{type.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Services;
