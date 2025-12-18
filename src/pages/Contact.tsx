import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero */}
        <section className="bg-hero-gradient py-16 md:py-24">
          <div className="container-main px-4 text-center">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-4">
              Contactez-Nous
            </h1>
            <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto">
              Une question ? Un devis ? Notre équipe est à votre écoute pour 
              vous accompagner dans vos projets d'emballage écologique.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding bg-background">
          <div className="container-main px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-6">
                  Nos Coordonnées
                </h2>
                <p className="text-muted-foreground mb-8">
                  N'hésitez pas à nous contacter par le moyen qui vous convient le mieux. 
                  Notre équipe vous répondra rapidement.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      icon: MapPin,
                      title: "Adresse",
                      content: "Louis, Libreville, Gabon",
                    },
                    {
                      icon: Phone,
                      title: "Téléphone",
                      content: "+241 77 61 77 76",
                      href: "tel:+241077617776",
                    },
                    {
                      icon: Mail,
                      title: "Email",
                      content: "contactbiogab@gmail.com",
                      href: "mailto:contactbiogab@gmail.com",
                    },
                    {
                      icon: Clock,
                      title: "Horaires",
                      content: "Lun - Ven: 8h00 - 18h00",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {item.title}
                        </h3>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{item.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map */}
                <div className="mt-8 rounded-2xl overflow-hidden h-64 bg-muted">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127550.75289956612!2d9.4012!3d0.4162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x107f3b8a5e3f3b0d%3A0x3b0b0b0b0b0b0b0b!2sLibreville%2C%20Gabon!5e0!3m2!1sen!2s!4v1623456789"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localisation BIOGAB"
                  />
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-card rounded-2xl p-8 card-nature">
                <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-6">
                  Envoyez-nous un message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="+241 XX XX XX XX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Entreprise
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Nom de votre entreprise"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                      placeholder="Décrivez votre projet ou votre demande..."
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full btn-cta rounded-full py-6 text-lg group"
                  >
                    Envoyer le Message
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
