"use client";

import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";
import { AUDIT, BRAND } from "../data-bam";
import styles from "./Audit.module.css";

export default function Audit() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    business: "",
    type: "",
    contact: "",
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Frontend-only : ouvre le client mail pré-rempli, puis confirme.
    const subject = encodeURIComponent(
      `Audit gratuit — ${form.business || form.name}`,
    );
    const bodyText = encodeURIComponent(
      `Bonjour BAM Agency,\n\nJe souhaite recevoir mon audit gratuit.\n\n` +
        `Nom : ${form.name}\n` +
        `Commerce : ${form.business}\n` +
        `Type de commerce : ${form.type}\n` +
        `Email / téléphone : ${form.contact}\n`,
    );
    window.location.href = `mailto:${BRAND.email}?subject=${subject}&body=${bodyText}`;
    setSent(true);
  };

  const update =
    (key: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  return (
    <section className={styles.section} id="audit">
      <div className={styles.glow} aria-hidden />
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.left}>
          <p className="eyebrow">{AUDIT.eyebrow}</p>
          <h2 className={styles.heading}>{AUDIT.title}</h2>
          <p className={styles.lead}>{AUDIT.lead}</p>

          <ul className={styles.perks}>
            <li>
              <span className={styles.check} aria-hidden>
                ✓
              </span>
              100 % gratuit, sans engagement
            </li>
            <li>
              <span className={styles.check} aria-hidden>
                ✓
              </span>
              Une réponse sous 48h
            </li>
            <li>
              <span className={styles.check} aria-hidden>
                ✓
              </span>
              3 conseils concrets, en français simple
            </li>
          </ul>
        </Reveal>

        <Reveal className={styles.right} delay={120}>
          {sent ? (
            <div className={styles.confirm} role="status">
              <span className={styles.bigCheck}>✓</span>
              <h3>Merci {form.name || ""} !</h3>
              <p>
                Votre demande est prête dans votre messagerie. Si rien ne
                s&apos;est ouvert, écrivez-nous directement à{" "}
                <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
                {BRAND.phone ? (
                  <>
                    {" "}
                    ou appelez le{" "}
                    <a href={BRAND.phoneHref}>{BRAND.phoneDisplay}</a>
                  </>
                ) : null}
                .
              </p>
              <button
                className="btn btn-ghost"
                onClick={() => setSent(false)}
              >
                Nouvelle demande
              </button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={onSubmit}>
              <div className={styles.field}>
                <label htmlFor="au-name">Votre nom</label>
                <input
                  id="au-name"
                  required
                  value={form.name}
                  onChange={update("name")}
                  autoComplete="name"
                  placeholder="Ex : Sofia Martin"
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="au-business">Nom de votre commerce</label>
                <input
                  id="au-business"
                  required
                  value={form.business}
                  onChange={update("business")}
                  placeholder="Ex : Le Petit Comptoir"
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="au-type">Type de commerce</label>
                <select
                  id="au-type"
                  required
                  value={form.type}
                  onChange={update("type")}
                  className={form.type ? "" : styles.placeholder}
                >
                  <option value="" disabled>
                    Choisissez…
                  </option>
                  {AUDIT.businessTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.field}>
                <label htmlFor="au-contact">Email ou téléphone</label>
                <input
                  id="au-contact"
                  required
                  value={form.contact}
                  onChange={update("contact")}
                  placeholder="Pour vous envoyer l'audit"
                />
              </div>

              <button type="submit" className={`btn btn-primary ${styles.submit}`}>
                Recevoir mon audit gratuit
              </button>
              {BRAND.phone ? (
                <p className={styles.small}>
                  Préférez parler directement ?{" "}
                  <a href={BRAND.phoneHref}>Appelez le {BRAND.phoneDisplay}</a>
                  . Vos infos servent uniquement à vous répondre.
                </p>
              ) : (
                <p className={styles.small}>
                  Vos infos servent uniquement à vous répondre. Jamais de spam.
                </p>
              )}
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
