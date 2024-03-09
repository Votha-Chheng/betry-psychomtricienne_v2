export const atelierParent = {
  initial: {

  },
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

export const vignetteParent = {
  initial: {

  },
  animate: {
    transition: {
      delayChildren:0.4,
      staggerChildren: 0.1
    }
  }
}

export const imgBg = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 0.5,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
}

export const fromLeftWithDelay = {
  initial: {
    x: "100%",
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.7,
      duration: 0.4,
      ease: "easeOut"
    }
  }
}
