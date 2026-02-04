import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { useInView } from '../../hooks/useInView';
import './Contact.css';

const contactDetails = [
    {
        icon: <FiMail />,
        label: 'Email Address',
        value: 'info@vivitaz.com',
        href: 'mailto:info@vivitaz.com',
    },
    {
        icon: <FiPhone />,
        label: 'Phone Number',
        value: '+91 9849660730',
        href: 'tel:+919849660730',
    },
    {
        icon: <FiMapPin />,
        label: 'Location',
        value: 'Nellore, Andhra Pradesh, India',
        href: null,
    },
];

const socialLinks = [
    { icon: <FaWhatsapp />, href: '#', label: 'WhatsApp' },
];

export default function Contact() {
    const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.1 });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Create mailto link with form data
        const subject = encodeURIComponent(`Contact Form Submission from ${formData.name}`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n` +
            `Phone: ${formData.phone || 'Not provided'}\n\n` +
            `Message:\n${formData.message}`
        );

        // Open Gmail (or default email client) with pre-filled data
        window.location.href = `mailto:info@vivitaz.com?subject=${subject}&body=${body}`;
    };

    return (
        <section className="contact section" id="contact" ref={ref}>
            <div className="container">
                <div className="contact-wrapper">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="contact-subtitle">Get in Touch</span>
                        <h2 className="contact-title">
                            Let Us Help You Find a Solution
                        </h2>
                        <p className="contact-description">
                            Have questions about our products or services? We&apos;re here to help.
                            Reach out to us and our team will get back to you shortly.
                        </p>

                        <div className="contact-details">
                            {contactDetails.map((detail, index) => (
                                <motion.div
                                    key={index}
                                    className="contact-detail"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                                >
                                    <div className="contact-detail-icon">{detail.icon}</div>
                                    <div className="contact-detail-content">
                                        <div className="contact-detail-label">{detail.label}</div>
                                        <div className="contact-detail-value">
                                            {detail.href ? (
                                                <a href={detail.href}>{detail.value}</a>
                                            ) : (
                                                detail.value
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            className="contact-social"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.6, duration: 0.4 }}
                        >
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="contact-social-link"
                                    aria-label={social.label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="contact-form-wrapper"
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label" htmlFor="name">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="form-input"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="email">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="form-input"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="phone">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="form-input"
                                    placeholder="+91 1234567890"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="message">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="form-textarea"
                                    placeholder="Tell us about your requirements..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <div className="form-submit">
                                <button type="submit" className="btn btn-primary btn-lg">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
