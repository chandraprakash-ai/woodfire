import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.topSection}>
                    <a href="#" className={styles.logo}>The Woodfire Café</a>

                    <nav className={styles.nav}>
                        <a href="#hero" className={styles.navLink}>Home</a>
                        <a href="#menu" className={styles.navLink}>Menu</a>
                        <a href="#story" className={styles.navLink}>Our Story</a>
                        <a href="#location" className={styles.navLink}>Find Us</a>
                    </nav>

                    <div className={styles.socials}>
                        <a href="#" className={styles.socialLink} aria-label="Instagram">Instagram</a>
                        <a href="#" className={styles.socialLink} aria-label="Facebook">Facebook</a>
                        <a href="#" className={styles.socialLink} aria-label="Twitter">Twitter</a>
                    </div>
                </div>

                <div className={styles.bottomSection}>
                    <div className={styles.copyright}>
                        &copy; {new Date().getFullYear()} The Woodfire Café. All rights reserved.
                    </div>
                    <div className={styles.credits}>
                        Designed & Developed by Chandraprakash Prajapati
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
