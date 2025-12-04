import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollSmoother from 'gsap/ScrollSmoother'

export const ScrollAnimation = () => {
  if (typeof window === 'undefined') return

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

  /** -------------------------
   * ScrollSmoother setup
   * ------------------------- */
  const smoother = ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    content: '#smooth-content',
    smooth: 1,
    effects: true,
    smoothTouch: 0.1,
  })

  /** -------------------------
   * scrollerProxy for ScrollTrigger
   * ------------------------- */
  ScrollTrigger.scrollerProxy('#smooth-content', {
    scrollTop(value) {
      return arguments.length ? smoother.scrollTop(value) : smoother.scrollTop()
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      }
    },
  })

  ScrollTrigger.defaults({ scroller: '#smooth-content' })

  /** -------------------------
   * Init after layout
   * ------------------------- */
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      initCodenik()
      ScrollTrigger.refresh()
    })
  })
}

/** -------------------------
 * CODENIK Animation
 * ------------------------- */
function initCodenik() {
  const codenikSection = document.querySelector('.codenik')
  if (!codenikSection) return

  // Make sure section is positioned correctly
  codenikSection.style.position = 'relative'
  codenikSection.style.minHeight = '100vh'

  // Background element
  let animatedBg = document.getElementById('codenik-animated-bg')
  if (!animatedBg) {
    animatedBg = document.createElement('div')
    animatedBg.id = 'codenik-animated-bg'
    animatedBg.style.cssText = `
      position: absolute;
      inset: 0;
      background: linear-gradient(45deg, rgba(21,19,19,1), rgba(21,19,19,1));
      z-index: -1;
      pointer-events: none;
      clip-path: polygon(100% 0%, 100% 0%, 100% 100%, 150% 100%);
    `
    codenikSection.appendChild(animatedBg)
  } else {
    // Reset clip-path to initial
    animatedBg.style.clipPath = 'polygon(100% 0%, 100% 0%, 100% 100%, 150% 100%)'
    animatedBg.style.zIndex = '-1'
  }

  // Select text elements to change color
  const textElements = codenikSection.querySelectorAll(
    'h1, h2, h3, h4, h5, h6, p, span, a, div.row, div.col-lg-3',
  )
  textElements.forEach((el) => {
    if (el instanceof HTMLElement) {
      el.style.transition = 'color 0.2s ease'
      el.style.color = '#000000'
    }
  })

  /** Timeline */
  gsap.to(animatedBg, {
    clipPath: 'polygon(-100% 0%, 100% 0%, 100% 100%, -25% 100%)',
    ease: 'none',
    scrollTrigger: {
      trigger: codenikSection,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1,
      markers: false, // set true to debug
    },
  })

  /** Optional: text color change as background moves */
  ScrollTrigger.create({
    trigger: codenikSection,
    start: 'top bottom',
    end: 'bottom top',
    scrub: true,
    onUpdate: (self) => {
      const bgRect = animatedBg.getBoundingClientRect()
      const bgLeft = bgRect.left + bgRect.width / 2

      textElements.forEach((el) => {
        if (!(el instanceof HTMLElement)) return
        const rect = el.getBoundingClientRect()
        const elCenter = rect.left + rect.width / 2
        el.style.color = elCenter < bgLeft ? '#ffffff' : '#000000'
      })
    },
  })
}
