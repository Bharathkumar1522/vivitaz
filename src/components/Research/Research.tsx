import { motion } from 'framer-motion';
import { FiZap, FiLayers, FiCpu, FiBox } from 'react-icons/fi';
import { useInView } from '../../hooks/useInView';
import './Research.css';

const researchAreas = [
    {
        icon: <FiZap />,
        title: 'Pharmaceuticals Impurities Synthesis',
        text: 'Advanced analysis and synthesis',
    },
    {
        icon: <FiLayers />,
        title: 'Organic Synthesis',
        text: 'Custom compound development',
    },
    {
        icon: <FiCpu />,
        title: 'Synthetic Chemistry',
        text: 'Innovative molecular solutions',
    },
    {
        icon: <FiBox />,
        title: 'Biotechnology Research',
        text: 'Cutting-edge bio solutions',
    },
];

export default function Research() {
    const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.1 });

    return (
        <section className="research section" id="research" ref={ref}>
            <div className="container">
                <div className="research-grid">
                    <motion.div
                        className="research-image-col"
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="research-image-wrapper">
                            <img
                                src="/images/research-lab.jpg"
                                alt="R&D Laboratory"
                                loading="lazy"
                            />
                            <div className="research-badge">
                                <span className="research-badge-icon"><FiZap /></span>
                                <span className="research-badge-text">Innovation Hub</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="research-content"
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <span className="research-subtitle">Research & Development</span>
                        <h2 className="research-title">R&D Support</h2>
                        <p className="research-description">
                            The technological and scientific expertise enables us to develop new and
                            improved functional ingredients. Our R&D team consists of well-experienced
                            scientists from the best institutes in the country, engaged in continuous
                            interaction with leading Universities and Institutions.
                        </p>

                        <div className="research-areas">
                            {researchAreas.map((area, index) => (
                                <motion.div
                                    key={index}
                                    className="research-area"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                                >
                                    <div className="research-area-icon">{area.icon}</div>
                                    <div className="research-area-content">
                                        <h4 className="research-area-title">{area.title}</h4>
                                        <p className="research-area-text">{area.text}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.button
                            className="btn btn-primary"
                            initial={{ opacity: 0, y: 10 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.8, duration: 0.4 }}
                            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Partner With Us
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section >
    );
}
