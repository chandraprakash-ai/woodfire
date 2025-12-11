import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
    return (
        <section id="hero" className={styles.hero}>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <h1 className={styles.heading}>Where flavor meets comfort.</h1>
                    <p className={styles.subheading}>
                        Artisan brews, wood-fired bites, and a cozy place to unwind in the heart of the city.
                    </p>
                    <div className={styles.actions}>
                        <a href="#menu" className={styles.primaryBtn}>View Menu</a>
                        <a href="#contact" className={styles.secondaryBtn}>Reserve a Table</a>
                    </div>
                </div>
                <div className={styles.imageWrapper}>
                    <div className={styles.placeholderImage}>
                        {/* Placeholder for Hero Image */}
                        <span>Woodfire Café Ambience</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
