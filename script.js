let menus = document.querySelector("nav");
let menuBtn=document.querySelector(".menu-btn");
let CloseBtn=document.querySelector(".close-btn");

menuBtn.addEventListener("click",function(){
menus.classList.add("active");

})

CloseBtn.addEventListener("click",function(){
	menus.classList.remove("active");
})


const header=document.querySelector("header")
window.addEventListener("scroll",function(){
if(this.document.documentElement.scrollTop>20){
	header.classList.add("sticky");
}
else{
	header.classList.remove("sticky")
}

})


// changing texts starts
let changetxt=document.querySelector(".changetxt");
let positions=["Developer","Marketer", "Designer"];

let arrayIndex=1;

function Changingtxt(){
  if (arrayIndex < positions.length){
  	changetxt.innerHTML=positions[arrayIndex];
  	arrayIndex=arrayIndex+1;
  }
  else{
  	arrayIndex=0;
  	changetxt.innerHTML=positions[arrayIndex];
  	arrayIndex=arrayIndex+1;
  }
} 
Changingtxt();
setInterval(Changingtxt,5000);

// changing texts ends







// Swiper Slides
var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 25,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

//swiper slide auto from Swiper.js
 var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints :{

      }
    });