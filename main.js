const myAccount={
    name: 'Nguyễn Hương Ly',
    age: 20,
    password:'08092002',
}
const name = document.querySelector('.email');
const password = document.querySelector('.password');
const button = document.querySelector('.login');
const notify = document.querySelector('.notify');
const accuracy=()=>{
    if (name.value === myAccount.name && password.value === myAccount.password) {
        window.open('home.html', '_self');
    }
    else {
        notify.style.opacity = "1";
        notify.style.transform = "scale(1)";
        notify.style.transition = "all 0.7s";
    }
}
button.addEventListener('click', accuracy);

const notifyClose = document.querySelector('.close-notify');
notifyClose.addEventListener('click', () => {
     notify.style.transform = "scale(0.5)";
    notify.style.opacity = "0";
})