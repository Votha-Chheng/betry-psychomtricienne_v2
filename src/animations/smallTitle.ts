export const smallTitle = {
  initialName: {
    y:"125%"
  },
  animateName: {
    y:["125%", "-10%", "-10%", "-10%", "-10%", "0%"],
    transition: {
      delay:0.7,
      duration: 1.8
      
    }
  },
  initialPsy: {
    y:"-125%"
  },
  animatePsy: {
    y:0,
    transition: {
      delay:0.8,
      duration: 0.4
      
    }
  },
  initialLine: {
    scaleX:0,
  },
  animateLine:{
    scaleX: [0, 1, 1, 1, 1, 1, 0.90],
    transition: {
      scaleX: {
        delay:0.4,
        duration: 1.75,
        ease:"easeOut"
      },
    }
  }
}