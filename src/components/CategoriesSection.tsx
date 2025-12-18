import CategoryCard from "./CategoryCard";
import sacsKraft from "@/assets/category-sacs-kraft.jpg";
import boitesRepas from "@/assets/category-boites-repas.jpg";
import pailles from "@/assets/category-pailles.jpg";
import gobelets from "@/assets/category-gobelets.jpg";

const categories = [
  {
    title: "Sacs en Kraft",
    description: "Sacs résistants et élégants pour tous vos besoins d'emballage.",
    image: sacsKraft,
    href: "/catalogue?category=sacs",
  },
  {
    title: "Boîtes Repas",
    description: "Solutions d'emballage alimentaire pour la restauration rapide.",
    image: boitesRepas,
    href: "/catalogue?category=boites",
  },
  {
    title: "Pailles",
    description: "Pailles biodégradables pour une consommation responsable.",
    image: pailles,
    href: "/catalogue?category=pailles",
  },
  {
    title: "Gobelets & Couverts",
    description: "Vaisselle jetable écologique pour vos événements.",
    image: gobelets,
    href: "/catalogue?category=gobelets",
  },
];

const CategoriesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-main px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Nos Produits
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Catégories <span className="text-primary">Vedettes</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Découvrez notre gamme complète d'emballages biodégradables adaptés à tous vos besoins.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CategoryCard {...category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
