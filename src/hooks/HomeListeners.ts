export default function listeners(): void {
  const imageCard: HTMLElement = document.querySelector('.imageCard')
  const leftSide: HTMLElement = document.querySelector('.leftSide')

  const mainTitle: HTMLElement = document.querySelector('.mainTitle')
  const firstGlass: HTMLElement = document.querySelector('.firstGlass')
  const secondGlass: HTMLElement = document.querySelector('.secondGlass')
  const thirdGlass: HTMLElement = document.querySelector('.thirdGlass')

  const glasses: HTMLElement = document.querySelector('.glasses')

  leftSide.addEventListener('mousemove', (e: Event) => {
    const xAxis = (window.innerWidth / 2.6 - e.pageX) / 40
    const yAxis = (window.innerHeight / 3 - e.pageY / 3) / 50

    imageCard.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
    glasses.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) translateZ(50px)`
  })

  leftSide.addEventListener('mouseover', () => {
    mainTitle.style.transform = 'translate3d(60%, -50%, 100px)'

    firstGlass.style.backdropFilter = 'none'
    secondGlass.style.backdropFilter = 'none'
    thirdGlass.style.backdropFilter = 'none'

    firstGlass.style.borderRadius = '2rem'
    secondGlass.style.borderRadius = '2rem'
    thirdGlass.style.borderRadius = '2rem'

    firstGlass.style.border = '1px solid transparent'
    secondGlass.style.border = '1px solid transparent'
    thirdGlass.style.border = '1px solid transparent'
  })

  leftSide.addEventListener('mouseleave', () => {
    imageCard.style.transform = 'rotateY(0deg) rotateX(0deg)'
    glasses.style.transform = 'rotateY(0deg) rotateX(0deg)'

    mainTitle.style.transform = 'translate3d(50%, -50%, 0px)'

    firstGlass.style.backdropFilter = 'blur(5px)'
    secondGlass.style.backdropFilter = 'blur(5px)'
    thirdGlass.style.backdropFilter = 'blur(5px)'

    firstGlass.style.borderRadius = '2rem 0rem 0rem 2rem'
    secondGlass.style.borderRadius = '0rem'
    thirdGlass.style.borderRadius = '0rem 2rem 2rem 0rem'

    firstGlass.style.border = 'none'
    secondGlass.style.border = 'none'
    thirdGlass.style.border = 'none'
  })
}
