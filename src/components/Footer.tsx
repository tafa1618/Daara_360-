import styles from "./Footer.module.css";

const pillarLinks = [
    "Science Ingénieur",
    "Finance Quantitative",
    "Méthodes & Process",
    "KPIs Data-Driven",
];

const seriesLinks = [
    "Le KPI de la semaine",
    "Quant Corner",
    "Process Hack",
    "Engineering Insight",
];

const externalLinks = [
    { label: "LinkedIn", href: "#" },
    { label: "YouTube", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "Newsletter", href: "#contact" },
];

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerGrid}>
                    <div className={styles.footerBrand}>
                        <div className={styles.brandRow}>
                            <span className={styles.logoIcon}>◉</span>
                            <span className={styles.logoText}>
                                Daara <span className={styles.logoAccent}>360°</span>
                            </span>
                        </div>
                        <p className={styles.footerTagline}>
                            L&apos;ingénierie rencontre la data & la finance.
                        </p>
                    </div>

                    <div className={styles.footerLinksGroup}>
                        <h4>Piliers</h4>
                        {pillarLinks.map((link) => (
                            <a key={link} href="#">
                                {link}
                            </a>
                        ))}
                    </div>

                    <div className={styles.footerLinksGroup}>
                        <h4>Séries</h4>
                        {seriesLinks.map((link) => (
                            <a key={link} href="#">
                                {link}
                            </a>
                        ))}
                    </div>

                    <div className={styles.footerLinksGroup}>
                        <h4>Liens</h4>
                        {externalLinks.map((link) => (
                            <a key={link.label} href={link.href}>
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <span>© 2026 Daara 360° — Tous droits réservés</span>
                </div>
            </div>
        </footer>
    );
}
