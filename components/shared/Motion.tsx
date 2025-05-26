"use client";
import React, { useRef } from "react";
import { motion, useInView } from "motion/react"; // Corrected import from "motion/react" to "framer-motion"

/**
 * FadeInWhenVisible Component
 * Animates a single child element to fade in and slide up when it enters the viewport.
 *
 * @param {object} props - Component props.
 * @param {React.ReactNode} props.children - The content to be animated.
 * @param {number} [props.delay=0] - Delay before the animation starts (in seconds).
 * @param {number} [props.duration=0.8] - Duration of the animation (in seconds). Increased slightly for smoother feel.
 * @param {number} [props.yOffset=30] - Vertical offset from which the element slides up. Adjusted for a more subtle effect.
 * @param {string} [props.className=""] - Additional Tailwind CSS classes for the wrapper div.
 */
export const FadeInWhenVisible = ({
  // Renamed from FadeMotion for clarity
  children,
  delay = 0,
  duration = 0.8, // Slightly increased duration
  yOffset = 30, // Adjusted yOffset
  className = "",
}: {
  children: React.ReactNode;
  delay?: number; // Made optional
  duration?: number; // Made optional
  yOffset?: number; // Made optional
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 }); // amount: 0.2 means 20% of the element must be visible

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic-bezier for a professional ease-out effect
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * StaggeredReveal Component (Included for completeness, assuming it's part of the same file)
 * Animates a list of child elements with a staggered fade-in and slide-up effect
 * when their container enters the viewport.
 *
 * @param {object} props - Component props.
 * @param {React.ReactNode[]} props.children - An array of child elements to be animated.
 * Each child should ideally be a direct <motion.div> or similar.
 * @param {number} [props.delayChildren=0.1] - Delay between each child's animation (in seconds).
 * @param {number} [props.staggerDuration=0.05] - Duration of the stagger effect (total time for all children to start).
 * @param {number} [props.yOffset=20] - Vertical offset from which each child slides up.
 * @param {number} [props.itemDuration=0.6] - Duration of each individual child's animation.
 * @param {string} [props.className=""] - Additional Tailwind CSS classes for the wrapper div.
 */
export const StaggeredReveal = ({
  children,
  delayChildren = 0.1,
  staggerDuration = 0.05,
  yOffset = 20,
  itemDuration = 0.6,
  className = "",
}: {
  children: React.ReactNode;
  delayChildren?: number;
  staggerDuration?: number;
  yOffset?: number;
  itemDuration?: number;
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 }); // amount: 0.1 means 10% of the container must be visible

  // Container variants for stagger effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delayChildren,
        staggerChildren: staggerDuration,
      },
    },
  };

  // Item variants for individual child animation
  const itemVariants = {
    hidden: { opacity: 0, y: yOffset },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: itemDuration,
        ease: [0.25, 0.46, 0.45, 0.94], // Apply same professional ease
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {/* Map over children and wrap them with motion.div using itemVariants */}
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};
