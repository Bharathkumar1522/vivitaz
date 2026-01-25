import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { MdScience, MdVerified } from 'react-icons/md';
import './Hero.css';

export default function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero-bg-pattern"></div>
            <div className="hero-blob hero-blob-1"></div>
            <div className="hero-blob hero-blob-2"></div>

            <div className="hero-container">
                {/* Left Content */}
                <div className="hero-content">
                    <motion.div
                        className="hero-badge-wrapper"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="hero-badge">
                            <span className="hero-badge-dot"></span>
                            Leading Pharmaceutical Innovators
                        </div>
                    </motion.div>

                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Advanced Healthcare <br />
                        Solutions for a <br />
                        <span className="hero-title-highlight">Better Tomorrow</span>
                    </motion.h1>

                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Pioneering research in drug therapy, nutrition, and traditional medicines.
                        We blend nature with science to deliver premium health supplements and extracts.
                    </motion.p>

                    <motion.div
                        className="hero-actions"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <a href="#products" className="btn btn-primary">
                            Explore Products <FiArrowRight />
                        </a>
                        <a href="#contact" className="btn btn-secondary" style={{ color: 'var(--primary-700)', borderColor: 'var(--primary-200)' }}>
                            Contact Us
                        </a>
                    </motion.div>

                    <motion.div
                        className="hero-stats-row"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <div className="hero-stat">
                            <span className="hero-stat-value">5+</span>
                            <span className="hero-stat-label">Years Exp.</span>
                        </div>
                        <div className="hero-stat">
                            <span className="hero-stat-value">25+</span>
                            <span className="hero-stat-label">Products</span>
                        </div>
                        <div className="hero-stat">
                            <span className="hero-stat-value">1K+</span>
                            <span className="hero-stat-label">Clients</span>
                        </div>
                    </motion.div>
                </div>

                {/* Right Visual */}
                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="hero-image-wrapper">
                        <img
                            src="/images/hero-lab.jpg"
                            alt="Pharmaceutical Research Lab"
                            className="hero-image"
                        />
                    </div>

                    <motion.div
                        className="hero-floating-card card-top-right"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.8, type: "spring" }}
                    >
                        <div className="floating-icon">
                            <MdScience />
                        </div>
                        <div className="floating-text">
                            <h4>R&D Focus</h4>
                            <p>Cutting-edge Labs</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="hero-floating-card card-bottom-left"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.0, type: "spring" }}
                    >
                        <div className="floating-icon">
                            <MdVerified />
                        </div>
                        <div className="floating-text">
                            <h4>Certified</h4>
                            <p>Premium Quality</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
