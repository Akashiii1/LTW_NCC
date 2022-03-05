const header = document.querySelector('.header');
const back = document.querySelector('.backToTop');
back.addEventListener('click', function (e) {
    window.scrollTo({ top: 0 });
})
window.addEventListener('scroll', function (e) {
    
        const scrollY = this.window.pageYOffset;
    const headerH = header.offsetHeight;
    if (scrollY > headerH) {
        back.classList.add('sup');
    }
    else {
        back.classList.remove('sup');

    }
    
})
const menuMb = document.querySelector('.menu-mb');
const menuLMb = document.querySelector('.menu-mb .lmb');

const ham = document.querySelector('.ham');
ham.addEventListener('click', function (e) {
    e.target.classList.toggle('active-ham');
    menuMb.classList.add('active');
    menuLMb.classList.add('active');
})
//document.body.addEventListener("click", function (e) {
//    if (e.target.matches('.menu-mb'){
//        e.target.classList.remove('active');
        
//    }
//})