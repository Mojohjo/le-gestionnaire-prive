import { useState, useEffect, useRef } from "react";
import "@/App.css";
import axios from "axios";
import { Toaster, toast } from "sonner";
import { 
  FileText, 
  BarChart3, 
  Zap, 
  Shield, 
  Clock, 
  Target,
  Menu,
  X,
  Send,
  ChevronDown,
  CheckCircle
} from "lucide-react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const LOGO_URL = "https://customer-assets.emergentagent.com/job_91ea78b5-b918-44d6-9d33-de30826ad3ac/artifacts/uegvjukk_IMG_9757.png";

// Navigation Component
const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#methodologie", label: "Méthodologie" },
    { href: "#apropos", label: "À Propos" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      data-testid="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "navbar-glass" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 logo-hover" data-testid="logo-link">
            <img
              src={LOGO_URL}
              alt="Le Gestionnaire Privé"
              className="h-14 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-testid={`nav-${link.href.slice(1)}`}
                className="text-slate-300 hover:text-gold font-body text-sm tracking-wide transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              data-testid="nav-cta-button"
              className="btn-gold text-sm px-6 py-3"
            >
              Consultation Gratuite
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            data-testid="mobile-menu-toggle"
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-navy-950 border-t border-gold/10 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-testid={`mobile-nav-${link.href.slice(1)}`}
                className="block py-3 px-4 text-slate-300 hover:text-gold font-body"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="px-4 pt-4">
              <a
                href="#contact"
                className="btn-gold block text-center text-sm py-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                Consultation Gratuite
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section
      data-testid="hero-section"
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
      style={{ background: "linear-gradient(135deg, #0A1628 0%, #111F36 100%)" }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gold blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left Column - Text */}
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-gold text-sm tracking-[0.3em] uppercase font-body font-semibold">
                Gestion Premium pour Entrepreneurs
              </p>
              <div className="section-divider mt-4" />
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.1] text-white">
              Libérez votre esprit{" "}
              <span className="text-gold-gradient">:</span>
              <br />
              <span className="text-slate-200">de la facturation</span>
              <br />
              <span className="text-gold-gradient">à l'analyse de trésorerie</span>
            </h1>

            <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-body max-w-lg">
              Un partenaire dédié pour automatiser vos opérations et piloter vos finances avec précision.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contact"
                data-testid="hero-cta-primary"
                className="btn-gold text-center"
              >
                Réserver une Consultation
              </a>
              <a
                href="#services"
                data-testid="hero-cta-secondary"
                className="btn-outline text-center flex items-center justify-center gap-2"
              >
                Découvrir nos Services
                <ChevronDown size={18} />
              </a>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative hidden md:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gold/5 rounded-sm transform rotate-3" />
              <div className="relative bg-surface border border-gold/20 rounded-sm p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                    <BarChart3 className="text-gold" size={24} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Trésorerie optimisée</p>
                    <p className="text-gold number-highlight text-2xl">+32%</p>
                  </div>
                </div>
                <div className="h-px bg-gold/10" />
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                    <Clock className="text-gold" size={24} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Temps administratif économisé</p>
                    <p className="text-gold number-highlight text-2xl">15h/mois</p>
                  </div>
                </div>
                <div className="h-px bg-gold/10" />
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                    <Shield className="text-gold" size={24} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Conformité garantie</p>
                    <p className="text-gold number-highlight text-2xl">100%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-gold/50" size={32} />
      </div>
    </section>
  );
};

