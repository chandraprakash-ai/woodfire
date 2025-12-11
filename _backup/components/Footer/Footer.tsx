import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.copyright}>
                    &copy; The Woodfire Café – 2025.
                </div>
                <div className={styles.socials}>
                    <a href="#" className={styles.socialLink}>Instagram</a>
                    <a href="#" className={styles.socialLink}>Facebook</a>
                </div>
                <div className={styles.credits}>
                    Designed & Developed by Chandraprakash Prajapati
                </div>
            </div>
        </footer>
    );
};

export default Footer;
