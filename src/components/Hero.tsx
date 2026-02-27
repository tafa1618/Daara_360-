"use client";

import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
    const statsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const counters = statsRef.current?.querySelectorAll("[data-target]");
        if (!counters) return;

        const animateCounters = () => {
            counters.forEach((counter) => {
                const el = counter as HTMLElement;
                const target = parseInt(el.getAttribute("data-target") || "0");
                const duration = 2000;
                const startTime = performance.now();

                function update(currentTime: number) {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    el.textContent = Math.round(eased * target).toString();
                    if (progress < 1) requestAnimationFrame(update);
                }

                requestAnimationFrame(update);
            });
        };

        const timer = setTimeout(animateCounters, 800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className={styles.hero} id="accueil">
            <div className={styles.heroContent}>
                <div className={styles.heroBadge}>
                    <span className={styles.badgeDot} />
                    <span>Blog & Portfolio — Science de l&apos;Ingénieur</span>
                </div>

                <h1 className={styles.heroTitle}>
                    <span className={styles.titleLine}>L&apos;ingénierie rencontre</span>
                    <span className={`${styles.titleLine} ${styles.titleGradient}`}>
                        la data & la finance
                    </span>
                </h1>

                <p className={styles.heroSubtitle}>
                    Articles, tutoriels et analyses au croisement de la science de
                    l&apos;ingénieur, la finance quantitative, les méthodes industrielles
                    et les KPIs data-driven.
                </p>

                <div className={styles.heroActions}>
                    <a href="#articles" className="btn btn-primary">
                        <span>Explorer les articles</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path
                                d="M3 8h10M9 4l4 4-4 4"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </a>
                    <a href="#piliers" className="btn btn-ghost">
                        <span>Découvrir l&apos;expertise</span>
                    </a>
                </div>

                <div className={styles.heroStats} ref={statsRef}>
                    <div className={styles.stat}>
                        <span className={styles.statNumber} data-target="4">
                            0
                        </span>
                        <span className={styles.statLabel}>Piliers d&apos;expertise</span>
                    </div>
                    <div className={styles.statDivider} />
                    <div className={styles.stat}>
                        <span className={styles.statNumber} data-target="360">
                            0
                        </span>
                        <span className={styles.statSuffix}>°</span>
                        <span className={styles.statLabel}>Vision complète</span>
                    </div>
                    <div className={styles.statDivider} />
                    <div className={styles.stat}>
                        <span className={styles.statNumber} data-target="100">
                            0
                        </span>
                        <span className={styles.statSuffix}>%</span>
                        <span className={styles.statLabel}>Data-driven</span>
                    </div>
                </div>
            </div>

            <div className={styles.heroVisual}>
                <div className={styles.orbitSystem}>
                    <div className={`${styles.orbit} ${styles.orbit1}`}>
                        <div className={styles.orbitItem}>📐</div>
                    </div>
                    <div className={`${styles.orbit} ${styles.orbit2}`}>
                        <div className={styles.orbitItem}>📈</div>
                    </div>
                    <div className={`${styles.orbit} ${styles.orbit3}`}>
                        <div className={styles.orbitItem}>📊</div>
                    </div>
                    <div className={`${styles.orbit} ${styles.orbit4}`}>
                        <div className={styles.orbitItem}>🔧</div>
                    </div>
                    <div className={styles.orbitCenter}>
                        <span className={styles.orbitCenterText}>360°</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
