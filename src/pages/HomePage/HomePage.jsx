import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchAdverts } from "redux/operations";

import CarCard from "components/CarCard/CarCard";
import { selectAdverts } from "redux/selectors";

import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdLocationPin } from 'react-icons/md';
import { AiOutlineMail } from 'react-icons/ai';
import {
  Ul,
  A,
  Aside,
  Li,
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
import CarsSlider from "../../components/Slider/Slider";  

const HomePage = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  const [filteredData, setFilteredData] = useState(adverts);
  
  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  const handleFilter = filteredData => {
    setFilteredData(filteredData);
  };

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
      <CarsSlider />
      <Container>
        <div style={{display: "flex"}}>
          <Div>
            <Section >
              <div>
                <H1>Car rental worldwide</H1>
                <P> <i>-  Are you looking for the best prices, 
                  a wide selection of cars and quality service?  
                </i></P>
                <P><i> -  Or do you urgently need a reliable car? </i></P>
                <P> <b>You've come to the right place.</b> </P>
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
                  <Li><a href="#section1"> - About Us</a></Li>
                  <Li><a href="#section2"> - Our fleet</a></Li>
                  <Li><a href="#section3"> - Contact us</a></Li>
                </ul>
                <NavLinkStyle to="/catalog">
                  Catalog
                </NavLinkStyle>
                <NavLinkStyle to="/favorites">Favorites</NavLinkStyle>
              </NavContainer>
            </Aside>
        </div>

        <Section>
          <H2 id="section2">Our fleet</H2>
          {adverts.length > 0 && (
            <div style={{ display: "flex" }}>
              <Img src={car1} alt="Car rent 1"></Img>
              <Img src={car2} alt="Car rent 2"></Img>
              <Img src={car3} alt="Car rent 3"></Img>
              <Img src={car4} alt="Car rent 4"></Img>
              <Img src={car5} alt="Car rent 5"></Img>
            </div>
          )}          
          {filteredData.length === 0 && adverts.length > 0 && (
            <Ul>
              {adverts.map(item => (
                <li key={item.id}>
                  <CarCard card={item} />
                </li>
              ))}
              {adverts}
            </Ul>
          )}

          <p><NavLinkStyle to="/catalog"> See more... </NavLinkStyle></p>

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
