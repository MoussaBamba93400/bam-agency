import styles from "./ProjectMockup.module.css";

/** Mini-aperçus en pur CSS, évoquant l'identité visuelle de chaque projet. */
export default function ProjectMockup({ slug }: { slug: string }) {
  switch (slug) {
    case "taskflow":
      return (
        <div className={`${styles.frame} ${styles.taskflow}`}>
          {[
            { label: "À faire", dots: ["#ef4444", "#eab308"] },
            { label: "En cours", dots: ["#3b82f6"] },
            { label: "Terminé", dots: ["#22c55e", "#22c55e"] },
          ].map((col) => (
            <div key={col.label} className={styles.tfCol}>
              <span className={styles.tfColLabel}>{col.label}</span>
              {col.dots.map((c, i) => (
                <div key={i} className={styles.tfCard}>
                  <span className={styles.tfDot} style={{ background: c }} />
                  <span className={styles.tfLine} />
                </div>
              ))}
            </div>
          ))}
        </div>
      );

    case "devconnect":
      return (
        <div className={`${styles.frame} ${styles.devconnect}`}>
          {[0, 1].map((i) => (
            <div key={i} className={styles.dcPost}>
              <div className={styles.dcHead}>
                <span className={styles.dcAvatar} />
                <span className={styles.dcName} />
              </div>
              <span className={styles.dcTitle} />
              <span className={styles.dcText} />
              <div className={styles.dcFooter}>
                <span className={styles.dcHeart}>♥</span>
                <span className={styles.dcCount} />
              </div>
            </div>
          ))}
        </div>
      );

    case "flavor":
      return (
        <div className={`${styles.frame} ${styles.flavor}`}>
          <span className={styles.flEyebrow}>LYON · GASTRONOMIE</span>
          <span className={styles.flTitle}>Maison Solène</span>
          <span className={styles.flRule} />
          <span className={styles.flMenu}>Réserver une table</span>
        </div>
      );

    case "archex":
      return (
        <div className={`${styles.frame} ${styles.archex}`}>
          <span className={styles.axTitle}>ARCHEX.</span>
          <div className={styles.axGrid}>
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} />
            ))}
          </div>
        </div>
      );

    default:
      return <div className={styles.frame} />;
  }
}
