import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";

import sacsKraft from "@/assets/category-sacs-kraft.jpg";
import boitesRepas from "@/assets/category-boites-repas.jpg";
import pailles from "@/assets/category-pailles.jpg";
import gobelets from "@/assets/category-gobelets.jpg";

const products = [
  {
    id: 1,
    name: "Sac Kraft Petit",
    category: "sacs",
    description: "Sac en papier kraft 18x8x24cm",
    image: sacsKraft,
  },
  {
    id: 2,
    name: "Sac Kraft Moyen",
    category: "sacs",
    description: "Sac en papier kraft 26x12x35cm",
    image: sacsKraft,
  },
  {
    id: 3,
    name: "Boîte Repas Standard",
    category: "boites",
    description: "Boîte alimentaire 750ml",
    image: boitesRepas,
  },
  {
    id: 4,
    name: "Boîte Repas Grande",
    category: "boites",
    description: "Boîte alimentaire 1000ml",
    image: boitesRepas,
  },
  {
    id: 5,
    name: "Pailles Papier (Pack 100)",
    category: "pailles",
    description: "Pailles biodégradables colorées",
    image: pailles,
  },
  {
    id: 6,
    name: "Pailles Bambou (Pack 50)",
    category: "pailles",
    description: "Pailles réutilisables en bambou",
    image: pailles,
  },
  {
    id: 7,
    name: "Gobelet 250ml (Pack 50)",
    category: "gobelets",
    description: "Gobelets en papier kraft",
    image: gobelets,
  },
  {
    id: 8,
    name: "Set Couverts Bois",
    category: "gobelets",
    description: "Couteau, fourchette, cuillère",
    image: gobelets,
  },
];

const categories = [
  { id: "all", label: "Tous" },
  { id: "sacs", label: "Sacs en Kraft" },
  { id: "boites", label: "Boîtes Repas" },
  { id: "pailles", label: "Pailles" },
  { id: "gobelets", label: "Gobelets & Couverts" },
];

const Catalogue = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === "all" || product.category === activeCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero */}
        <section className="bg-hero-gradient py-16 md:py-24">
          <div className="container-main px-4 text-center">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-4">
              Notre Catalogue
            </h1>
            <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto">
              Découvrez notre gamme complète d'emballages biodégradables de qualité professionnelle.
            </p>
          </div>
        </section>

        {/* Filters & Products */}
        <section className="section-padding bg-background">
          <div className="container-main px-4">
            {/* Search & Filter Bar */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Rechercher un produit..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-full border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeCategory === category.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group bg-card rounded-2xl overflow-hidden card-nature"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {product.description}
                    </p>
                    <Button className="w-full btn-cta rounded-full">
                      Demander un Devis
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <Filter className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Aucun produit ne correspond à votre recherche.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Catalogue;