// Services Section
const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: FileText,
      title: "Pilotage Administratif & Facturation",
      description:
        "Gestion complète de votre cycle de facturation, suivi des paiements et relances automatisées. Une administration sans faille pour vous concentrer sur votre cœur de métier.",
      features: ["Facturation automatisée", "Suivi des encaissements", "Relances intelligentes"],
      size: "large",
    },
    {
      id: 2,
      icon: BarChart3,
      title: "Analyse de Trésorerie & Tableaux de Bord",
      description:
        "Visualisez votre santé financière en temps réel. Des dashboards personnalisés pour des décisions éclairées.",
      features: ["Prévisions cash-flow", "Indicateurs clés", "Reporting mensuel"],
      size: "tall",
    },
    {
      id: 3,
      icon: Zap,
      title: "Sales Ops & Automatisation IA",
      description:
        "Intégration Zapier, Make et outils IA pour automatiser vos processus commerciaux et gagner en efficacité.",
      features: ["Workflows automatisés", "CRM optimisé", "Intégrations no-code"],
      size: "wide",
    },
  ];

  return (
    <section
      id="services"
      data-testid="services-section"
      className="py-24 md:py-32 bg-navy"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-gold text-sm tracking-[0.3em] uppercase font-body font-semibold mb-4">
            Nos Expertises
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-medium text-white mb-6">
            Des Services Sur Mesure
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-body">
            Une approche globale pour optimiser la gestion de votre entreprise et libérer votre potentiel de croissance.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                data-testid={`service-card-${service.id}`}
                className={`service-card p-8 rounded-sm card-glow ${
                  service.size === "large"
                    ? "md:col-span-2 md:row-span-1"
                    : service.size === "tall"
                    ? "md:row-span-2"
                    : "md:col-span-2"
                }`}
              >
                <div className="h-full flex flex-col">
                  <div className="w-14 h-14 rounded-sm bg-gold/10 flex items-center justify-center mb-6">
                    <Icon className="text-gold" size={28} />
                  </div>
                  <h3 className="font-heading text-xl md:text-2xl text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 font-body mb-6 flex-grow">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-slate-300 text-sm">
                        <CheckCircle className="text-gold" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Methodology Section
const MethodologySection = () => {
  const steps = [
    {
      number: "01",
      title: "Audit & Diagnostic",
      description:
        "Analyse approfondie de vos processus actuels pour identifier les leviers d'optimisation.",
    },
    {
      number: "02",
      title: "Stratégie Personnalisée",
      description:
        "Élaboration d'un plan d'action sur mesure adapté à vos objectifs et contraintes.",
    },
    {
      number: "03",
      title: "Mise en Œuvre",
      description:
        "Déploiement des solutions avec un accompagnement pas à pas et formation de vos équipes.",
    },
    {
      number: "04",
      title: "Suivi & Optimisation",
      description:
        "Monitoring continu et ajustements pour garantir des résultats durables.",
    },
  ];

  const values = [
    { icon: Target, label: "Précision", description: "Rigueur bancaire dans chaque détail" },
    { icon: Shield, label: "Sécurité", description: "Protection de vos données sensibles" },
    { icon: Clock, label: "Efficacité", description: "Gain de temps garanti" },
  ];

  return (
    <section
      id="methodologie"
      data-testid="methodology-section"
      className="py-24 md:py-32 bg-surface"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24">
          {/* Left - Steps */}
          <div>
            <p className="text-gold text-sm tracking-[0.3em] uppercase font-body font-semibold mb-4">
              Notre Méthodologie
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-medium text-white mb-12">
              Un Processus Éprouvé
            </h2>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-gold/30 to-transparent" />

              <div className="space-y-10">
                {steps.map((step, index) => (
                  <div
                    key={step.number}
                    data-testid={`methodology-step-${step.number}`}
                    className="flex gap-8 relative"
                  >
                    <div className="w-12 h-12 rounded-full bg-navy border-2 border-gold flex items-center justify-center flex-shrink-0 z-10">
                      <span className="text-gold font-heading text-sm font-medium">
                        {step.number}
                      </span>
                    </div>
                    <div className="pt-2">
                      <h3 className="font-heading text-xl text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-slate-400 font-body">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Values */}
          <div className="lg:pt-24">
            <div className="bg-navy p-8 md:p-12 rounded-sm border border-gold/20">
              <h3 className="font-heading text-2xl text-white mb-8">
                Nos Engagements
              </h3>
              <div className="space-y-8">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div
                      key={value.label}
                      data-testid={`value-${value.label.toLowerCase()}`}
                      className="flex items-start gap-6"
                    >
                      <div className="w-12 h-12 rounded-sm bg-gold/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="text-gold" size={24} />
                      </div>
                      <div>
                        <h4 className="font-heading text-lg text-white mb-1">
                          {value.label}
                        </h4>
                        <p className="text-slate-400 font-body text-sm">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  return (
    <section
      id="apropos"
      data-testid="about-section"
      className="py-24 md:py-32 bg-navy"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gold/5 rounded-sm transform -rotate-3" />
            <div className="relative overflow-hidden rounded-sm">
              <img
                src="/johannmintzimage.png=80&w=800&auto=format&fit=crop"
                alt="Johann Mintz - Le Gestionnaire Privé"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-surface border border-gold/20 p-6 rounded-sm shadow-2xl max-w-xs">
              <p className="text-gold font-heading text-lg mb-2">
                15+ années
              </p>
              <p className="text-slate-400 font-body text-sm">
                d'expertise en banque privée et gestion patrimoniale
              </p>
            </div>
          </div>

          {/* Right - Content */}
          <div className="lg:pl-8">
            <p className="text-gold text-sm tracking-[0.3em] uppercase font-body font-semibold mb-4">
              Votre Partenaire
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-medium text-white mb-6">
              Johann Mintz
            </h2>
            <p className="text-gold font-body mb-8">
              Entrepreneur
            </p>

            <div className="space-y-6 text-slate-300 font-body leading-relaxed">
              <p>
                Après plus de 15 années au sein d'établissements bancaires privés de premier plan, j'ai acquis une expertise approfondie dans la gestion patrimoniale et l'accompagnement d'entrepreneurs exigeants.
              </p>
              <p>
                Conscient des défis opérationnels auxquels font face les dirigeants de PME, j'ai fondé <span className="text-gold">Le Gestionnaire Privé</span> avec une vision claire : apporter la rigueur et l'excellence du private banking au service de la gestion quotidienne des entreprises.
              </p>
              <p>
                Ma double expertise en finance traditionnelle et en technologies d'automatisation me permet d'offrir des solutions hybrides, alliant l'approche personnalisée d'un conseiller dédié à la puissance des outils modernes.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-10">
              <div className="bg-surface px-6 py-4 rounded-sm border border-gold/10">
                <p className="text-gold font-heading text-2xl">1</p>
                <p className="text-slate-400 text-sm">Clients accompagnés</p>
              </div>
              <div className="bg-surface px-6 py-4 rounded-sm border border-gold/10">
                <p className="text-gold font-heading text-2xl">100%</p>
                <p className="text-slate-400 text-sm">Taux de satisfaction</p>
              </div>
              <div className="bg-surface px-6 py-4 rounded-sm border border-gold/10">
                <p className="text-gold font-heading text-2xl">100 000 Euros</p>
                <p className="text-slate-400 text-sm">Trésorerie optimisée</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post(`${API}/contact`, formData);
      setSubmitted(true);
      toast.success("Votre demande a bien été envoyée. Nous vous contacterons sous 24h.");
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="py-24 md:py-32 bg-surface"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20">
          {/* Left - Info */}
          <div>
            <p className="text-gold text-sm tracking-[0.3em] uppercase font-body font-semibold mb-4">
              Prenez Contact
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-medium text-white mb-6">
              Réservez Votre Consultation Gratuite
            </h2>
            <p className="text-slate-400 font-body text-lg mb-10 max-w-lg">
              15 minutes pour évaluer vos besoins et découvrir comment nous pouvons vous accompagner dans l'optimisation de votre gestion.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-sm bg-gold/10 flex items-center justify-center">
                  <Clock className="text-gold" size={20} />
                </div>
                <div>
                  <p className="text-white font-body">Consultation de 15 minutes</p>
                  <p className="text-slate-400 text-sm">Sans engagement</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-sm bg-gold/10 flex items-center justify-center">
                  <Shield className="text-gold" size={20} />
                </div>
                <div>
                  <p className="text-white font-body">Confidentialité garantie</p>
                  <p className="text-slate-400 text-sm">Vos données sont protégées</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-sm bg-gold/10 flex items-center justify-center">
                  <Target className="text-gold" size={20} />
                </div>
                <div>
                  <p className="text-white font-body">Réponse sous 24h</p>
                  <p className="text-slate-400 text-sm">Disponibilité assurée</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-navy p-8 md:p-10 rounded-sm border border-gold/20">
            {submitted ? (
              <div className="text-center py-12" data-testid="contact-success">
                <CheckCircle className="text-gold mx-auto mb-6" size={48} />
                <h3 className="font-heading text-2xl text-white mb-4">
                  Merci pour votre message
                </h3>
                <p className="text-slate-400 font-body">
                  Nous vous contacterons dans les plus brefs délais.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-outline mt-8"
                  data-testid="contact-new-message"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} data-testid="contact-form">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-slate-300 text-sm font-body mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Jean Dupont"
                      className="input-dark w-full"
                      data-testid="contact-name-input"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 text-sm font-body mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="jean@entreprise.fr"
                      className="input-dark w-full"
                      data-testid="contact-email-input"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-slate-300 text-sm font-body mb-2">
                      Entreprise
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Nom de votre société"
                      className="input-dark w-full"
                      data-testid="contact-company-input"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 text-sm font-body mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+33 6 12 34 56 78"
                      className="input-dark w-full"
                      data-testid="contact-phone-input"
                    />
                  </div>
                </div>
                <div className="mb-8">
                  <label className="block text-slate-300 text-sm font-body mb-2">
                    Votre message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Décrivez brièvement vos besoins..."
                    className="input-dark w-full resize-none"
                    data-testid="contact-message-input"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gold w-full flex items-center justify-center gap-3"
                  data-testid="contact-submit-button"
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Demander ma Consultation
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      data-testid="footer"
      className="bg-navy border-t border-gold/10 py-12"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <img
              src={LOGO_URL}
              alt="Le Gestionnaire Privé"
              className="h-12 w-auto"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-400 font-body">
            <a href="#services" className="hover:text-gold transition-colors">
              Services
            </a>
            <a href="#methodologie" className="hover:text-gold transition-colors">
              Méthodologie
            </a>
            <a href="#apropos" className="hover:text-gold transition-colors">
              À Propos
            </a>
            <a href="#contact" className="hover:text-gold transition-colors">
              Contact
            </a>
          </div>

          <p className="text-slate-500 text-sm font-body">
            © {currentYear} Le Gestionnaire Privé. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  return (
    <div className="noise-overlay">
      <Toaster 
        position="top-right" 
        toastOptions={{
          style: {
            background: '#111F36',
            color: '#F8FAFC',
            border: '1px solid rgba(201, 169, 98, 0.3)',
          },
        }}
      />
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <MethodologySection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
