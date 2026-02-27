"use client";

import { useState } from "react";
import styles from "./Articles.module.css";

type Category = "all" | "engineering" | "finance" | "methods" | "kpi" | "video";

const filters: { key: Category; label: string }[] = [
    { key: "all", label: "Tout" },
    { key: "engineering", label: "🔧 Ingénieur" },
    { key: "finance", label: "📈 Finance" },
    { key: "methods", label: "⚙️ Méthodes" },
    { key: "kpi", label: "📊 KPIs" },
    { key: "video", label: "🎬 Vidéos" },
];

const articles = [
    {
        id: 1,
        category: "engineering" as Category,
        featured: true,
        badge: "Nouveau",
        emoji: "📐",
        bg: "engineering",
        catLabel: "Science Ingénieur",
        catClass: "catEngineering",
        date: "27 Fév 2026",
        title: "Dimensionnement RDM : De la théorie au cas industriel réel",
        excerpt:
            "Comment appliquer les principes de résistance des matériaux pour résoudre un problème concret de fatigue sur une structure industrielle...",
        readTime: "8 min de lecture",
        linkLabel: "Lire →",
    },
    {
        id: 2,
        category: "finance" as Category,
        emoji: "📈",
        bg: "finance",
        catLabel: "Quant Finance",
        catClass: "catFinance",
        date: "24 Fév 2026",
        title: "Simulation Monte Carlo en Python : Pricing d'options vanilles",
        excerpt:
            "Tutorial complet avec code Python pour implémenter une simulation Monte Carlo...",
        readTime: "12 min",
        linkLabel: "Lire →",
    },
    {
        id: 3,
        category: "kpi" as Category,
        emoji: "📊",
        bg: "kpi",
        catLabel: "KPI Data-Driven",
        catClass: "catKpi",
        date: "20 Fév 2026",
        title: "Le KPI de la semaine : OEE — Au-delà du taux de disponibilité",
        excerpt:
            "Pourquoi l'OEE est bien plus qu'un simple pourcentage et comment le décomposer...",
        readTime: "6 min",
        linkLabel: "Lire →",
    },
    {
        id: 4,
        category: "methods" as Category,
        emoji: "⚙️",
        bg: "methods",
        catLabel: "Méthodes",
        catClass: "catMethods",
        date: "17 Fév 2026",
        title: "Process Hack : Réduire le lead time de 40% avec une approche DMAIC",
        excerpt:
            "Étude de cas : comment une démarche DMAIC structurée a transformé une ligne...",
        readTime: "10 min",
        linkLabel: "Lire →",
    },
    {
        id: 5,
        category: "video" as Category,
        emoji: "🎬",
        bg: "video",
        catLabel: "Mini Tuto YouTube",
        catClass: "catVideo",
        date: "15 Fév 2026",
        title: "Quant Corner : Implémenter un modèle Black-Scholes en 10 minutes",
        excerpt:
            "Mini tutoriel vidéo : du modèle mathématique au code Python fonctionnel...",
        readTime: "10 min vidéo",
        linkLabel: "Regarder →",
        isVideo: true,
    },
    {
        id: 6,
        category: "engineering" as Category,
        emoji: "🔧",
        bg: "engineering",
        catLabel: "Science Ingénieur",
        catClass: "catEngineering",
        date: "12 Fév 2026",
        title: "Modélisation CATIA V5 : Workflow optimal pour les assemblages complexes",
        excerpt:
            "Bonnes pratiques et méthodologie pour une conception paramétrique efficace...",
        readTime: "15 min",
        linkLabel: "Lire →",
    },
];

const series = [
    { label: "Le KPI de la semaine", count: "12/20 épisodes", progress: 60 },
    { label: "Quant Corner", count: "6/20 épisodes", progress: 30 },
    { label: "Process Hack", count: "9/20 épisodes", progress: 45 },
    { label: "Engineering Insight", count: "5/20 épisodes", progress: 25 },
];

export default function Articles() {
    const [activeFilter, setActiveFilter] = useState<Category>("all");

    const filtered =
        activeFilter === "all"
            ? articles
            : articles.filter((a) => a.category === activeFilter);

    return (
        <section className={`section section-dark`} id="articles">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Publications récentes</span>
                    <h2 className="section-title">
                        Articles & <span className="text-gradient">Tutoriels</span>
                    </h2>
                    <p className="section-subtitle">
                        Analyses approfondies, retours d&apos;expérience et tutoriels
                        techniques.
                    </p>
                </div>

                {/* Filters */}
                <div className={styles.filterTabs}>
                    {filters.map((f) => (
                        <button
                            key={f.key}
                            className={`${styles.filterTab} ${activeFilter === f.key ? styles.active : ""}`}
                            onClick={() => setActiveFilter(f.key)}
                        >
                            {f.label}
                        </button>
                    ))}
                </div>

                {/* Articles grid */}
                <div className={styles.articlesGrid}>
                    {filtered.map((article) => (
                        <article
                            key={article.id}
                            className={`${styles.articleCard} ${article.featured ? styles.articleFeatured : ""}`}
                        >
                            <div className={styles.articleImage}>
                                <div
                                    className={`${styles.articleImagePlaceholder} ${styles[`bg${article.bg.charAt(0).toUpperCase() + article.bg.slice(1)}`]}`}
                                >
                                    <span>{article.emoji}</span>
                                    {article.isVideo && (
                                        <div className={styles.playButton}>▶</div>
                                    )}
                                </div>
                                {article.badge && (
                                    <span className={styles.articleBadge}>{article.badge}</span>
                                )}
                            </div>
                            <div className={styles.articleContent}>
                                <div className={styles.articleMeta}>
                                    <span className={`${styles.articleCategory} ${styles[article.catClass]}`}>
                                        {article.catLabel}
                                    </span>
                                    <span className={styles.articleDate}>{article.date}</span>
                                </div>
                                <h3 className={styles.articleTitle}>{article.title}</h3>
                                <p className={styles.articleExcerpt}>{article.excerpt}</p>
                                <div className={styles.articleFooter}>
                                    <span className={styles.articleReadTime}>
                                        {article.readTime}
                                    </span>
                                    <a href="#" className={styles.articleLink}>
                                        {article.linkLabel}
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Series */}
                <div className={styles.seriesSection}>
                    <h3 className={styles.seriesTitle}>📚 Séries en cours</h3>
                    <div className={styles.seriesGrid}>
                        {series.map((s) => (
                            <div key={s.label} className={styles.seriesCard}>
                                <div className={styles.seriesProgress}>
                                    <div
                                        className={styles.progressBar}
                                        style={{ "--progress": `${s.progress}%` } as React.CSSProperties}
                                    />
                                </div>
                                <span className={styles.seriesLabel}>{s.label}</span>
                                <span className={styles.seriesCount}>{s.count}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
