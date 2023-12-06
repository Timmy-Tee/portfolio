let header = document.querySelector("nav")

window.addEventListener("scroll", ()=>{
    header.classList.toggle("sticky", window.scrollY > 30)
    
})

let icon = document.querySelector('#openIcon')
let navBar = document.querySelector('#sideNav');
let a = 0;

icon.addEventListener('click', ()=>{
    a++
    if((a % 2) == 1){
        navBar.style.display = "grid";
    }
    else if((a % 2) == 0){
        navBar.style.display = "none";
    }
    
})

setTimeout(()=>{
    $('.preloader').fadeToggle();
}, 400)


// document.addEventListener("contextmenu", (event) => {
//     event.preventDefault();
//  });
let show = document.querySelector("#slide");

window.addEventListener("scroll", ()=>{
    if(window.scrollY > 80){
        show.style.display = 'flex'
    }
    else{
        show.style.display = 'none'
    }
    
})
