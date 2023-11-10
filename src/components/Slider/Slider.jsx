import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import car1 from '../../assets/images/auto/car-rent-1.jpg';
import car2 from '../../assets/images/auto/car-rent-2.jpg';
import car3 from '../../assets/images/auto/car-rent-3.jpg';
import car4 from '../../assets/images/auto/car-rent-4.jpg';
import car5 from '../../assets/images/auto/car-rent-5.jpg';

class CarsSlider extends React.Component {
  // slides = [
  //   <img src={car1} alt="car 1" style={{width: "300px", height: "200px"}}/>,
  //   <img src={car2} alt="car 2" style={{width: "300px", height: "200px"}}/>,
  //   <img src={car3} alt="car 3" style={{width: "300px", height: "200px"}}/>,
  //   <img src={car4} alt="car 4" style={{width: "300px", height: "200px"}}/>,
  //   <img src={car5} alt="car 5" style={{width: "300px", height: "200px"}}/>
  // ]
  render() {
    const settings = {
      dots: true, // Показать точки (индикаторы)
      infinite: true, // Бесконечная прокрутка
      // speed: 500, // Скорость анимации
      slidesToShow: 4, // Количество отображаемых слайдов
      slidesToScroll: 1, // Количество слайдов, прокручиваемых за раз
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 0,
      cssEase: "linear"
    };

    return (
      <div style={{width: "1440px", height: "200px", margin: "0 auto", padding: "16px" }}>
        <Slider {...settings}>
          <div>
            <img src={car1} alt="car 1" style={{width: "300px", height: "200px"}}/>
          </div>
          <div>
            <img src={car2} alt="car 2" style={{width: "300px", height: "200px"}}/>
          </div>
          <div>
            <img src={car3} alt="car 3" style={{width: "300px", height: "200px"}}/>
          </div>
          <div>
            <img src={car4} alt="car 3" style={{width: "300px", height: "200px"}}/>
          </div>
          <div>
            <img src={car5} alt="car 3" style={{width: "300px", height: "200px"}}/>
          </div>        
        </Slider>
      </div>      
    );
  }
}

export default CarsSlider;