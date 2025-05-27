// components/utils/AnimatedSection.jsx
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AnimatedSection({ children, delay = 0 }) {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
}
