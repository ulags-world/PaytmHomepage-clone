const navBtn = document.querySelector('.hamburger');
const icon = document.querySelector('.icon-menu')
const menu = document.querySelector('.menu');
const head2 = document.querySelector('.head-2');
const head = document.querySelector('.head');
const belowhead = document.querySelector('below-head');
console.log(belowhead);
navBtn.addEventListener('click',()=>{
  head2.classList.toggle('active');
  head.classList.toggle('active');
  document.body.classList.toggle('scroll-lock');
  
  if(icon.classList.contains('bx-menu')) icon.classList.replace('bx-menu','bx-x');
  else icon.classList.replace('bx-x','bx-menu');
  menu.classList.toggle('toggle');
  
})
