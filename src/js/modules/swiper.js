import Swiper, { EffectCoverflow, Pagination, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/effect-fade'
import 'swiper/css/autoplay'

const swipers = {
  downloadImagesSwiper: () =>
    new Swiper('.download-images__swiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 4000
      },
      disableOnInteraction: false,
      effect: 'coverflow',
      direction: 'vertical',
      modules: [EffectCoverflow, Autoplay],
      coverflowEffect: {
        scale: 0.8,
        stretch: 160,
        depth: 50,
        rotate: 0,
        slideShadows: false,
        modifier: 1,
      },
      breakpoints: {
        992: {
          slidesPerView: 2,
          direction: 'horizontal',
        },
        1500: {
          slidesPerView: 2,
          direction: 'horizontal',
          coverflowEffect: {
            scale: 0.8,
            stretch: 260,
            depth: 50,
            rotate: 0,
            slideShadows: false,
            modifier: 1,
          },
        },
      },
    }),
  downloadItemsSwiper: () =>
    new Swiper('.download-items__swiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      modules: [Pagination],
      pagination: {
        el: '.download-items__swiper-pagination.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
      },
    }),
}

export default swipers
