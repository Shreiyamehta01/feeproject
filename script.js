const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}


if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}
document.getElementById('checkout').addEventListener("click", function(){ alert("Your are redirecting to new page......"); });
document.getElementById('checkout').addEventListener("click", redirect);
function redirect(){ window.location = "./GreenTick.html"; }


