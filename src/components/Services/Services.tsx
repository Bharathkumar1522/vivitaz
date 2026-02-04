import { motion } from 'framer-motion';
import { FiActivity, FiHeart, FiSun } from 'react-icons/fi';
import { useInView } from '../../hooks/useInView';
import './Services.css';

const services = [
    {
        icon: <FiActivity />,
        title: 'Drug Therapy',
        description: 'Advanced pharmaceutical solutions relying on pharmacology for continual advancement and appropriate management.',
    },
    {
        icon: <FiHeart />,
        title: 'Health Supplements',
        description: 'Dietary supplements to improve health and well-being, available as tablets, capsules, powders, and extracts.',
    },
    {
        icon: <FiSun />,
        title: 'Traditional Medicines',
        description: 'Minerals, herbal medicines, homeopathic preparations, energy drinks, probiotics, and alternative medicines.',
    },
];

export default function Services() {
    const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.1 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' as const },
        },
    };

    return (
        <section className="services section" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <span className="section-subtitle">What We Do</span>
                    <h2 className="section-title">Our Core Services</h2>
                    <p className="section-description">
                        We provide comprehensive healthcare solutions across multiple domains,
                        ensuring quality and innovation in every product we manufacture.
                    </p>
                </motion.div>

                <motion.div
                    className="services-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="service-card"
                            variants={cardVariants}
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                            {/* <div className="service-learn-more">
                                Learn More <FiArrowRight />
                            </div> */}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
