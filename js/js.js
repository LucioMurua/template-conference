const mediumBp = matchMedia('(max-with: 650px)');
const changeSize = mql=>{
    mql.matches ? document.style.
}

mediumBp.addEventListener(changeSize);
changeSize(mediumBp);

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
