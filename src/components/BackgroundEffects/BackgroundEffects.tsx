'use client';

import React, { useEffect, useRef } from 'react';
import styles from './BackgroundEffects.module.css';

const BackgroundEffects: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];

        const resizeCanvas = () => {
            canvas.width = container.clientWidth;
            canvas.height = container.clientHeight;
        };

        const resizeObserver = new ResizeObserver(() => {
            resizeCanvas();
        });
        resizeObserver.observe(container);

        // Initial resize
        resizeCanvas();

        class Particle {
            x: number;
            y: number;
            size: number;
            speedY: number;
            speedX: number;
            opacity: number;
            fadeSpeed: number;

            constructor() {
                this.x = Math.random() * canvas!.width;
                this.y = canvas!.height + Math.random() * 100;
                this.size = Math.random() * 2 + 0.5; // Small ember size
                this.speedY = Math.random() * 1 + 0.2; // Slow rising speed
                this.speedX = (Math.random() - 0.5) * 0.5; // Slight horizontal drift
                this.opacity = Math.random() * 0.5 + 0.2;
                this.fadeSpeed = Math.random() * 0.002 + 0.001;
            }

            update() {
                this.y -= this.speedY;
                this.x += this.speedX;
                this.opacity -= this.fadeSpeed;

                if (this.opacity <= 0) {
                    this.reset();
                }
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = `rgba(212, 175, 55, ${this.opacity})`; // Gold color
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }

            reset() {
                this.x = Math.random() * canvas!.width;
                this.y = canvas!.height + Math.random() * 100;
                this.opacity = Math.random() * 0.5 + 0.2;
                this.speedY = Math.random() * 1 + 0.2;
            }
        }

        const initParticles = () => {
            const particleCount = 30; // Reduced count per section
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        initParticles();
        animate();

        return () => {
            resizeObserver.disconnect();
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div ref={containerRef} className={styles.container}>
            <div className={styles.smokeLayer}></div>
            <canvas ref={canvasRef} className={styles.particleLayer}></canvas>
        </div>
    );
};

export default BackgroundEffects;
