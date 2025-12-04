import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollSmoother from 'gsap/ScrollSmoother'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
export const ScrollAnimation = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin)
  ScrollSmoother.create({
    smooth: 1,
    effects: true,
    smoothTouch: 0.1,
  })
  const codenikSection = document.querySelector('.codenik')
  if (codenikSection) {
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
      background: linear-gradient(45deg, #e0f2fe 0%, #bae6fd 100%);
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
      if (el instanceof HTMLElement) {
        el.style.transition = 'color 0.2s ease'
        el.style.color = '#191717ff'
      }
    })

    gsap.registerPlugin(ScrollTrigger)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: codenikSection,
        start: 'top center',
        end: 'top top',
        scrub: 1,
        markers: false,
        onUpdate: (self) => {
          const bgRect = animatedBg.getBoundingClientRect()
          const bgLeftEdge = bgRect.left
          textElements.forEach((el) => {
            if (el instanceof HTMLElement) {
              const elementRect = el.getBoundingClientRect()
              const elementCenter = elementRect.left + elementRect.width / 2
              if (elementCenter > bgLeftEdge) {
                gsap.to(el, {
                  color: '#000000',
                  duration: 0.2,
                })
              } else {
                gsap.to(el, {
                  color: '#000000',
                  duration: 0.2,
                })
              }
            }
          })
        },
      },
    })
    tl.to('#codenik-animated-bg', {
      clipPath: 'polygon(-100% 0%, 100% 0%, 100% 100%, -25% 100%)',
      duration: 1,
      ease: 'none',
    })
  }
  const aboutSection = document.querySelector('.unique')
  if (aboutSection) {
    aboutSection.style.position = 'relative'
    aboutSection.style.minHeight = '100vh'
    aboutSection.style.background = 'linear-gradient(45deg,rgb(21, 19, 19) 0%,rgb(20, 26, 20) 100%)'

    const textElements = aboutSection.querySelectorAll(
      'p, h2,h3, .unique-text, .unique-text-sm, .unique-text-md, a',
    )
    textElements.forEach((el) => {
      el.style.color = '#000000'
      if (el.tagName.toLowerCase() === 'a') {
        el.style.transition = 'color 0.3s ease'
      }
    })
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutSection,
        start: 'top center',
        end: 'center center',
        scrub: 1,
        markers: false,
        toggleActions: 'play none none reverse',
        onUpdate: (self) => {
          const progress = self.progress
          const textColor = progress >= 0.5 ? '#1e73be' : '#ffffff'
          textElements.forEach((el) => {
            gsap.to(el, {
              color: textColor,
              duration: 0.1,
            })
          })
        },
      },
    })
    tl.to('.unique', {
      background: '#ffffff',
      duration: 1,
      ease: 'power2.inOut',
    })
  }
}
