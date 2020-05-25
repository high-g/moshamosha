import {gsap} from 'gsap'

const cursorOuter = document.querySelector('.cursor--large')
const cursorInner = document.querySelector('.cursor--small')

const mouse = {
  x: -100,
  y: -100
}

let cursorOuterOriginalState = {
  width: cursorOuter.getBoundingClientRect().width,
  height: cursorOuter.getBoundingClientRect().height
}

const init = () => {
  document.body.addEventListener('pointermove', updateCursorPosition)
  updateCursor()
}

const updateCursorPosition = (e) => {
  mouse.x = e.pageX
  mouse.y = e.pageY
}

const updateCursor = (params) => {
  gsap.set(cursorInner, {
    x: mouse.x,
    y: mouse.y
  })

  gsap.to(cursorOuter, {
    duration: 0.15,
    x: mouse.x,
    y: mouse.y
  })

  requestAnimationFrame(updateCursor)
}

init()