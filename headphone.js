let header = document.querySelector('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
const sr=ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
    //reset:true

})
sr.reveal('.home-text','.buds-text',{origin:'left'})
sr.reveal('.home-img',{origin:'right'})
sr.reveal('.heading',{delay:200})
sr.reveal('.specs-details .box',{origin:'left',interval:200})
sr.reveal('.specs-img',{delay:600})
sr.reveal('.shop-container .box',{interval:200})
sr.reveal('.shop-container .box,.footer .footer-box',{interval:150})