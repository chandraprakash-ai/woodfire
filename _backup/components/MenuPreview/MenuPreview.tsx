import React from 'react';
import styles from './MenuPreview.module.css';

const MenuPreview: React.FC = () => {
    const menuItems = [
        {
            icon: '☕',
            title: 'Coffee & Beverages',
            description: 'Specialty brews, cold coffee, and more. From ₹120.',
        },
        {
            icon: '🍕',
            title: 'Wood-Fired Pizzas',
            description: 'Hand-stretched, oven-fired, and loaded with flavor. From ₹399.',
        },
        {
            icon: '🥪',
            title: 'Sandwiches & Mains',
            description: 'Comfort plates and hearty bites.',
        },
        {
            icon: '🍰',
            title: 'Desserts & Bakes',
            description: 'Freshly baked cakes, pastries, and seasonal specials.',
        },
    ];

    return (
        <section id="menu" className={`section ${styles.menuPreview}`}>
            <div className="container">
                <h2 className={styles.title}>Menu Highlights</h2>
                <div className={styles.grid}>
                    {menuItems.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.icon}>{item.icon}</div>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardDesc}>{item.description}</p>
                            <a href="#" className={styles.link}>View Full Menu &rarr;</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MenuPreview;
