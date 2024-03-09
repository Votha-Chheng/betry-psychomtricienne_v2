export const startLines = {
  vertical: (width: number)=> ({
    left: (width*0.5)-4,
    transition: {
      duration:0.25,
      ease:"easeOut"
    }
  }),
  horizontal : (height: number)=> ({
    top: ((height-70)*0.5)-4,
    transition: {
      duration:0.25,
      ease:"easeOut"
    }
  }),
  baby: ({width, height}:{width:number, height:number})=> ({
    width: (width*0.5),
    height: ((height-70)*0.5)-2,
    top:-2,
    left:-4,
    transition: {
      duration:0.25,
      ease:"easeOut",
    }
  }),
  teen: ({width, height}:{width:number, height:number})=> ({
    width: (width*0.5),
    height: ((height-70)*0.5)-2,
    top:0,
    right: -20,
    transition: {
      duration:0.25,
      ease:"easeOut",
    }
  }),
  adult: ({width, height}:{width:number, height:number})=> ({
    width: (width*0.5),
    height: ((height-70)*0.5)-2,
    bottom: -20,
    left:-4,
    transition: {
      duration:0.25,
      ease:"easeOut",
    }
  }),
  senior: ({width, height}:{width:number, height:number})=> ({
    width: (width*0.5),
    height: ((height-70)*0.5)-2,
    right: -20,
    bottom: -20,
    transition: {
      duration:0.25,
      ease:"easeOut",
    }
  })
}

export const babySelected = {
  vertical : (width: number)=> ({
    left: (width*0.85)-6,
    transition: {
      duration: 0.25,
      ease:"easeOut",
    }
  }),
  horizontal: (height: number)=> ({
    top: ((height-70)*0.75),
    transition: {
      duration: 0.25,
      ease:"easeOut",
    }
  }),
  baby: ({width, height}:{width:number, height:number})=> ({
    width: (width*0.85)-2,
    height: ((height-70)*0.75),
    top:0,
    left:-4,
    transition: {
      duration: 0.25,
      ease:"easeOut",
    }
  }),
  teen: ({width, height}:{width:number, height:number})=> ({
    width: (width*0.15)-2,
    height: ((height-70)*0.75),
    top:0,
    right: -16,
    transition: {
      duration: 0.25,
      ease:"easeOut",
    }
  }),
  adult: ({width, height}:{width:number, height:number})=> ({
    width: (width*0.85)-2,
    height: ((height-70)*0.25)-4,
    bottom: -20,
    left:-4,
    transition: {
      duration: 0.25,
      ease:"easeOut",
    }
  }),
  senior: ({width, height}:{width:number, height:number})=> ({
    width: (width*0.15)-2,
    height:( (height-70)*0.25)-4,
    right:-16,
    bottom:-20,
    transition: {
      duration: 0.25,
      ease:"easeOut",
    }
  })
}

export const childSelected = {
  vertical : (width: number)=> ({
    left: (width*0.15)-6,
    transition: {
      duration: 0.25,
    }
  }),
  horizontal: (height: number)=> ({
    top: ((height-70)*0.75)-4,
    transition: {
      duration: 0.25,
    }
  }),
  baby: ({width, height}:{width:number, height:number})=> ({
    width: (width*0.15)-2,
    height: (height-70)*0.75,
    top:-4,
    left:-4,
    transition: {
      duration: 0.25,
      ease:"easeOut",
    }
  }),
  teen: ({width, height}:{width:number, height:number})=> ({
    width: (width*0.85)-2,
    height: ((height-70)*0.75)-4,
    top:0,
    right: -16,
    transition: {
      duration: 0.25,
      ease:"easeOut",
    }
  }),
  adult: ({width, height}:{width:number, height:number})=> ({
    width: (width*0.15)-2,
    height: (height-70)*0.25,
    bottom: -20,
    left:-4,
    transition: {
      duration: 0.25,
      ease:"easeOut",
    }
  }),
  senior: ({width, height}:{width:number, height:number})=> ({
    width: (width*0.85)-2,
    height:( (height-70)*0.25),
    right:-16,
    bottom:-20,
    transition: {
      duration: 0.25,
      ease:"easeOut",
    }
  }),
}

export const adultSelected = {
  vertical : (width: number)=> ({
    left: (width*0.85)-6,
    transition: {
      duration: 0.25,
    }
  }),
  horizontal: (height: number)=> ({
    top: ((height-70)*0.25)-4,
    transition: {
      duration: 0.25,
    }
  }),
  baby: ({width, height}:{width:number, height:number})=> ({
    width: (width*0.85)-2,
    height: (height-70)*0.25,
    top:-4,
    left:-4,
    transition: {
      duration: 0.25,
      ease:"easeOut",
    }
  }),
  teen: ({width, height}:{width:number, height:number})=> ({
    width: (width*0.15)-2,
    height: ((height-70)*0.25)-4,
    top:0,
    right: -16,
    transition: {
      duration: 0.25,
      ease:"easeOut",
    }
  }),
  adult: ({width, height}:{width:number, height:number})=> ({
    width: (width*0.85)-2,
    height: (height-70)*0.75,
    bottom: -20,
    left:-4,
    transition: {
      duration: 0.25,
      ease:"easeOut",
    }
  }),
  senior: ({width, height}:{width:number, height:number})=> ({
    width: (width*0.15)-2,
    height:( (height-70)*0.75),
    right:-16,
    bottom:-20,
    transition: {
      duration: 0.25,
      ease:"easeOut",
    }
  })
}

export const seniorSelected = {
  vertical : (width: number)=> ({
    left: (width*0.15)-6,
    transition: {
      duration: 0.25,
    }
  }),
  horizontal: (height: number)=> ({
    top: ((height-70)*0.25)-4,
    transition: {
      duration: 0.25,
    }
  }),
  baby: ({width, height}:{width:number, height:number})=> ({
    width: (width*0.15)-2,
    height: (height-70)*0.25,
    top:-4,
    left:-4,
    transition: {
      duration: 0.25,
      ease:"easeOut",
    }
  }),
  teen: ({width, height}:{width:number, height:number})=> ({
    width: (width*0.85)-2,
    height: ((height-70)*0.25)-4,
    top:0,
    right: -16,
    transition: {
      duration: 0.25,
      ease:"easeOut",
    }
  }),
  adult: ({width, height}:{width:number, height:number})=> ({
    width: (width*0.15)-2,
    height: (height-70)*0.75,
    bottom: -20,
    left:-4,
    transition: {
      duration: 0.25,
      ease:"easeOut",
    }
  }),
  senior: ({width, height}:{width:number, height:number})=> ({
    width: (width*0.85)-2,
    height:( (height-70)*0.75),
    right:-16,
    bottom:-20,
    transition: {
      duration: 0.25,
      ease:"easeOut",
    }
  })
}
