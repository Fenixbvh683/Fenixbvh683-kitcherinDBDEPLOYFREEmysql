var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 30,
    /*pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },*/
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    breakpoints: {
      
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });