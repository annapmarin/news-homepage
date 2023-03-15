const menuIcon = document.getElementById('menu-icon');
const menuIconClose = document.getElementById('menu-icon-close');
const menu = document.getElementById('menu-list');
const blackCover = document.getElementById('black-cover');

menuIcon.addEventListener('click', () => {
  menuIcon.style.display = 'none';
  menuIconClose.style.display = 'block';
  menu.style.transform = 'translateX(0)';
  window.addEventListener('scroll', disableScroll);
  blackCover.style.display = 'block';
})

menuIconClose.addEventListener('click', () => {
  menuIcon.style.display = 'block';
  menuIconClose.style.display = 'none';
  menu.style.transform = 'translateX(100%)';
  window.removeEventListener('scroll', disableScroll);
  blackCover.style.display = 'none';
})

const disableScroll = () => {
  window.scrollTo(0, 0);
}