const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const navbar = document.querySelector('nav');

window.onscroll = function(){
    if(window.pageYOffset > 0){
        navbar.classList.add('scrolled');
    }else{
        navbar.classList.remove('scrolled');
    }
}

hamburger.addEventListener('click', function (){
    hamburger.classList.toggle("show");
    menu.classList.toggle('show');
});