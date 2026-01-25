import { motion } from 'framer-motion';
import { FiCheck, FiAward } from 'react-icons/fi';
import { useInView } from '../../hooks/useInView';
import './About.css';

const features = [
    { text: 'FSSAI Approved manufacturing facility' },
    { text: 'Export and Import License for global trade' },
    { text: 'Specialists in Nutraceuticals & Pharmaceuticals' },
    { text: 'Herbal products & Dietary supplements' },
    { text: 'FMCG products for humans and animals' },
];

export default function About() {
    const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.2 });

    return (
        <section className="about section" id="about" ref={ref}>
            <div className="container">
                <div className="about-grid">
                    <motion.div
                        className="about-content"
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        <span className="about-subtitle">About Us</span>
                        <h2 className="about-title">
                            Who We Are
                        </h2>
                        <p className="about-description">
                            VIVITAZ Healthcare Private Limited is an Indian Company specializing in Product
                            Manufacturing (TPM) of Nutraceuticals, Pharmaceuticals, Herbal products, Food products,
                            and FMCG products. With Export and Import licence, we serve clients globally from our
                            facility in Nellore, India.
                        </p>
                        <p className="about-description">
                            Our trade mark covers Pharmaceuticals, medical and veterinary preparations, sanitary
                            preparations, dietary supplements for humans and animals, disinfectants, and many more
                            healthcare products.
                        </p>

                        <ul className="about-features">
                            {features.map((feature, index) => (
                                <motion.li
                                    key={index}
                                    className="about-feature"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                                >
                                    <span className="about-feature-icon">
                                        <FiCheck />
                                    </span>
                                    <span className="about-feature-text">{feature.text}</span>
                                </motion.li>
                            ))}
                        </ul>

                        <motion.button
                            className="btn btn-primary"
                            initial={{ opacity: 0, y: 10 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.8, duration: 0.4 }}
                            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Learn More About Us
                        </motion.button>
                    </motion.div>

                    <motion.div
                        className="about-image-wrapper"
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                    >
                        <div className="about-image">
                            <img
                                src="/images/about-pharma.jpg"
                                alt="Pharmaceutical Facility"
                                loading="lazy"
                            />
                            <div className="about-image-overlay"></div>
                        </div>

                        <motion.div
                            className="about-badge"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.6, duration: 0.4 }}
                        >
                            <div className="about-badge-icon">
                                <FiAward />
                            </div>
                            <div className="about-badge-content">
                                <span className="about-badge-number">FSSAI</span>
                                <span className="about-badge-label">Certified Company</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
