import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// init Swiper:
// const swiper = new Swiper('.swiper', {
//   // configure Swiper to use modules
//   modules: [Navigation, Pagination],
//   ...


// });


var mySwiper = new Swiper('.swiper-container', {
  // Параметры слайдера
  slidesPerView: 1, // Количество видимых слайдов
  spaceBetween: 10, // Расстояние между слайдами
  loop: true, // Бесконечная прокрутка
  navigation: {
    nextEl: '.swiper-button-next', // Кнопка "Следующий слайд"
    prevEl: '.swiper-button-prev', // Кнопка "Предыдущий слайд"
  },
});

export default mySwiper;