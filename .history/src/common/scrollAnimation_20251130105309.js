import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollSmoother from 'gsap/ScrollSmoother'
import ScrollToPlugin from 'gsap/ScrollToPlugin'

export const ScrollAnimation = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin)

  const smoother = ScrollSmoother.create({
    smooth: 1,
    effects: true,
    smoothTouch: 0.1,
  })

  // Required for ScrollTrigger to work with ScrollSmoother
  ScrollTrigger.scrollerProxy(smoother.content, {
    scrollTop(value) {
      return arguments.length ? smoother.scrollTop(value) : smoother.scrollTop()
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }
    },
  })

  ScrollTrigger.defaults({ scroller: smoother.content })

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      initCodenik()
      ScrollTrigger.refresh()
    })
  })
}

function initCodenik() {
  const codenikSection = document.querySelector('.codenik')
  if (!codenikSection) return

  let animatedBg = document.getElementById('codenik-animated-bg')
  if (!animatedBg) {
    animatedBg = document.createElement('div')
    animatedBg.id = 'codenik-animated-bg'
    animatedBg.style.cssText = `
      position: absolute;
      inset: 0;
      background: linear-gradient(45deg,rgba(21, 19, 19, 255), rgba(21, 19, 19, 255));
      z-index: 1;
      pointer-events: none;
      clip-path: polygon(100% 0%, 100% 0%, 100% 100%, 150% 100%);
    `
    codenikSection.appendChild(animatedBg)
  }

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: codenikSection,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1,
      markers: true,
    },
  })

  tl.to(animatedBg, {
    clipPath: 'polygon(-100% 0%, 100% 0%, 100% 100%, -25% 100%)',
    ease: 'none',
  })
}
