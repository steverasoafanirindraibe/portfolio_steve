'use client';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const AnimatedSection = ({ 
  children, 
  threshold = 0.1,
  direction = 'up',
  delay = 0,
  duration = 0.5,
  className = '',
  triggerOnce = true
}) => {
  const { ref, isInView } = useScrollAnimation(threshold, triggerOnce);

  const getVariants = () => {
    const distance = 100; 
    
    const baseVariants = {
      hidden: {
        opacity: 0,
        y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
        x: direction === 'left' ? distance : direction === 'right' ? -distance : 0,
        scale: direction === 'scale' ? 0.8 : 1
      },
      visible: {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        transition: {
          duration: duration,
          delay: delay,
          // ease: [0.25, 0.46, 0.45, 0.94] // 
        }
      }
    };
    
    return baseVariants;
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;