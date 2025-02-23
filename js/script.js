
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





//loadingbar

;(function(){
  function id(v){return document.getElementById(v); }
  function loadbar() {
    var ovrl = id("overlay"),
        prog = id("progress"),
        stat = id("progstat"),
        img = document.images,
        c = 0;
        tot = img.length;

    function imgLoaded(){
      c += 1;
      var perc = ((100/tot*c) << 0) +"%";
      prog.style.width = perc;
      stat.innerHTML = "Loading "+ perc;
      if(c===tot) return doneLoading();
    }
    function doneLoading(){
      ovrl.style.opacity = 0;
      setTimeout(function(){
        ovrl.style.display = "none";
      }, 1200);
    }
    for(var i=0; i<tot; i++) {
      var tImg     = new Image();
      tImg.onload  = imgLoaded;
      tImg.onerror = imgLoaded;
      tImg.src     = img[i].src;
    }
  }
  document.addEventListener('DOMContentLoaded', loadbar, false);
}());



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
