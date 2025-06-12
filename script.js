function createGrid() {
  for (let i = 0; i < 16 * 16; i++) {
    const content = document.querySelector('.content')
    const square = document.createElement('div')
    square.classList.add('square')
    content.appendChild(square)

  }
}
createGrid()



const squares = document.querySelectorAll('.square')
squares.forEach((square) => {
  square.addEventListener('mouseover', () => {
    square.classList.add('square-hover')
  })
})