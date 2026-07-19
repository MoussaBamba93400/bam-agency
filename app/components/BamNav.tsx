"use client";

import { useEffect, useState } from "react";
import BamLogo from "./BamLogo";
import styles from "./BamNav.module.css";

const LINKS = [
  { href: "#services", label: "Prestations" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#process", label: "Comment ça marche" },
  { href: "#faq", label: "Questions" },
];

export default function BamNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Empêche le scroll du body quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`${styles.nav} ${scrolled || open ? styles.scrolled : ""}`}
    >
      <div className={styles.bar} aria-hidden />
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.brand} onClick={() => setOpen(false)}>
          <BamLogo size={34} />
          <span className={styles.brandText}>
            BAM <span className={styles.brandAccent}>Agency</span>
          </span>
        </a>

        <nav className={styles.links}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className={styles.right}>
          <a href="#audit" className={`btn btn-primary ${styles.cta}`}>
            Audit gratuit
          </a>
          <button
            className={styles.burger}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span className={open ? styles.barTop : ""} />
            <span className={open ? styles.barMid : ""} />
            <span className={open ? styles.barBot : ""} />
          </button>
        </div>
      </div>

      {/* Menu mobile plein écran */}
      <div className={`${styles.mobile} ${open ? styles.mobileOpen : ""}`}>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a
          href="#audit"
          className={`btn btn-primary ${styles.mobileCta}`}
          onClick={() => setOpen(false)}
        >
          Recevoir mon audit gratuit
        </a>
      </div>
    </header>
  );
}
