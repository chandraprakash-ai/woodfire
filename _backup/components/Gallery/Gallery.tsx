import React from 'react';
import styles from './Gallery.module.css';

const Gallery: React.FC = () => {
    const images = [
        { id: 1, caption: 'Cozy corner seating', color: '#D7CCC8' },
        { id: 2, caption: 'Signature latte art', color: '#BCAAA4' },
        { id: 3, caption: 'Outdoor table', color: '#A1887F' },
        { id: 4, caption: 'Freshly baked croissants', color: '#8D6E63' },
        { id: 5, caption: 'Wood-fired pizza oven', color: '#795548' },
        { id: 6, caption: 'Evening ambience', color: '#6D4C41' },
    ];

    return (
        <section id="gallery" className={`section ${styles.gallery}`}>
            <div className="container">
                <h2 className={styles.title}>A Peek Inside</h2>
                <div className={styles.grid}>
                    {images.map((img) => (
                        <div key={img.id} className={styles.item}>
                            <div
                                className={styles.imagePlaceholder}
                                style={{ backgroundColor: img.color }}
                            >
                                <span className={styles.caption}>{img.caption}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
