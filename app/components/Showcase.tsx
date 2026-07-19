import Reveal from "./Reveal";
import ProjectMockup from "./ProjectMockup";
import { SHOWCASE } from "../data-bam";
import styles from "./Showcase.module.css";

export default function Showcase() {
  return (
    <section className={styles.section} id="realisations">
      <div className="container">
        <Reveal className={styles.head}>
          <p className="eyebrow">Réalisations</p>
          <h2 className={styles.heading}>Des sites qui donnent envie</h2>
          <p className={styles.intro}>
            Voici le genre de résultat qu&apos;on crée pour un commerce. Regardez
            sur votre téléphone : c&apos;est là que vos clients vous découvriront.
          </p>
        </Reveal>

        <div className={styles.grid}>
          {SHOWCASE.map((p, i) => (
            <Reveal key={p.slug} delay={i * 120} className={styles.cardWrap}>
              <article
                className={styles.card}
                style={{ ["--card-accent" as string]: p.accent }}
              >
                <div className={styles.preview}>
                  <ProjectMockup slug={p.slug} />
                </div>

                <div className={styles.body}>
                  <div className={styles.cardHead}>
                    <h3 className={styles.name}>{p.name}</h3>
                    <span className={styles.label}>{p.label}</span>
                  </div>

                  <p className={styles.desc}>{p.description}</p>

                  <ul className={styles.tags}>
                    {p.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>

                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.link}
                  >
                    Voir l&apos;exemple en ligne <span aria-hidden>→</span>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className={styles.cta} delay={100}>
          <p>Vous imaginez déjà le vôtre ?</p>
          <a href="#audit" className="btn btn-primary">
            Recevoir mon audit gratuit
          </a>
        </Reveal>
      </div>
    </section>
  );
}
