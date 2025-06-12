function createGrid(size) {
  const content = document.querySelector('.content');
  content.innerHTML = '';
  const squareSize = 800 / size;
  console.log(squareSize)

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    content.appendChild(square);
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
  }
  const squares = document.querySelectorAll('.square')
  squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
      console.log('yes')
      square.classList.add('square-hover')
    })
  })
  const resetBtn = document.querySelector('.reset-btn')
  console.log(resetBtn)
  resetBtn.addEventListener('click', () => {
    console.log('reset')
    squares.forEach((square) => {
      square.classList.remove('square-hover')
    })
  })
}
createGrid(16)






let size;


const sizeBtn = document.querySelector('.size-btn')

sizeBtn.addEventListener('click', () => {
  size = prompt('Enter the grid size (16-100)');
  if (size < 16 || size > 100) {
    alert('Please enter size from 16 to 100')
  } else {
    createGrid(size)
  }
})

