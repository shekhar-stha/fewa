const openNav = document.getElementById('open-nav');
const closeNav = document.getElementById('close-nav');
const nav = document.querySelector('nav');

openNav.addEventListener('click',()=>{
    nav.classList.toggle('open');
})

closeNav.addEventListener('click',()=>{
    nav.classList.remove('open');
})

function openPdf(){
    window.open('C:\Users\DeLL\Desktop\Portfolio\Shekhar (1).pdf');
}

const navClose =  document.getElementById('navClose').childNodes;

for(var i=0; i<navClose.length; i++){
    navClose.classList.remove('open');
}


AOS.init({
    offset: 400, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 2000, // values from 0 to 3000, with step 50ms
    easing: 'ease',
    once: true
  });