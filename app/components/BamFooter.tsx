import Link from "next/link";
import BamLogo from "./BamLogo";
import { BRAND } from "../data-bam";
import styles from "./BamFooter.module.css";

export default function BamFooter() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brandBlock}>
            <a href="#top" className={styles.brand}>
              <BamLogo size={40} />
              <span className={styles.brandText}>
                BAM <span className={styles.brandAccent}>Agency</span>
              </span>
            </a>
            <p className={styles.pitch}>
              L&apos;agence web des commerces locaux. On vous rend visible et
              on fait venir vos clients.
            </p>
          </div>

          <div className={styles.cols}>
            <div className={styles.col}>
              <span className={styles.colLabel}>Prestations</span>
              <a href="#services">Sites web</a>
              <a href="#services">Être trouvé sur Google</a>
              <a href="#services">Solutions sur-mesure</a>
            </div>
            <div className={styles.col}>
              <span className={styles.colLabel}>Le studio</span>
              <a href="#realisations">Réalisations</a>
              <a href="#process">Comment ça marche</a>
              <a href="#faq">Questions fréquentes</a>
            </div>
            <div className={styles.col}>
              <span className={styles.colLabel}>Contact</span>
              <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
              {BRAND.phone ? (
                <a href={BRAND.phoneHref}>{BRAND.phoneDisplay}</a>
              ) : null}
              <a href={BRAND.instagram} target="_blank" rel="noreferrer">
                Instagram {BRAND.instagramHandle}
              </a>
              <a href="#audit" className={styles.footCta}>
                Audit gratuit →
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © {new Date().getFullYear()} {BRAND.name}. Tous droits réservés.
          </p>
          <Link href="/" className={styles.devLink}>
            Portfolio développeur ↗
          </Link>
        </div>
      </div>
    </footer>
  );
}
