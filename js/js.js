var rellax = new Rellax ('.rellax')

const heroImg = document.getElementById('heroImg')
const heroTitle = document.getElementById('heroTitle')

const mql = matchMedia ('(max-width: 650px)')

const applyMatchMedia = mql =>{
    mql.matches ?  (
        heroTitle.setAttribute("data-rellax-speed","0"),
        heroImg.setAttribute("data-rellax-speed","0")
    ) : (
        heroTitle.setAttribute("data-rellax-speed","-3"),
        heroImg.setAttribute("data-rellax-speed","-10")
    );
}

addEventListener('resize', ()=> applyMatchMedia(mql))
addEventListener('DOMContentLoaded', ()=> applyMatchMedia(mql))


const form = document.getElementById('form');
const nameForm = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('message');

form.addEventListener ('submit', e=>{
    if (nameForm.value.length < 1) {
        nameForm.style.backgroundColor="var(--color-2)";
        e.preventDefault();
    }
    else{
        nameForm.style.backgroundColor= "var(--color-5)";
    }
    if (email.value.length < 1) {
        email.style.backgroundColor="var(--color-2)";
        e.preventDefault();
    }
    else{
        email.style.backgroundColor= "var(--color-5)";
    }
    if (phone.value.length < 1) {
        phone.style.backgroundColor="var(--color-2)";
        e.preventDefault();
    }
    else{
        phone.style.backgroundColor= "var(--color-5)";
    }
    if (message.value.length < 1) {
        message.style.backgroundColor="var(--color-2)";
        e.preventDefault();
    }
    else{
        message.style.backgroundColor= "var(--color-5)";
    } 
})

const menu = document.getElementById('menu')
const navLogo = document.getElementById('navLogo')
menu.addEventListener('click', ()=>{
    menu.classList.toggle('menu--show')
    navLogo.classList.toggle('nav__logo--show')
    console.log("hola")
})