// Selecting DOM
const menu_btn = document.querySelector('.menu-btn');
const menu_btn_inner = document.querySelector('.menu-btn-inner');
const menu = document.querySelector('.menu');
const menu_branding = document.querySelector('.menu-branding');
const menu_nav = document.querySelector('.menu-nav');
const nav_items  = document.querySelectorAll('.nav-item');
const nav_links  = document.querySelectorAll('.nav-link');


// Set initial State of menu

let showMenu = false;

menu_btn_inner.addEventListener('click', toggleMenu);

function toggleMenu(){
  if(!showMenu){
    menu_btn_inner.classList.add('close');
    menu_btn.classList.add('whitebg');
    menu.classList.add('show');
    menu_nav.classList.add('show');
    menu_branding.classList.add('show');
    nav_items.forEach(item => item.classList.add('show'));
    showMenu = true;
  }else{
    menu_btn_inner.classList.remove('close');
    menu_btn.classList.remove('whitebg');
    menu.classList.remove('show');
    menu_nav.classList.remove('show');
    menu_branding.classList.remove('show');
    nav_items.forEach(item => item.classList.remove('show'));
    showMenu = false;
  }
}

nav_links.forEach(item => item.addEventListener("click", toggleMenu));


// onscroll header background will change

$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $("header").addClass("active");

    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $("header").removeClass("active");


    }
});


//view ports scroll animation

$(document).ready(function() {
$('.post').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated fadeInUp',
    offset: 100
   });
});
