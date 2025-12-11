import React from 'react';
import styles from './Hero.module.css';

import BackgroundEffects from '../BackgroundEffects/BackgroundEffects';

const Hero: React.FC = () => {
    return (
        <section id="hero" className={styles.hero}>
            <BackgroundEffects />
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <h1 className={styles.heading}>Where flavor meets{'\u00A0'}comfort.</h1>
                    <p className={styles.subheading}>
                        Artisan brews, wood-fired bites, and a cozy place to unwind in the heart of the{'\u00A0'}city.
                    </p>
                    <div className={styles.actions}>
                        <a href="#menu" className={styles.primaryBtn}>View Menu</a>
                        <a href="#contact" className={styles.secondaryBtn}>Reserve a Table</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
