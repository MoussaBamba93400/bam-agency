import Reveal from "./Reveal";
import { FAQ } from "../data-bam";
import styles from "./Faq.module.css";

export default function Faq() {
  return (
    <section className={styles.section} id="faq">
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.left}>
          <p className="eyebrow">On vous rassure</p>
          <h2 className={styles.heading}>Vos questions, nos réponses</h2>
          <p className={styles.lead}>
            C&apos;est normal de se poser des questions avant de se lancer. Voici les
            plus fréquentes. Il en reste une&nbsp;?{" "}
            <a href="#audit" className={styles.leadLink}>
              Posez-la moi directement.
            </a>
          </p>
        </Reveal>

        <div className={styles.list}>
          {FAQ.map((item, i) => (
            <Reveal as="div" key={item.q} delay={i * 70}>
              <details className={styles.item}>
                <summary className={styles.q}>
                  {item.q}
                  <span className={styles.icon} aria-hidden />
                </summary>
                <p className={styles.a}>{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
