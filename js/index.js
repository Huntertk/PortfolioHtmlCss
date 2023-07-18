const navbar = document.querySelector('.navbar')
const navbtn = document.querySelector('.side-nav')
const navBtnOpen = document.querySelector('.navBtn-open')
const navBtnClose = document.querySelector('.navBtn-close')
const img = document.querySelector('.nav-logo')


navbtn.addEventListener('click', () => {
    if(navbar.classList.contains('close')){
        navBtnOpen.classList.add('close')
        navBtnClose.classList.remove('close')
    } else {
        navBtnOpen.classList.remove('close')
        navBtnClose.classList.add('close')
    }
    navbar.classList.toggle('close')
    img.classList.toggle('rotate-center')
    
})