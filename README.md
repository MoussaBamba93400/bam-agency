# BAM Agency — site vitrine

Site de l'agence **BAM Agency** orienté commerçants & petites entreprises locales
(restaurants, artisans, coiffeurs, boutiques…). Projet **autonome**, séparé du
portfolio développeur (`../portfolio-project`), mais qui réutilise le même design
system (thème sombre, accent violet, Space Grotesk / Manrope, animations `Reveal`).

## Démarrer

```bash
nvm use          # Node 22 (voir .nvmrc)
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production
```

## Structure

```
app/
  layout.tsx            Layout racine : fonts, métadonnées, favicon BAM
  page.tsx              Assemble les sections
  data-bam.ts           ← TOUT le contenu éditable (textes, offres, FAQ…)
  globals.css           Design system (repris du portfolio)
  fonts.ts
  components/
    BamLogo             Logo BAM en pastille blanche (lisible sur fond sombre)
    BamNav              Nav + menu mobile + CTA « Audit gratuit »
    BamHero             Titre + sous-titre + lien Instagram
    Services            3 offres : Sites web → Google → Sur-mesure (relégué)
    Showcase            Réalisations : Flavor (resto) + Archex (archi)
    Process             « Comment ça se passe » en 4 étapes
    Faq                 Rassurance : prix, délais, « je n'y connais rien »
    Audit               Formulaire d'audit gratuit (prospection)
    BamFooter           Logo, liens, Instagram, contact
    Reveal / ProjectMockup   repris du portfolio
public/
  BAM.jpg               Logo (fond blanc, aussi utilisé en favicon)
```

## À personnaliser dans `app/data-bam.ts`

- `BRAND.instagram` / `instagramHandle` — **vérifier le vrai lien de la page Insta**
- `BRAND.email` — adresse qui reçoit les demandes d'audit
- `BRAND.phone` — laissé vide pour l'instant
- Textes des offres, réalisations, FAQ, étapes.

Le formulaire d'audit est *front-only* : il ouvre le client mail pré-rempli
(comme le portfolio). Pour recevoir les leads sans dépendre du client mail,
brancher un service (Formspree, Resend, une route API…) plus tard.
