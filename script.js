const navLinks = document.querySelectorAll
(".nav-menu .nav-link");
const menuOpenButton = document.querySelector
("#menu-open-button");
const menuCloseButton = document.querySelector

("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    // toggle mobile menu 
    document.body.classList.toggle
    ("show-mobile-menu");
});

// Close menu when close button is clicked
 menuCloseButton.addEventListener
 ("click", () => 
    menuOpenButton.click ());

//  Close menu when  nav links is clicked
 navLinks.foreach(link => {
    link.addEventListener("click", () =>  menuOpenButton.click);
 });

// Initializes Swiper
 const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBllets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },

        768: {
            slidesPerView: 2
        },

        1024: {
            slidesPerView: 3
        },
    }
  });