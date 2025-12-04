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

  /* -------------------------------------------
    About Us Section Animation
    ------------------------------------------- */
  const aboutSection = document.querySelector('.mil-c')
  if (aboutSection) {
    // Set initial styles
    aboutSection.style.position = 'relative'
    aboutSection.style.minHeight = '100vh'
    aboutSection.style.background = 'linear-gradient(45deg,rgb(21, 19, 19) 0%,rgb(20, 26, 20) 100%)'

    const textElements = aboutSection.querySelectorAll(
      'p, h2,h3, .mil-text, .mil-text-sm, .mil-text-md, a',
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
    tl.to('.mil-c', {
      background: '#ffffff',
      duration: 1,
      ease: 'power2.inOut',
    })
  }

  /* -------------------------------------------
    cursor
    ------------------------------------------- */

  var follower = document.querySelector('.mil-cursor-follower')
  var posX = 0,
    posY = 0
  var mouseX = 0,
    mouseY = 0

  gsap.ticker.add(function () {
    posX += (mouseX - posX) / 29
    posY += (mouseY - posY) / 29
    gsap.set(follower, {
      css: {
        left: posX,
        top: posY,
      },
    })
  })

  function addHoverEffect(selector, className) {
    document.querySelectorAll(selector).forEach(function (link) {
      link.addEventListener('mouseenter', function () {
        follower.classList.add(className)
      })
      link.addEventListener('mouseleave', function () {
        follower.classList.remove(className)
      })
    })
  }

  addHoverEffect('.mil-c-light', 'mil-light-active')
  addHoverEffect('.mil-c-dark', 'mil-dark-active')
  addHoverEffect('.mil-c-gone', 'mil-gone-active')
  addHoverEffect('.mil-c-view', 'mil-view-active')
  addHoverEffect('.mil-c-next', 'mil-next-active')
  addHoverEffect('.mil-c-read', 'mil-read-active')
  addHoverEffect('.mil-c-swipe', 'mil-swipe-active')

  document.addEventListener('mousemove', function (e) {
    mouseX = e.clientX
    mouseY = e.clientY
  })

  /* -------------------------------------------
    cursor parallax
    ------------------------------------------- */
  var scene1 = document.getElementById('scene')
  if (scene1) {
    const parallaxInstance1 = new Parallax(scene1, {
      limitY: 10,
    })
  }

  var scene2 = document.getElementById('scene-2')
  if (scene2) {
    const parallaxInstance2 = new Parallax(scene2, {
      limitY: 10,
    })
  }

  /* -------------------------------------------
    scroll top panel & menu frame
    ------------------------------------------- */
  let lastScrollTop = 0

  window.addEventListener('scroll', () => {
    const topPanel = document.querySelector('.mil-top-panel-2')
    const menuFrame = document.querySelector('.mil-menu-frame-2')
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    if (menuFrame !== null) {
      if (menuFrame.classList.contains('mil-active')) {
        return // Stop execution if .mil-active class is present
      }
    }

    if (scrollTop > lastScrollTop) {
      if (topPanel !== null) {
        topPanel.classList.add('mil-scroll')
      }
    } else if (scrollTop < lastScrollTop && scrollTop === 0) {
      if (topPanel !== null) {
        topPanel.classList.remove('mil-scroll')
      }
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
  })

  /* -------------------------------------------
    scrollbar
    ------------------------------------------- */
  gsap.to('.mil-progress', {
    height: '100%',
    ease: 'sine',
    scrollTrigger: {
      scrub: 0.3,
    },
  })

  /* -------------------------------------------
    ruber letters
    ------------------------------------------- */
  const headings = document.querySelectorAll('.mil-rubber')

  headings.forEach((heading) => {
    const textNodes = []

    heading.childNodes.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        node.textContent.split(' ').forEach((word, index, array) => {
          const wordSpan = document.createElement('span')
          wordSpan.classList.add('mil-word-span')
          word.split('').forEach((letter) => {
            const letterSpan = document.createElement('span')
            letterSpan.classList.add('mil-letter-span')
            letterSpan.textContent = letter
            wordSpan.appendChild(letterSpan)
          })
          textNodes.push(wordSpan)
          if (index < array.length - 1) {
            textNodes.push(document.createTextNode(' '))
          }
        })
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        textNodes.push(node.cloneNode(true))
      }
    })

    heading.innerHTML = ''
    textNodes.forEach((node) => heading.appendChild(node))

    const letters = heading.querySelectorAll('.mil-letter-span')
    letters.forEach((letter) => {
      letter.addEventListener('mouseenter', () => {
        gsap.to(letter, {
          scaleY: 1.1,
          y: '-5%',
          duration: 0.2,
          ease: 'sine',
        })
      })

      letter.addEventListener('mouseleave', () => {
        gsap.to(letter, {
          scaleY: 1,
          y: '0%',
          duration: 0.2,
          ease: 'sine',
        })
      })
    })
  })

  /* -------------------------------------------
    counters
    ------------------------------------------- */
  const numbers = document.querySelectorAll('.mil-counter')

  if (numbers.length > 0) {
    numbers.forEach((element) => {
      const zero = {
        val: 0,
      }
      const num = parseFloat(element.dataset.number)
      const split = num.toString().split('.')
      const decimals = split.length > 1 ? split[1].length : 0

      gsap.to(zero, {
        val: num,
        duration: 1.8,
        scrollTrigger: {
          trigger: element,

          toggleActions: 'play none none reverse',
        },
        onUpdate: function () {
          element.textContent = zero.val.toFixed(decimals)
        },
      })
    })
  }

  /* -------------------------------------------
    scroll animation
    ------------------------------------------- */
  const appearance = document.querySelectorAll('.mil-up')
  appearance.forEach((section) => {
    gsap.fromTo(
      section,
      {
        opacity: 0,
        y: 40,
        scale: 1.04,
        ease: 'sine',
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: section,

          toggleActions: 'play none none reverse',
        },
      },
    )
  })

  /* -------------------------------------------
    parallax animation
    ------------------------------------------- */

  const parallaxImages = document.querySelectorAll('.mil-parallax-img')

  parallaxImages.forEach((section) => {
    var value1 = section.getAttribute('data-value-1')
    var value2 = section.getAttribute('data-value-2')

    gsap.fromTo(
      section,
      {
        ease: 'sine',
        y: value1,
      },
      {
        y: value2,
        scrollTrigger: {
          trigger: section,

          scrub: true,
          toggleActions: 'play none none reverse',
        },
      },
    )
  })

  /* -------------------------------------------
    parallax x animation
    ------------------------------------------- */

  const parallaxXImages = document.querySelectorAll('.mil-parallax-x-img')

  parallaxXImages.forEach((section) => {
    var value1 = section.getAttribute('data-value-1')
    var value2 = section.getAttribute('data-value-2')

    gsap.fromTo(
      section,
      {
        ease: 'sine',
        x: value1,
      },
      {
        x: value2,
        scrollTrigger: {
          trigger: section,
          scrub: true,

          toggleActions: 'play none none reverse',
        },
      },
    )
  })

  /* -------------------------------------------
    scale animation
    ------------------------------------------- */
  const scaleImage = document.querySelectorAll('.mil-scale-img')

  scaleImage.forEach((section) => {
    var value1 = section.getAttribute('data-value-1')
    var value2 = section.getAttribute('data-value-2')

    if (window.innerWidth < 1200) {
      value1 = Math.max(0.95, value1)
    }

    gsap.fromTo(
      section,
      {
        ease: 'sine',
        scale: value1,
      },
      {
        scale: value2,
        scrollTrigger: {
          trigger: section,
          scrub: true,

          toggleActions: 'play none none reverse',
        },
      },
    )
  })

  /* -------------------------------------------
    rotate animation
    ------------------------------------------- */
  const rotate = document.querySelectorAll('.mil-rotate')

  rotate.forEach((section) => {
    var value = section.getAttribute('data-value')
    gsap.fromTo(
      section,
      {
        ease: 'sine',
        rotate: 0,
      },
      {
        rotate: value,
        scrollTrigger: {
          trigger: section,
          scrub: true,
          toggleActions: 'play none none reverse',
        },
      },
    )
  })

  /* -------------------------------------------
    add class
    ------------------------------------------- */
  function addClassToElement(element) {
    if (element) {
      element.classList.add('mil-added')
    }
  }
  function removeClassFromElement(element) {
    if (element) {
      element.classList.remove('mil-added')
    }
  }

  document.querySelectorAll('.mil-add-class').forEach((element) => {
    ScrollTrigger.create({
      trigger: element,
      toggleActions: 'play none none reverse',
      onEnter: () => addClassToElement(element),
      onLeaveBack: () => removeClassFromElement(element),
    })
  })

  /* -------------------------------------------
    onepage navigation
    ------------------------------------------- */
  document.querySelectorAll('.mil-onepage-nav > li > a, .mil-scroll-to').forEach((link) => {
    link.addEventListener('click', function (event) {
      event.preventDefault()
      const targetId = this.getAttribute('href')
      const targetElement = document.querySelector(targetId)
      if (!targetElement) return

      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset
      const currentPosition = window.pageYOffset
      const distance = Math.abs(targetPosition - currentPosition)
      const baseDuration = 0.1 // Base duration in seconds
      const duration = baseDuration + distance / 4000 // Adjust this factor as needed

      const offsetY = window.innerWidth < 992 ? 120 : 160
      gsap.to(window, {
        duration: duration,
        ease: 'sine',
        scrollTo: {
          y: targetElement,
          offsetY: offsetY,
        },
      })
    })
  })

  /* replace accent wordsl */
  document.querySelectorAll('*[data-accent-words]').forEach((element) => {
    if (element.dataset.accentWords) {
      let words = element.dataset.accentWords.split(',')
      let color = 'a1'
      if (element.dataset.accentColor == 'secondary') {
        color = 'a2'
      }
      let current = element.innerHTML

      words.forEach((word_el) => {
        current = current.replaceAll(
          word_el,
          '<span class="mil-' + color + '">' + word_el + '</span>',
        )
      })

      element.innerHTML = current
    }
  })

  /*add current class for menu items*/
  document.querySelectorAll('.mil-main-menu a').forEach((element) => {
    if (element.classList.contains('mil-current')) {
      element.parentElement.classList.add('mil-current')
    } else {
      element.parentElement.classList.remove('mil-current')
    }
  })

  /* -------------------------------------------
    Codenik Section Animation
    ------------------------------------------- */
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
      background: linear-gradient(45deg,rgba(21, 19, 19, 255) 0%,rgba(21, 19, 19, 255) 100%);
      z-index: -1;
      clip-path: polygon(100% 0%, 100% 0%, 100% 100%, 150% 100%);
    `
      codenikSection.appendChild(animatedBg)
    }

    // Setup container
    codenikSection.style.position = 'relative'
    codenikSection.style.minHeight = '100vh'
    codenikSection.style.backgroundColor = 'transparent'

    // Select all text elements
    const textElements = codenikSection.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, a, div')

    // Add transition to text elements
    textElements.forEach((el) => {
      if (el instanceof HTMLElement) {
        el.style.transition = 'color 0.2s ease'
        el.style.color = '#191717ff' // Initial color
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
          // Get the current position of the dark background
          const bgRect = animatedBg.getBoundingClientRect()
          const bgLeftEdge = bgRect.left

          // Check each text element against the background position
          textElements.forEach((el) => {
            if (el instanceof HTMLElement) {
              const elementRect = el.getBoundingClientRect()
              const elementCenter = elementRect.left + elementRect.width / 2

              // If background has passed over this element
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
}

export const PreloaderAnimation = () => {
  gsap.registerPlugin(ScrollTrigger)

  /* -------------------------------------------
    preloader
    ------------------------------------------- */

  var timeline = gsap.timeline()

  timeline
    .to('.mil-preloader-animation', {
      opacity: 1,
      ease: 'sine',
    })
    .fromTo(
      '.mil-animation-1 p',
      {
        y: '30px',
        opacity: 0,
        scale: 0.8,
        ease: 'sine',
      },
      {
        y: '0px',
        opacity: 1,
        scale: 1,
        stagger: 0.3,
        webkitFilter: 'blur(0px)',
      },
    )
    .to(
      '.mil-animation-1 p',
      {
        opacity: 0,
        y: '-30',
      },
      '+=0.3',
    )
    .fromTo(
      '.mil-reveal-box',
      0.1,
      {
        x: 0,
      },
      {
        x: '-30',
      },
    )
    .to(
      '.mil-reveal-box',
      0.45,
      {
        width: '100%',
        x: 0,
      },
      '+=0.1',
    )
    .to('.mil-reveal-box', {
      right: '0',
    })
    .to('.mil-reveal-box', 0.3, {
      width: '0%',
    })
    .fromTo(
      '.mil-animation-2 p',
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
      '-=0.5',
    )
    .to(
      '.mil-animation-2 p',
      0.6,
      {
        opacity: 0,
        y: '-30',
      },
      '+=0.5',
    )
    .to(
      '.mil-preloader',
      0.8,
      {
        opacity: 0,
        ease: 'sine',
      },
      '+=0.2',
    )
    .add(() => {
      ScrollTrigger.refresh()
    }, '-=1')
    .add(() => {
      let preloaderElem = document.querySelector('.mil-preloader')
      if (preloaderElem !== null) {
        preloaderElem.classList.add('mil-hidden')
      }
    })
}
