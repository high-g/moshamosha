const burgerMenu = document.getElementById('burgerMenu')
const menuGroup = document.getElementById('menuGroup')

burgerMenu.addEventListener('click', (e) => {
  const active = menuGroup.classList.contains('is-active')
  console.log(active)
  if(active) {
    menuGroup.classList.remove('is-active')
  } else {
    menuGroup.classList.add('is-active')
  }
})