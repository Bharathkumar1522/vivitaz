import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';
import { useInView } from '../../hooks/useInView';
import './About.css';

const features = [
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
                            VIVITAZ Healthcare Private Limited is established to carry on the business of manufacture, produce, develops, buy, sell, wholesale, retail, trade, and deals of nutraceutical products, health and wellness, pharmaceutical and health supplement products, liquid filled hard gelatin / HMPC capsules often derived from food sources or dietary supplements.
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
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
