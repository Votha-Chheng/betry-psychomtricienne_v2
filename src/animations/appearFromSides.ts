export const appearFromLeft = {
  initial: {
    opacity: 0,
    x:"-50%"
  },
  animate: {
    opacity: 1,
    x:0,
    transition: {
      opacity: {
        duration: 0.75,
      },
      x: {
        duration: 0.5,
        ease: "easeOut"
      }
      
    }
  }
}

export const appearFromRight = {
  initial: {
    opacity: 0,
    x:"50%"
  },
  animate: {
    opacity: 1,
    x:0,
    transition: {
      opacity: {
        duration: 0.75,
        
      },
      x: {
        duration: 0.5,
        ease: "easeOut"
      }
      
    }
  }
}

export const appearFromBottom = {
  initial: {
    opacity: 0,
    y:100
  },
  animate: {
    opacity: 1,
    y:0,
    transition: {
      opacity: {
        duration: 0.75,
        
      },
      y: {
        duration: 0.5,
        ease: "easeOut"
      }
      
    }
  }
}