import React from "react";
import { motion } from "framer-motion";
import '../transition-styles.css';

// Reusable page transition variants
export const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  in: {
    opacity: 1,
    y: 0
  },
  out: {
    opacity: 0,
    y: -20
  }
};

// Reusable transition timing
export const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

// Staggered children container
export const containerVariants = {
  hidden: { 
    opacity: 0 
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Individual element animation
export const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

/**
 * Template for creating pages with consistent transitions
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Page content
 * @param {string} props.className - Additional class names
 * @param {Object} props.customVariants - Custom animation variants (optional)
 * @param {Object} props.customTransition - Custom transition timing (optional)
 */
const PageTemplate = ({ 
  children, 
  className = "", 
  customVariants = pageVariants, 
  customTransition = pageTransition 
}) => {
  return (
    <motion.div
      className={`page-transition-container ${className}`}
      initial="initial"
      animate="in"
      exit="out"
      variants={customVariants}
      transition={customTransition}
    >
      {children}
    </motion.div>
  );
};

export default PageTemplate;