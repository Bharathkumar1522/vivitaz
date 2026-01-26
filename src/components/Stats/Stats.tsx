import { useEffect, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { FiUsers, FiCalendar, FiSmile, FiPackage } from 'react-icons/fi';
import { useInView } from '../../hooks/useInView';
import './Stats.css';

interface AnimatedCounterProps {
    target: number;
    isInView: boolean;
    duration?: number;
}

function AnimatedCounter({ target, isInView, duration = 2 }: AnimatedCounterProps) {
    const [hasAnimated, setHasAnimated] = useState(false);

    const springValue = useSpring(0, {
        stiffness: 50,
        damping: 20,
        duration: duration * 1000,
    });

    const displayValue = useTransform(springValue, (latest) => Math.floor(latest));
    const [currentValue, setCurrentValue] = useState(0);

    useEffect(() => {
        if (isInView && !hasAnimated) {
            setHasAnimated(true);
            springValue.set(target);
        }
    }, [isInView, hasAnimated, springValue, target]);

    useEffect(() => {
        const unsubscribe = displayValue.on('change', (latest) => {
            setCurrentValue(latest);
        });
        return unsubscribe;
    }, [displayValue]);

    return <span>{currentValue}</span>;
}

const stats = [
    {
        icon: <FiUsers />,
        value: 380,
        suffix: '+',
        label: 'Professionals in Our Team',
    },
    {
        icon: <FiCalendar />,
        value: 5,
        suffix: '+',
        label: 'Years of Successful Work',
    },
    {
        icon: <FiSmile />,
        value: 970,
        suffix: '+',
        label: 'Satisfied Clients',
    },
    {
        icon: <FiPackage />,
        value: 44000,
        suffix: '+',
        label: 'Square Meters Warehouse',
    },
];

export default function Stats() {
    const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.3 });

    return (
        <section className="stats" ref={ref}>
            <div className="container">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="stat-item"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className="stat-icon">{stat.icon}</div>
                            <div className="stat-number">
                                <AnimatedCounter target={stat.value} isInView={isInView} />
                                <span className="stat-suffix">{stat.suffix}</span>
                            </div>
                            <div className="stat-label">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
