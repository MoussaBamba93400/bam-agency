import Image from "next/image";
import styles from "./BamLogo.module.css";

/**
 * Logo BAM Agency. Le fichier source (BAM.jpg) a un fond BLANC opaque,
 * donc on l'encapsule dans une pastille blanche arrondie pour qu'il
 * ressorte proprement sur le thème sombre comme sur fond clair.
 */
export default function BamLogo({ size = 42 }: { size?: number }) {
  return (
    <span
      className={styles.chip}
      style={{ ["--logo-size" as string]: `${size}px` }}
      aria-label="BAM Agency"
    >
      <Image
        src="/BAM.jpg"
        alt="BAM Agency"
        width={size}
        height={size}
        priority
        className={styles.img}
      />
    </span>
  );
}
