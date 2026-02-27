"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const navItems = [
    { href: "#accueil", label: "Accueil" },
    { href: "#piliers", label: "Expertise" },
    { href: "#articles", label: "Articles" },
    { href: "#apropos", label: "À Propos" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("accueil");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Update active section
            const sections = document.querySelectorAll("section[id]");
            const scrollPos = window.scrollY + 200;

            sections.forEach((section) => {
                const el = section as HTMLElement;
                const top = el.offsetTop;
                const height = el.offsetHeight;
                const id = el.getAttribute("id") || "";

                if (scrollPos >= top && scrollPos < top + height) {
                    setActiveSection(id);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string
    ) => {
        e.preventDefault();
        setMobileOpen(false);
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
            <div className={styles.navContainer}>
                <a href="#" className={styles.logo}>
                    <span className={styles.logoIcon}>◉</span>
                    <span className={styles.logoText}>
                        Daara <span className={styles.logoAccent}>360°</span>
                    </span>
                </a>

                <div
                    className={`${styles.navLinks} ${mobileOpen ? styles.open : ""}`}
                >
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className={`${styles.navLink} ${activeSection === item.href.slice(1) ? styles.active : ""
                                }`}
                            onClick={(e) => handleNavClick(e, item.href)}
                        >
                            {item.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className={`${styles.navLink} ${styles.navLinkCta}`}
                        onClick={(e) => handleNavClick(e, "#contact")}
                    >
                        Contact
                    </a>
                </div>

                <button
                    className={`${styles.navToggle} ${mobileOpen ? styles.toggleActive : ""}`}
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Menu"
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>
        </nav>
    );
}
