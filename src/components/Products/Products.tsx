import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { useInView } from '../../hooks/useInView';
import './Products.css';

const products = [
    {
        image: '/images/co2-extracts.jpg',
        category: 'Natural Extracts',
        title: 'CO2 Extracts',
        description:
            'Herbal extracts made using Super-Critical Fluid Extraction (SCFE) such as carbon dioxide. The extraction process is designed to maximize a specific portion of the original chemical compounds found in the plant, many of which have therapeutic action.',
    },
    {
        image: '/images/herbal-extracts.jpg',
        category: 'Herbal Solutions',
        title: 'Herbal Extracts',
        description:
            'Substances made by extracting a part of herbal raw material, usually by using a solvent such as water. The herbal extraction process is designed to maximize the original chemical compounds found in the plant for therapeutic benefits.',
    },
];

export default function Products() {
    const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.1 });

    return (
        <section className="products section" id="products" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <span className="section-subtitle">Our Products</span>
                    <h2 className="section-title">Premium Quality Extracts</h2>
                    <p className="section-description">
                        We specialize in manufacturing high-quality extracts using advanced
                        extraction technologies for maximum therapeutic benefits.
                    </p>
                </motion.div>

                <div className="products-grid">
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            className="product-card"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.2 + index * 0.15, duration: 0.5 }}
                        >
                            <div className="product-image-wrapper">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="product-image"
                                    loading="lazy"
                                />
                                <div className="product-overlay"></div>
                            </div>
                            <div className="product-content">
                                <div className="product-category">
                                    <span className="product-category-line"></span>
                                    <span className="product-category-text">{product.category}</span>
                                </div>
                                <h3 className="product-title">{product.title}</h3>
                                <p className="product-description">{product.description}</p>
                                <a href="#contact" className="product-link">
                                    Learn More <FiArrowRight />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
