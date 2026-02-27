"use client";

import styles from "./Newsletter.module.css";

export default function Newsletter() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const input = form.querySelector("input") as HTMLInputElement;
        const btn = form.querySelector("button span") as HTMLElement;

        if (btn) btn.textContent = "✓ Inscrit !";
        if (input) input.value = "";

        setTimeout(() => {
            if (btn) btn.textContent = "S'abonner";
        }, 3000);
    };

    return (
        <section className="section" id="contact">
            <div className="container">
                <div className={styles.ctaBlock}>
                    <div className={styles.ctaContent}>
                        <h2 className={styles.ctaTitle}>
                            Restez connecté avec{" "}
                            <span className="text-gradient">Daara 360°</span>
                        </h2>
                        <p className={styles.ctaSubtitle}>
                            Newsletter mensuelle — Les meilleurs articles, tutoriels et
                            insights directement dans votre boîte mail.
                        </p>
                        <form className={styles.newsletterForm} onSubmit={handleSubmit}>
                            <div className={styles.inputGroup}>
                                <input
                                    type="email"
                                    placeholder="votre@email.com"
                                    className={styles.inputEmail}
                                    required
                                />
                                <button type="submit" className="btn btn-primary">
                                    <span>S&apos;abonner</span>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path
                                            d="M3 8h10M9 4l4 4-4 4"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </form>
                        <p className={styles.ctaPrivacy}>
                            Pas de spam. Désabonnement en un clic.
                        </p>
                    </div>
                    <div className={styles.ctaDecoration}>
                        <div className={styles.ctaOrbit} />
                    </div>
                </div>
            </div>
        </section>
    );
}
