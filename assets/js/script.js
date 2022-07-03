// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
}
// nav hide 
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})
// outside
window.onclick = function(event) {
    if (!event.target.matches('.collapse')) {
      
        var dropdowns = 
        document.getElementsByClassName("collapse");
          
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
  }
var swiper = new Swiper(".mySwiperslider", {
    slidesPerView: 5,
    spaceBetween:30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
           pagination: {
             el: ".swiper-pagination",
             dynamicBullets: true,
             clickable: true,
           },
           breakpoints: {
            280: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            320: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
          425: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          },
         });