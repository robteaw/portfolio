// Hero
export const titleAnim = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } },
};

export const imgAnim = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1 } },
};

export const container = {
  show: {
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 1,
      when: "before",
    },
  },
};

// About
export const bookAnim = {
  hidden: { x: -800, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 1 } },
};
export const skillAnim = {
  hidden: { x: 800, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 1 } },
};

// Portfolio
export const cardAnim = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
  },
};

// Contact
export const phoneAnim = {
  hidden: { y: 400, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 1 } },
};
export const contactAnim = {
  hidden: { y: 400, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 1 } },
};

// Header
export const textAnim = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};
