import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiArrowRight, FiArrowUp } from 'react-icons/fi';
import { FaWhatsapp, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';

const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Research', href: '#research' },
    { label: 'Contact', href: '#contact' },
];

const serviceLinks = [
    { label: 'Drug Therapy', href: '#' },
    { label: 'Health Supplements', href: '#' },
    { label: 'CO2 Extracts', href: '#products' },
    { label: 'Herbal Extracts', href: '#products' },
];

const socialLinks = [
    { icon: <FaWhatsapp />, href: '#', label: 'WhatsApp' },
    { icon: <FaInstagram />, href: '#', label: 'Instagram' },
    { icon: <FaLinkedinIn />, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleNavClick = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand Column */}
                    <div className="footer-brand">
                        <a href="#home" className="footer-logo" onClick={() => handleNavClick('#home')}>
                            VIVITAZ
                            <span className="footer-logo-dot"></span>
                        </a>
                        <p className="footer-description">
                            VIVITAZ Healthcare Private Limited is a leading Indian pharmaceutical
                            and nutraceutical company specializing in quality extracts and
                            healthcare products.
                        </p>
                        <div className="footer-social">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="footer-social-link"
                                    aria-label={social.label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-column">
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="footer-link"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavClick(link.href);
                                        }}
                                    >
                                        <FiArrowRight />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="footer-column">
                        <h4>Our Services</h4>
                        <ul className="footer-links">
                            {serviceLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="footer-link"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavClick(link.href);
                                        }}
                                    >
                                        <FiArrowRight />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-column">
                        <h4>Contact Us</h4>
                        <div className="footer-contact-item">
                            <div className="footer-contact-icon">
                                <FiMapPin />
                            </div>
                            <div className="footer-contact-text">
                                Nellore, Andhra Pradesh, India
                            </div>
                        </div>
                        <div className="footer-contact-item">
                            <div className="footer-contact-icon">
                                <FiPhone />
                            </div>
                            <div className="footer-contact-text">
                                <a href="tel:+919980139802">+91 9980139802</a>
                            </div>
                        </div>
                        <div className="footer-contact-item">
                            <div className="footer-contact-icon">
                                <FiMail />
                            </div>
                            <div className="footer-contact-text">
                                <a href="mailto:info@vivitaz.com">info@vivitaz.com</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {currentYear} <strong>VIVITAZ Healthcare Private Limited</strong>. All rights reserved.
                    </p>
                    <motion.button
                        className="back-to-top"
                        onClick={scrollToTop}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Back to top"
                    >
                        <FiArrowUp />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
}
