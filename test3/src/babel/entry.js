const navBtn = document.getElementById('header-navBtn');
const header = document.getElementById('header');

navBtn.addEventListener('click', (event) => {
  header.classList.toggle('open');
});