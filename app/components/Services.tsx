import Reveal from "./Reveal";
import { SERVICES } from "../data-bam";
import styles from "./Services.module.css";

export default function Services() {
  const main = SERVICES.filter((s) => !s.minor);
  const minor = SERVICES.find((s) => s.minor);

  return (
    <section className={styles.section} id="services">
      <div className="container">
        <Reveal className={styles.head}>
          <p className="eyebrow">Ce qu&apos;on fait pour vous</p>
          <h2 className={styles.heading}>
            Deux leviers pour attirer plus de clients
          </h2>
          <p className={styles.intro}>
            Un beau site ne suffit pas s&apos;il reste invisible. On combine les deux :
            une vitrine qui donne confiance, et une présence sur Google qui vous
            fait trouver.
          </p>
        </Reveal>

        <div className={styles.grid}>
          {main.map((s, i) => (
            <Reveal
              key={s.id}
              delay={i * 100}
              className={`${styles.cardWrap} ${s.featured ? styles.featuredWrap : ""}`}
            >
              <article
                className={`${styles.card} ${s.featured ? styles.featured : ""}`}
              >
                {s.featured && (
                  <span className={styles.badge}>Le plus demandé</span>
                )}
                <p className={styles.cardEyebrow}>{s.eyebrow}</p>
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <p className={styles.pitch}>{s.pitch}</p>
                <ul className={styles.benefits}>
                  {s.benefits.map((b) => (
                    <li key={b}>
                      <span className={styles.check} aria-hidden>
                        ✓
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        {minor && (
          <Reveal delay={120}>
            <article className={styles.minor}>
              <div className={styles.minorText}>
                <p className={styles.minorEyebrow}>{minor.eyebrow}</p>
                <h3 className={styles.minorTitle}>{minor.title}</h3>
                <p className={styles.minorPitch}>{minor.pitch}</p>
              </div>
              <a href="#audit" className={styles.minorLink}>
                En parler <span aria-hidden>→</span>
              </a>
            </article>
          </Reveal>
        )}
      </div>
    </section>
  );
}
