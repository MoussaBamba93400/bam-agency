// ─────────────────────────────────────────────────────────────
// Contenu du site "BAM Agency" — cible : commerçants & petites
// entreprises locales. Zéro jargon technique : que des bénéfices.
// Modifiez librement les textes, l'email, le téléphone et l'Instagram.
// ─────────────────────────────────────────────────────────────

export const BRAND = {
  name: "BAM Agency",
  // Tagline courte affichée dans le hero / méta
  tagline:
    "L'agence qui crée des sites web pour les commerces locaux : plus de visibilité sur Google, plus de clients qui poussent la porte.",
  // ← Vérifiez / remplacez par le vrai lien de votre page Instagram
  instagram: "https://www.instagram.com/bam.web.agency/",
  instagramHandle: "@bam.web.agency",
  email: "moussa.bam.pro@gmail.com",
  // Affiché et cliquable (tel:) — laissé vide = liens téléphone masqués
  phone: "0651734150",
  phoneDisplay: "06 51 73 41 50",
  phoneHref: "tel:+33651734150",
};

// ── Hero ───────────────────────────────────────────────────────
export const HERO = {
  eyebrow: "Agence web pour commerces locaux",
  // Titre validé (variante A)
  title: "Des sites web qui ramènent des clients dans votre commerce",
  subtitle:
    "Restaurant, artisan, coiffeur, boutique… On crée votre site et on vous rend visible sur Google, pour que les gens du quartier vous trouvent — et viennent.",
  primaryCta: "Recevoir mon audit gratuit",
  secondaryCta: "Voir des exemples",
};

// ── Services (3 offres BAM, hiérarchisées) ─────────────────────
export type Service = {
  id: string;
  eyebrow: string;
  title: string;
  pitch: string;
  benefits: string[];
  featured?: boolean;
  minor?: boolean;
};

export const SERVICES: Service[] = [
  {
    id: "site",
    eyebrow: "Prestation n°1",
    title: "Un site qui donne envie de pousser la porte",
    pitch:
      "Votre vitrine en ligne, ouverte 24h/24. Une image professionnelle qui inspire confiance avant même que le client n'entre.",
    benefits: [
      "Un design soigné qui reflète l'ambiance de votre commerce",
      "Vos produits, votre carte ou vos services présentés clairement",
      "Les boutons qui comptent : appeler, réserver, itinéraire",
      "Rapide et impeccable sur mobile, là où vos clients regardent",
    ],
  },
  {
    id: "google",
    eyebrow: "L'argument qui change tout",
    title: "Être trouvé sur Google quand on cherche près de chez vous",
    pitch:
      "Quand quelqu'un tape « restaurant », « coiffeur » ou « fleuriste » près de chez lui, c'est vous qui devez apparaître. Pas le concurrent d'à côté.",
    benefits: [
      "Apparaître dans les recherches locales de votre quartier",
      "Une fiche Google propre, à jour, avec vos horaires et photos",
      "Vos meilleurs avis clients mis en valeur",
      "Plus d'appels, plus de visites, plus de réservations",
    ],
    featured: true,
  },
  {
    id: "surmesure",
    eyebrow: "Pour aller plus loin",
    title: "Solutions sur-mesure",
    pitch:
      "Un projet plus ambitieux ? Réservation en ligne, commande et click & collect, espace client… On construit l'outil qu'il vous faut, quand vous en avez besoin.",
    benefits: [],
    minor: true,
  },
];

// ── Réalisations (uniquement les vitrines qui parlent à la cible) ─
export type Showcase = {
  slug: string; // réutilise les aperçus CSS existants (ProjectMockup)
  label: string;
  name: string;
  description: string;
  tags: string[];
  live: string;
  accent: string;
};

export const SHOWCASE: Showcase[] = [
  {
    slug: "flavor",
    label: "Restaurant",
    name: "Flavor",
    description:
      "Une vitrine élégante qui donne faim — et donne envie de réserver. L'ambiance du lieu, la carte et le bouton de réservation mis en avant, dès la première seconde.",
    tags: ["Restaurant", "Réservation en un clic", "Parfait sur mobile"],
    live: "https://flavor-alpha.vercel.app/",
    accent: "#c9a96e",
  },
  {
    slug: "archex",
    label: "Artisan & pro",
    name: "Archex",
    description:
      "Un site sobre et haut de gamme qui installe la confiance immédiatement. Idéal pour présenter un savoir-faire, des réalisations et donner envie de vous contacter.",
    tags: ["Image premium", "Galerie de réalisations", "Prise de contact facile"],
    live: "https://archex-eight.vercel.app/",
    accent: "#c45d3e",
  },
];

// ── Comment ça se passe (process rassurant) ────────────────────
export const STEPS = [
  {
    n: "01",
    title: "On échange",
    text: "On discute de votre commerce, de vos clients et de vos envies. Gratuit et sans engagement.",
  },
  {
    n: "02",
    title: "Je conçois",
    text: "Je crée une première version de votre site, pensée pour votre univers et vos clients.",
  },
  {
    n: "03",
    title: "Vous validez",
    text: "On ajuste ensemble, tranquillement, jusqu'à ce que le résultat vous ressemble à 100 %.",
  },
  {
    n: "04",
    title: "Mise en ligne",
    text: "Votre site est publié, visible sur Google et prêt à faire venir de nouveaux clients.",
  },
];

// ── Vos questions / on vous rassure ────────────────────────────
export const FAQ = [
  {
    q: "Combien ça coûte ?",
    a: "Chaque commerce est différent. Après un échange gratuit, vous recevez un devis clair et fixe, adapté à votre budget — jamais de mauvaise surprise à la fin.",
  },
  {
    q: "Combien de temps ça prend ?",
    a: "En général, votre site est en ligne en 1 à 3 semaines selon le projet. On avance à votre rythme, sans vous mettre la pression.",
  },
  {
    q: "Je n'y connais rien en informatique, c'est un problème ?",
    a: "Pas du tout, c'est justement mon métier. Vous n'avez rien à installer ni à gérer : je m'occupe de toute la technique et je vous explique tout simplement, sans jargon.",
  },
  {
    q: "Et une fois le site en ligne ?",
    a: "Je reste disponible pour les mises à jour et faire évoluer votre site quand votre commerce grandit. Vous n'êtes jamais seul.",
  },
];

// ── Audit gratuit (outil de prospection principal) ─────────────
export const AUDIT = {
  eyebrow: "Votre premier pas",
  title: "Recevez un audit gratuit de votre présence en ligne",
  lead: "En 2 minutes, dites-moi qui vous êtes. Je regarde comment on vous trouve aujourd'hui sur Google et sur le web, et je vous envoie 3 conseils concrets pour attirer plus de clients. C'est gratuit et sans engagement.",
  businessTypes: [
    "Restaurant / bar / café",
    "Coiffeur / esthétique / bien-être",
    "Artisan / BTP",
    "Boutique / commerce",
    "Santé / profession libérale",
    "Autre",
  ],
};
