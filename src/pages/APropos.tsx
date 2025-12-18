import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTASection from "@/components/CTASection";
import { Target, Eye, Heart, Users, Award, Globe } from "lucide-react";
import heroImage from "@/assets/hero-biogab.jpg";

const APropos = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="BIOGAB équipe"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/90" />
          </div>
          <div className="container-main px-4 relative z-10 text-center">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6">
              Notre Histoire
            </h1>
            <p className="text-primary-foreground/90 text-lg md:text-xl max-w-3xl mx-auto">
              Depuis notre création, BIOGAB s'engage à fournir des solutions d'emballage 
              durables qui protègent à la fois vos produits et notre planète.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding bg-background">
          <div className="container-main px-4">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Mission */}
              <div className="bg-card rounded-2xl p-8 card-nature">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Notre Mission
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Fournir aux entreprises africaines des solutions d'emballage biodégradables 
                  de haute qualité, accessibles et personnalisables, tout en contribuant à la 
                  préservation de notre environnement pour les générations futures.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-card rounded-2xl p-8 card-nature">
                <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-accent" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Notre Vision
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Devenir le leader des emballages écologiques en Afrique centrale, en inspirant 
                  un changement positif dans les habitudes de consommation et en prouvant que 
                  durabilité et qualité vont de pair.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-muted">
          <div className="container-main px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                Ce qui nous guide
              </span>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground">
                Nos Valeurs
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Heart,
                  title: "Engagement",
                  description: "Dévoués à la cause environnementale",
                },
                {
                  icon: Award,
                  title: "Qualité",
                  description: "Des produits irréprochables",
                },
                {
                  icon: Users,
                  title: "Proximité",
                  description: "À l'écoute de nos clients",
                },
                {
                  icon: Globe,
                  title: "Durabilité",
                  description: "Penser aux générations futures",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 text-center card-nature"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="section-padding bg-hero-gradient">
          <div className="container-main px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: "5+", label: "Années d'expérience" },
                { value: "500+", label: "Clients satisfaits" },
                { value: "50+", label: "Produits disponibles" },
                { value: "100%", label: "Biodégradable" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="font-heading text-4xl md:text-5xl font-bold text-accent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-primary-foreground/80">
                    {stat.label}
                  </div>
                </div>
              ))}
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

export default APropos;
