import React from 'react';
import styles from './MenuPreview.module.css';
import BackgroundEffects from '../BackgroundEffects/BackgroundEffects';

const MenuPreview: React.FC = () => {
    const menuItems = [
        {
            image: '/menu-coffee.png',
            title: 'Coffee & Brews',
            description: 'Artisan lattes, cold brews, and specialty coffee.',
        },
        {
            image: '/menu-pizza.png',
            title: 'Wood-Fired Pizza',
            description: 'Hand-stretched dough, fresh toppings, blistered perfection.',
        },
        {
            image: '/menu-sandwich.png',
            title: 'Gourmet Sandwiches',
            description: 'Artisanal bread, premium fillings, grilled to order.',
        },
        {
            image: '/menu-dessert.png',
            title: 'Decadent Desserts',
            description: 'Rich chocolate tarts, seasonal pastries, and more.',
        },
    ];

    return (
        <section id="menu" className={styles.menuPreview}>
            <BackgroundEffects />
            <div className="container">
                <h2 className={styles.title}>Our Menu</h2>
                <div className={styles.grid}>
                    {menuItems.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <img src={item.image} alt={item.title} className={styles.cardImage} />
                            <div className={styles.cardOverlay}>
                                <div className={styles.cardContent}>
                                    <h3 className={styles.cardTitle}>{item.title}</h3>
                                    <p className={styles.cardDesc}>{item.description}</p>
                                    <a href="#" className={styles.link}>View Menu &rarr;</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MenuPreview;
