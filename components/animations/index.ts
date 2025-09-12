// Animation Components Export
export { FadeInView } from "./fade-in-view"
export { StaggerContainer, staggerItemVariants } from "./stagger-container"
export { ScaleInView } from "./scale-in-view"
export { FloatingElement } from "./floating-element"
export { RotateInView } from "./rotate-in-view"
export { TextReveal } from "./text-reveal"
export { ParallaxScroll } from "./parallax-scroll"

// Animation Presets
export const animationPresets = {
  fadeInUp: {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
  },
  fadeInRight: {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] },
  },
  slideInUp: {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
  },
}

// Easing Functions
export const easings = {
  easeOutCubic: [0.6, -0.05, 0.01, 0.99],
  easeInOutCubic: [0.4, 0, 0.2, 1],
  easeOutQuart: [0.25, 1, 0.5, 1],
  spring: { type: "spring", stiffness: 100, damping: 15 },
}
