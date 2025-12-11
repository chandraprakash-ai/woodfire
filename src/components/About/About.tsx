import React from 'react';
import styles from './About.module.css';

const About: React.FC = () => {
    const features = [
        { icon: '🌾', text: 'Locally sourced ingredients' },
        { icon: '🔥', text: 'Wood-fired oven' },
        { icon: '🍰', text: 'Freshly baked desserts' },
    ];

    return (
        <section id="about" className={styles.about}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>Our Story</h2>
                    <p className={styles.text}>
                        The Woodfire Café is a locally loved neighborhood spot serving fresh brews, hand-stretched wood-fired pizzas, sandwiches, and desserts baked daily. We believe food should feel like comfort, and every cup of coffee should be worth slowing down for.
                    </p>
                    <ul className={styles.featureList}>
                        {features.map((feature, index) => (
                            <li key={index} className={styles.featureItem}>
                                <span className={styles.icon}>{feature.icon}</span>
                                <span className={styles.featureText}>{feature.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.imageWrapper}>
                    <img src="/story-bg.png" alt="Chef plating food" className={styles.image} />
                </div>
            </div>
        </section>
    );
};

export default About;
