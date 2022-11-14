let burger = document.querySelector('.burger')
let close = document.querySelector('.menu')
let nav = document.querySelector('.navbar')
let menu = document.querySelector('.menu-list')
burger.addEventListener('click', ()=>{
 nav.classList.toggle('hide');
 menu.classList.toggle('hide');
})