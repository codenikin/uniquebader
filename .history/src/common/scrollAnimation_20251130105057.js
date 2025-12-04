import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollSmoother from 'gsap/ScrollSmoother'
import ScrollToPlugin from 'gsap/ScrollToPlugin'

export const ScrollAnimation = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin)

  // Create smoother first
  const smoother = ScrollSmoother.create({
    smooth: 1,
    effects: true,
    smoothTouch: 0.1,
  })

  // Wait until ScrollSmoother has wrapped the DOM
  // TWO animation frames = fully mounted DOM
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      initCodenikAnimation()
    })
  })
}

function initCodenikAnimation() {
  const codenikSection = document.querySelector('.codenik')
  if (!codenikSection) return

  let animatedBg = document.getElementById('codenik-animated-bg')

  if (!animatedBg) {
    animatedBg = document.createElement('div')
    animatedBg.id = 'codenik-animated-bg'
    animatedBg.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(45deg,rgba(21, 19, 19, 255) 0%,rgba(21, 19, 19, 255) 100%);
      z-index: -1;
      clip-path: polygon(100% 0%, 100% 0%, 100% 100%, 150% 100%);
    `
    codenikSection.appendChild(animatedBg)
  }

  codenikSection.style.position = 'relative'
  codenikSection.style.minHeight = '100vh'
  codenikSection.style.backgroundColor = 'transparent'

  const textElements = codenikSection.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, a, div')

  textElements.forEach((el) => {
    el.style.transition = 'color 0.2s ease'
    el.style.color = '#191717ff'
  })

  gsap
    .timeline({
      scrollTrigger: {
        trigger: codenikSection,
        start: 'top center',
        end: 'top top',
        scrub: 1,
      },
      onUpdate: () => {
        const bgLeft = animatedBg.getBoundingClientRect().left

        textElements.forEach((el) => {
          const rect = el.getBoundingClientRect()
          const center = rect.left + rect.width / 2
          if (center > bgLeft) {
            gsap.to(el, { color: '#000', duration: 0.2 })
          } else {
            gsap.to(el, { color: '#000', duration: 0.2 })
          }
        })
      },
    })
    .to('#codenik-animated-bg', {
      clipPath: 'polygon(-100% 0%, 100% 0%, 100% 100%, -25% 100%)',
      duration: 1,
      ease: 'none',
    })
}
