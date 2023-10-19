import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdLocationPin } from 'react-icons/md';
import { AiOutlineMail } from 'react-icons/ai';
import Swiper from 'swiper';
import 'swiper/css';
import {
  Ul,
  A,
  Aside,
  NavContainer,
  NavLinkStyle,
  Container,
  Div,
  H1,
  H2,
  P,
  Section,
  Img,
} from './HomePage.styled';

import Footer from '../../components/Footer/Footer';
import car1 from '../../assets/images/auto/car-rent-1.jpg';
import car2 from '../../assets/images/auto/car-rent-2.jpg';
import car3 from '../../assets/images/auto/car-rent-3.jpg';
import car4 from '../../assets/images/auto/car-rent-4.jpg';
import car5 from '../../assets/images/auto/car-rent-5.jpg';
// import cars from '../../assets/images/auto/cars-rent.jpg';
import MySwiper from "components/Swiper/Swiper"  

const HomePage = () => {
  // const swiper = new Swiper(...);
  // var mySwiper = new Swiper('.swiper-container', {
  //   // Параметры слайдера
  //   slidesPerView: 1, // Количество видимых слайдов
  //   spaceBetween: 10, // Расстояние между слайдами
  //   loop: true, // Бесконечная прокрутка
  //   navigation: {
  //     nextEl: '.swiper-button-next', // Кнопка "Следующий слайд"
  //     prevEl: '.swiper-button-prev', // Кнопка "Предыдущий слайд"
  //   },
  // });
  return (
    <>
      <Ul>
        <li>
          <A href="tel:+380730000000"> <BsFillTelephoneFill /> +380730000000</A>
        </li>
        <li>
          <span> <MdLocationPin /> c. ​​Beautiful, st. Uyutnaya 5, office 1 </span>
        </li>
        <li>
          <A href="mailto:kcn@gmail.com"> <AiOutlineMail /> kcn@ggmail.com</A>
        </li>
      </Ul>
      <MySwiper />
      {/* {mySwiper}
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">Слайд 1</div>
          <div class="swiper-slide">Слайд 2</div>
          <div class="swiper-slide">Слайд 3</div> */}
          {/* <!-- Добавьте дополнительные слайды по мере необходимости --> */}
        {/* </div>
      </div> */}
      <Container>
        <div style={{display: "flex"}}>
          <Div>
            <Section >
              <div>
                <H1>Car rental worldwide</H1>
                <P>Are you looking for the best prices, 
                  a wide selection of cars and quality service? 
                  Or do you urgently need a reliable car? 
                  You've come to the right place. 
                </P>
                <A href="tel:+380730000000">
                  <p><span> </span></p>
                  <P>Book your car now</P>
                </A>
              </div>
            </Section>

            <Section>
              <div>
                <H2 id="section1">About Us</H2>
                <P>
                  We are a leading car rental company providing high quality service
                  and a variety of cars at affordable prices.
                </P>
                <a href="#top">
                  <P>To learn more</P>
                </a>
              </div>
              {/* <div style={{textAlign: "center" }}>
                <img src={cars} alt="Car rent" style={{margin: "auto", width: "800px", heigth: "500px" }} />
              </div> */}
            </Section>
          </Div>
            <Aside>
              <NavContainer>
                <NavLinkStyle to="/" >
                    Home
                </NavLinkStyle>
                <ul style={{padding: "0 25px"}}>
                  <li><a href="#section1"> - About Us</a></li>
                  <li><a href="#section2"> - Our fleet</a></li>
                  <li><a href="#section3"> - Contact us</a></li>
                </ul>
                <NavLinkStyle to="/catalog">
                  Catalog
                </NavLinkStyle>
                <NavLinkStyle to="/favorites">Favorites</NavLinkStyle>
              </NavContainer>
            </Aside>
        </div>

        <Section>
          <h2 id="section2">Our fleet</h2>
          <div style={{ display: "flex" }}>
            <Img src={car1} alt="Car rent 1"></Img>
            <Img src={car2} alt="Car rent 2"></Img>
            <Img src={car3} alt="Car rent 3"></Img>
            <Img src={car4} alt="Car rent 4"></Img>
            <Img src={car5} alt="Car rent 5"></Img>
          </div>
        </Section>

        <Section>
          <H2 id="section3">Contact us</H2>
          <P>If you have questions or need help, сontact us.</P>
          {/* <a href="#" class="btn"> */}
            <P>Contact</P>
          {/* </a> */}
        </Section>
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
