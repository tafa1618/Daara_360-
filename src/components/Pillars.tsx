import styles from "./Pillars.module.css";

const pillars = [
    {
        id: "engineering",
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
            </svg>
        ),
        title: "Science de l'Ingénieur",
        desc: "RDM, CAO CATIA, systèmes dynamiques, thermodynamique, maintenance prédictive.",
        tags: ["RDM", "CATIA", "FMECA", "Digital Twin"],
        glow: "blue",
    },
    {
        id: "finance",
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
        ),
        title: "Finance Quantitative",
        desc: "Modèles stochastiques, risk management, trading algorithmique, simulations Monte Carlo.",
        tags: ["Black-Scholes", "VaR", "Python", "CVA"],
        glow: "purple",
    },
    {
        id: "methods",
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
        ),
        title: "Méthodes & Process",
        desc: "Lean, Six Sigma, DMAIC, gestion de projet, change management, amélioration continue.",
        tags: ["Lean", "Six Sigma", "PDCA", "Agile"],
        glow: "green",
    },
    {
        id: "kpi",
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <line x1="3" y1="9" x2="21" y2="9" />
                <line x1="9" y1="21" x2="9" y2="9" />
            </svg>
        ),
        title: "KPIs Data-Driven",
        desc: "OEE, MTBF, MTTR, dashboards Power BI, maintenance prédictive, ML industriel.",
        tags: ["OEE", "Power BI", "ML", "COPQ"],
        glow: "orange",
    },
];

export default function Pillars() {
    return (
        <section className="section" id="piliers">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Domaines d&apos;expertise</span>
                    <h2 className="section-title">
                        Quatre piliers, <span className="text-gradient">une vision</span>
                    </h2>
                    <p className="section-subtitle">
                        Une approche multidisciplinaire à la croisée de l&apos;ingénierie,
                        de la finance et de la data.
                    </p>
                </div>

                <div className={styles.pillarsGrid}>
                    {pillars.map((pillar) => (
                        <div
                            key={pillar.id}
                            className={styles.pillarCard}
                            data-pillar={pillar.id}
                        >
                            <div
                                className={styles.pillarIcon}
                                data-color={pillar.glow}
                            >
                                {pillar.icon}
                            </div>
                            <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                            <p className={styles.pillarDesc}>{pillar.desc}</p>
                            <div className={styles.pillarTags}>
                                {pillar.tags.map((tag) => (
                                    <span key={tag} className="tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div
                                className={`${styles.pillarGlow} ${styles[`glow${pillar.glow.charAt(0).toUpperCase() + pillar.glow.slice(1)}`]}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
