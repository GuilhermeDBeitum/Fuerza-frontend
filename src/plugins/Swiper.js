// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

export default swiper;
