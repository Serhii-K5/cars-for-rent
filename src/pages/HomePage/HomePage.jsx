import {
  Container,
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
import cars from '../../assets/images/auto/cars-rent.jpg';

const HomePage = () => {
  return (
    <>
      <Container>
        <Section >
          <div>
            <H1>Car rental worldwide</H1>
            <P>Best prices and wide selection of cars</P>
            <a href="#" class="btn">
              Book now
            </a>
          </div>
        </Section>

        <Section>
          <div>
            <H2>About Us</H2>
            <P>
              We are a leading car rental company providing high quality service
              and a variety of cars at affordable prices.
            </P>
            <a href="#" class="btn">
              To learn more
            </a>
          </div>
          <div style={{textAlign: "center" }}>
            <img src={cars} alt="Car rent" style={{margin: "auto", width: "800px", heigth: "500px" }} />
          </div>
        </Section>

        <Section>
          <h2>Our fleet</h2>
          <div style={{ display: "flex" }}>
            <Img src={car1} alt="Car rent 1"></Img>
            <Img src={car2} alt="Car rent 2"></Img>
            <Img src={car3} alt="Car rent 3"></Img>
            <Img src={car4} alt="Car rent 4"></Img>
            <Img src={car5} alt="Car rent 5"></Img>
          </div>
        </Section>

        <Section>
          <H2>Contact us</H2>
          <P>If you have questions or need help, сontact us.</P>
          <a href="#" class="btn">
            Contact
          </a>
        </Section>
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
