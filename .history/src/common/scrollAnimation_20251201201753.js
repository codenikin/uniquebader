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
      background: linear-gradient(45deg, #0c3b66 0%, #1e5a96 100%);
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

    // Set initial text color to white
    textElements.forEach((el) => {
      el.style.color = '#000000'
      if (el.tagName.toLowerCase() === 'a') {
        el.style.transition = 'color 0.3s ease'
      }
    })

    // Create timeline for scroll-based animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutSection,
        start: 'top center', // Start when top of section hits center
        end: 'center center', // End when center of section hits center
        scrub: 1,
        markers: false,
        toggleActions: 'play none none reverse',
        onUpdate: (self) => {
          const progress = self.progress
          const textColor = progress >= 0.5 ? '#000000' : '#ffffff'
          textElements.forEach((el) => {
            gsap.to(el, {
              color: textColor,
              duration: 0.1,
            })
          })
        },
      },
    })

    // Single color transition at 50% scroll
    tl.to('.unique', {
      background: '#ffffff',
      duration: 1,
      ease: 'power2.inOut',
    })
  }
}
