
export const vignette = {
  initial: {
    y:'70px',
    rotate:0,
    height: 0
  },
  animate: {
    y:0,
    rotate:45,
    height:'144px',
    transition: {
      y: {
        duration: 0.5,
        delay:0.75,
        ease:"easeOut"
      },
      height: {
        duration: 0.5,
        delay:0.75,
        ease:"easeOut"
      },
      rotate:{
        duration: 0.5,
        delay:1.25,
        ease:"easeOut"
      }
    }
  }
}

export const insideImage = {
  initial: {
    opacity:0,

  },
  animate: {
    opacity:1,
    transition: {
      duration: 0.75,
      delay:1.9
    }
  }
}

export const whiteLine = {
  initial: {
    opacity:0
  },
  animate: {
    x:[-375, 0, 0, 0, -60],
    opacity: 1,
    transition: {
      x: {
        duration: 2.8,
        delay:2,
      },
      opacity: {
        delay: 1.75
      }
    }
  }
}

export const upTitle = {
  initial: {

  },
  animate: {
    y:[70, -7.5, -7.5, -7.5, -7.5, -7.5, 0],
    transition: {
      duration: 2.75,
      delay: 2.5
    }
  }
}

export const bottomTitle = {
  initial: {
    y: '-120%'
  },
  animate: {
    y:0,
    transition: {
      duration: 0.5,
      delay: 2.75
    }
  }
}