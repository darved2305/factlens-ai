function locomotive() {
  gsap.registerPlugin(ScrollTrigger)

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  })

  locoScroll.on("scroll", ScrollTrigger.update)

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  })

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update())
  ScrollTrigger.refresh()
}
locomotive()

ScrollTrigger.create({
  trigger: "#spline-wrap",
  pin: true,
  scroller: "#main",
  start: "top top",
  end: "600% top"
})

gsap.to("#page1", {
  scrollTrigger: {
    trigger: "#page1",
    start: "top top",
    end: "bottom top",
    pin: true,
    scroller: "#main"
  }
})

gsap.to("#page2", {
  scrollTrigger: {
    trigger: "#page2",
    start: "top top",
    end: "bottom top",
    pin: true,
    scroller: "#main"
  }
})

gsap.to("#page3", {
  scrollTrigger: {
    trigger: "#page3",
    start: "top top",
    end: "bottom top",
    pin: true,
    scroller: "#main"
  }
})
