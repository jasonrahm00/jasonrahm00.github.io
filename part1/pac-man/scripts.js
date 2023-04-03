var pos = 0
var started = false
const pacArray = [
  ['PacMan1.png', 'PacMan2.png'],
  ['PacMan3.png', 'PacMan4.png'],
]
var direction = 0
var focus = 0
var img = document.getElementById('PacMan')

function Run() {
  if (!started) return
  let imgWidth = img.width
  focus = (focus + 1) % 2
  direction = checkPageBounds(direction, imgWidth)
  img.src = './images/' + pacArray[direction][focus]
  if (direction) {
    pos -= 20
    img.style.left = pos + 'px'
  } else {
    pos += 20
    img.style.left = pos + 'px'
  }
  // Use setTimeout to call Run every 200 millesecs
  setTimeout(Run, 200)
}

function Start() {
  if (!started) {
    started = true
    Run()
  }
}

function Stop() {
  started = false
}

function Reset() {
  started = false
  pos = 0
  img.style.left = pos + 'px'
  img.src = './images/' + pacArray[0][0]
}

function checkPageBounds(direction, imgWidth) {
  //
  // Complete this to reverse direction on hitting page bounds
  //
  if (direction === 0 && pos + imgWidth > window.innerWidth) direction = 1
  if (direction === 1 && pos < 0) direction = 0
  return direction
}
