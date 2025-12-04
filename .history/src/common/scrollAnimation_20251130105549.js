import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollSmoother from 'gsap/ScrollSmoother'
import ScrollToPlugin from 'gsap/ScrollToPlugin'

export const ScrollAnimation = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin)

  /** ------------------------------
   *  Create ScrollSmoother
   * ------------------------------ */
  const smoother = ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    content: '#smooth-content',
    smooth: 1,
    effects: true,
    smoothTouch: 0.1,
  })

  /** ------------------------------
   *  Required for ScrollTrigger sync
   * ------------------------------ */
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

  ScrollTrigger.defaults({
    scroller: '#smooth-content',
  })

  /** IMPORTANT:
   *  Wait for layout to stabilize or animations won’t work
   */
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      initCodenik()
      ScrollTrigger.refresh()
    })
  })
}

/** ------------------------------
 *  CODENIK SECTION ANIMATION
 * ------------------------------ */
function initCodenik() {
  const codenikSection = document.querySelector('.codenik')
  if (!codenikSection) return

  // Create background if missing
  let animatedBg = document.getElementById('codenik-animated-bg')
  if (!animatedBg) {
    animatedBg = document.createElement('div')
    animatedBg.id = 'codenik-animated-bg'
    animatedBg.style.cssText = `
      position: absolute;
      inset: 0;
      background: linear-gradient(45deg, rgba(21,19,19,1), rgba(21,19,19,1));
      z-index: 1;
      pointer-events: none;
      clip-path: polygon(100% 0%, 100% 0%, 100% 100%, 150% 100%);
    `
    codenikSection.appendChild(animatedBg)
  }

  /** Timeline Animation */
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: codenikSection,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1,
      markers: true, // enable temporarily
    },
  })

  tl.to(animatedBg, {
    clipPath: 'polygon(-100% 0%, 100% 0%, 100% 100%, -25% 100%)',
    ease: 'none',
  })
}
