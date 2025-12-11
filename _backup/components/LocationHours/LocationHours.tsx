import React from 'react';
import styles from './LocationHours.module.css';

const LocationHours: React.FC = () => {
    return (
        <section id="location" className={`section ${styles.locationHours}`}>
            <div className={`container ${styles.container}`}>
                <h2 className={styles.title}>Find Us</h2>
                <div className={styles.content}>
                    <div className={styles.info}>
                        <div className={styles.infoBlock}>
                            <h3 className={styles.subtitle}>Address</h3>
                            <p>12, Oakwood Lane, City Center, Jaipur</p>
                        </div>
                        <div className={styles.infoBlock}>
                            <h3 className={styles.subtitle}>Hours</h3>
                            <p>Mon–Fri: 8:00 AM – 10:00 PM</p>
                            <p>Sat–Sun: 9:00 AM – 11:00 PM</p>
                        </div>
                        <div className={styles.infoBlock}>
                            <h3 className={styles.subtitle}>Contact</h3>
                            <p>+91-98765-43210</p>
                            <p>hello@woodfirecafe.com</p>
                        </div>
                    </div>
                    <div className={styles.mapWrapper}>
                        <div className={styles.mapPlaceholder}>
                            <span>Google Maps Placeholder</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LocationHours;
