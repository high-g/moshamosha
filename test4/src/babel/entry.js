const slider = document.querySelector('#slider');
const circle = document.querySelector('#circle');
const circleContent = document.querySelector('#circle-content');

circle.addEventListener('click', () => {
  slider.classList.toggle('off');
  circle.classList.toggle('off');
  circleContent.classList.toggle('off');
});

