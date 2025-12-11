import React from 'react';
import styles from './Gallery.module.css';

const Gallery: React.FC = () => {
    const images = [
        { id: 1, src: '/gallery-oven.png', caption: 'The Heart of the Kitchen' },
        { id: 2, src: '/gallery-barista.png', caption: 'Artisan Coffee' },
        { id: 3, src: '/gallery-details.png', caption: 'It’s in the Details' },
        { id: 4, src: '/gallery-seating.png', caption: 'Cozy Corners' },
        { id: 5, src: '/gallery-evening.png', caption: 'Evening Glow' },
    ];

    return (
        <section id="gallery" className={styles.gallery}>
            <div className="container">
                <h2 className={styles.title}>A Peek Inside</h2>
                <div className={styles.grid}>
                    {images.map((img) => (
                        <div key={img.id} className={styles.item}>
                            <img src={img.src} alt={img.caption} className={styles.image} />
                            <div className={styles.overlay}>
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
