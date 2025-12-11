import React from 'react';
import styles from './Reviews.module.css';

const Reviews: React.FC = () => {
    const reviews = [
        {
            id: 1,
            name: 'Aarav Patel',
            rating: 5,
            text: 'Best wood-fired pizza in town. The crust is unbelievable.',
        },
        {
            id: 2,
            name: 'Sarah Jenkins',
            rating: 5,
            text: 'Perfect place to work from with coffee and Wi-Fi.',
        },
        {
            id: 3,
            name: 'Rohan Gupta',
            rating: 4.8,
            text: 'Warm ambience and friendly staff. Feels like home.',
        },
    ];

    return (
        <section id="reviews" className={`section ${styles.reviews}`}>
            <div className="container">
                <h2 className={styles.title}>What Our Guests Say</h2>
                <div className={styles.grid}>
                    {reviews.map((review) => (
                        <div key={review.id} className={styles.card}>
                            <div className={styles.stars}>
                                {'★'.repeat(Math.floor(review.rating))}
                                {review.rating % 1 !== 0 && '½'}
                            </div>
                            <p className={styles.text}>"{review.text}"</p>
                            <p className={styles.name}>- {review.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
