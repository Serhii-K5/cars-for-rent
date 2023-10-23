import {
  P,
  // B,
  H3,
} from '../AboutUs/AboutUs.styled';

const AboutUsLight = () => {
  return (
    <>
      <section style={{ padding: '0 16px' }}>
        <div style={{ display: 'flex' }}>
          <aside style={{ width: '100% ' }}>
            <img
              src="https://kartinkof.club/uploads/posts/2022-05/1653672300_2-kartinkof-club-p-veselii-gnom-kartinka-2.jpg"
              alt="Head of the enterprise"
              style={{ width: '220px' }}
            />
          </aside>
          <div>
            <H3>
              <b>Our Company: Your Partner in the World of Mobility</b>
            </H3>
            <P>
              In today's world of mobility and freedom of movement, car rental
              is becoming a key service for people who want to explore new
              places, take a long trip or simply enjoy the comfort of individual
              mobility. At <b>KCN</b>, we are proud to that we provide you with quality
              cars and impeccable service to make your trip unforgettable.
            </P>
            <H3>
              <b>Our history</b>
            </H3>
            <P>
              <b>KCN </b> began its history in such and such years. Since then, we have
              been dedicated to serving our customers and have become one of the
              leading car rental service providers in different regions. Over
              the years, we have built trusting relationships with our clients,
              which has become the basis of our success.
            </P>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsLight;
