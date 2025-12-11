'use client';

import React, { useState } from 'react';
import styles from './ReservationForm.module.css';
import BackgroundEffects from '../BackgroundEffects/BackgroundEffects';

const ReservationForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        requests: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call
        console.log('Reservation Details:', formData);
        setIsSubmitted(true);
        // Reset after 5 seconds or keep it submitted
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                date: '',
                time: '',
                guests: '2',
                requests: '',
            });
        }, 5000);
    };

    return (
        <section id="contact" className={styles.reservation}>
            <BackgroundEffects />
            <div className={`container ${styles.container}`}>
                <h2 className={styles.title}>Reserve a Table</h2>
                <p className={styles.description}>Share your details and we’ll confirm your reservation shortly.</p>

                {isSubmitted ? (
                    <div className={styles.successMessage}>
                        <h3>Thanks!</h3>
                        <p>Your reservation request has been sent.</p>
                    </div>
                ) : (
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.row}>
                            <div className={styles.formGroup}>
                                <label htmlFor="date">Date</label>
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    required
                                    value={formData.date}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="time">Time</label>
                                <input
                                    type="time"
                                    id="time"
                                    name="time"
                                    required
                                    value={formData.time}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="guests">Number of Guests</label>
                            <select
                                id="guests"
                                name="guests"
                                value={formData.guests}
                                onChange={handleChange}
                            >
                                {[1, 2, 3, 4, 5, 6, 7, 8, '8+'].map(num => (
                                    <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                                ))}
                            </select>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="requests">Special Requests (Optional)</label>
                            <textarea
                                id="requests"
                                name="requests"
                                rows={4}
                                value={formData.requests}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <button type="submit" className={styles.submitBtn}>Send Reservation Request</button>
                    </form>
                )}
            </div>
        </section>
    );
};

export default ReservationForm;
