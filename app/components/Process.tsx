import Reveal from "./Reveal";
import { STEPS } from "../data-bam";
import styles from "./Process.module.css";

export default function Process() {
  return (
    <section className={styles.section} id="process">
      <div className="container">
        <Reveal className={styles.head}>
          <p className="eyebrow">Comment ça se passe</p>
          <h2 className={styles.heading}>Simple, du début à la fin</h2>
          <p className={styles.intro}>
            Pas de jargon, pas de prise de tête. Vous vous concentrez sur votre
            commerce, je m&apos;occupe du reste.
          </p>
        </Reveal>

        <ol className={styles.steps}>
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 90} className={styles.step}>
              <span className={styles.num}>{s.n}</span>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepText}>{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
