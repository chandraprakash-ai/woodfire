import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'Menu', href: '#menu' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Reviews', href: '#reviews' },
        { name: 'Find Us', href: '#location' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.container}`}>
                <div className={styles.logo}>
                    <a href="#">The Woodfire Café</a>
                </div>

                <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.open : ''}`}>
                    <ul className={styles.navList}>
                        {navLinks.map((link) => (
                            <li key={link.name} className={styles.navItem}>
                                <a
                                    href={link.href}
                                    className={styles.navLink}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <button
                    className={styles.hamburger}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                >
                    <span className={`${styles.bar} ${isMobileMenuOpen ? styles.open : ''}`}></span>
                    <span className={`${styles.bar} ${isMobileMenuOpen ? styles.open : ''}`}></span>
                    <span className={`${styles.bar} ${isMobileMenuOpen ? styles.open : ''}`}></span>
                </button>
            </div>
        </header>
    );
};

export default Header;
