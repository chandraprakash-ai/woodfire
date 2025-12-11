import React from 'react';
import styles from './LocationHours.module.css';

import BackgroundEffects from '../BackgroundEffects/BackgroundEffects';

const LocationHours: React.FC = () => {
    return (
        <section id="location" className={styles.locationHours}>
            <div className={`container ${styles.container}`}>
                <h2 className={styles.title}>Find Us</h2>
                <div className={styles.contentWrapper}>
                    <div className={styles.content}>
                        <div className={styles.infoBlock}>
                            <h3 className={styles.subtitle}>Location</h3>
                            <p className={styles.text}>123 Culinary Avenue,<br />Metropolis, NY 10012</p>
                            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className={styles.directionBtn}>
                                Get Directions &rarr;
                            </a>
                        </div>
                        <div className={styles.infoBlock}>
                            <h3 className={styles.subtitle}>Contact</h3>
                            <p className={styles.text}>(555) 123-4567<br />hello@woodfirecafe.com</p>
                        </div>
                    </div>
                    <div className={styles.mapContainer}>
                        <img src="/map-dark.png" alt="Map Location" className={styles.mapImage} />
                        <div className={styles.mapPin}></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LocationHours;
