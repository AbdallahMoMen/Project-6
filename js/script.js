var swiper = new Swiper(".home .container", {
  speed: 600,
  spaceBetween: 200,
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 4000,
  },
});

$(document).ready(function () {
  $(".like i").on("click", function () {
    $(this).toggleClass("fa-solid");
  });
});
