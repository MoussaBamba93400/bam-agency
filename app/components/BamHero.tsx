import { BRAND, HERO } from "../data-bam";
import styles from "./BamHero.module.css";

export default function BamHero() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.glow} aria-hidden />
      <div className={`container ${styles.content}`}>
        <p className={`eyebrow ${styles.eyebrow}`}>{HERO.eyebrow}</p>

        <h1 className={styles.title}>
          {HERO.title}
        </h1>

        <p className={styles.subtitle}>{HERO.subtitle}</p>

        <div className={styles.actions}>
          <a href="#audit" className="btn btn-primary">
            {HERO.primaryCta}
          </a>
          <a href="#realisations" className="btn btn-ghost">
            {HERO.secondaryCta}
          </a>
        </div>

        <div className={styles.trust}>
          <a
            href={BRAND.instagram}
            target="_blank"
            rel="noreferrer"
            className={styles.insta}
          >
            <svg
              className={styles.instaIcon}
              viewBox="0 0 24 24"
              aria-hidden
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
            >
              <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
              <circle cx="12" cy="12" r="4.2" />
              <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
            </svg>
            Suivez nos réalisations sur Instagram {BRAND.instagramHandle}
          </a>
        </div>
      </div>

      <a href="#services" className={styles.scroll} aria-label="Faire défiler">
        <span />
      </a>
    </section>
  );
}
