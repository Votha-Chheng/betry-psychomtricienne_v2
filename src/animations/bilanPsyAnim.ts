export const questionAppear = {
  initialQuestion: {
    x:"100%",
    opacity: 0,
  },
  initialVignette: {
    x:"-100%",
    opacity: 0,
  },
  initialLine: {
    top:"-5%",
    height: 0,
  },
  animateQuestion: {
    x:0,
    opacity: 1,
    transition: {
      delay:0.5,
      duration: 0.3,
      ease: "easeOut"
    }
  },
  animateVignette: {
    x:0,
    opacity:1,
    transition: {
      delay: 0.6,
      duration: 0.4,
      ease: "easeOut"
    }
  },
  animateLine: {
    top:["-5%","-5%", "-5%", "110%"],
    height: ["0%","110%", "110%", "0%"],
    transition: {
      delay:0.15,
      duration: 1.25
    }
  }
}
