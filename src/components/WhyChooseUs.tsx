import { Leaf, Shield, Palette } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "100% Écologique",
    description:
      "Tous nos produits sont fabriqués à partir de matériaux biodégradables et compostables, respectueux de l'environnement.",
  },
  {
    icon: Shield,
    title: "Qualité Robuste",
    description:
      "Nos emballages allient durabilité et résistance pour protéger vos produits tout en restant écologiques.",
  },
  {
    icon: Palette,
    title: "Personnalisable",
    description:
      "Ajoutez votre logo et vos couleurs à nos emballages pour renforcer l'identité de votre marque.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-main px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Nos Avantages
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Pourquoi choisir{" "}
            <span className="text-primary">BIOGAB</span> ?
          </h2>
          <p className="text-muted-foreground text-lg">
            Des solutions d'emballage qui font la différence pour votre entreprise et pour la planète.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 card-nature text-center"
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-8 h-8 text-primary group-hover:text-accent-foreground transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
