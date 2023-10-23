import {
  P,
  // B,
  H3,
  Ol,
} from './AboutUs.styled';

const AboutUs = () => {
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
              <b>KCN</b> began its history in such and such years. Since then, we have
              been dedicated to serving our customers and have become one of the
              leading car rental service providers in different regions. Over
              the years, we have built trusting relationships with our clients,
              which has become the basis of our success.
            </P>
          </div>
        </div>
          <H3>
            <b>Our Values</b>
          </H3>
          <P>
            Our company operates on the basis of clear values ​​that define our
            philosophy and our attitude towards clients:
          </P>
          <Ol>
            <li>
              <i><b>Quality and Reliability: </b></i>
              We offer only high quality vehicles, regularly undergoing
              maintenance and inspection. We pay special attention to your
              safety and comfort.
            </li>
            <li>
              <i><b> Simplicity and Convenience: </b></i>
              Our goal is to make renting a car as simple and convenient as
              possible for you. We provide transparent conditions and an easy
              booking process.
            </li>
            <li>
              <i><b> Customer Care: </b></i>
              We are always ready to support you and resolve any issues. Your
              needs are our priority.
            </li>
          </Ol>
          <H3>
            <b>Our Cars</b>
          </H3>
          <P>
            We are proud of our variety of vehicles, from small and economical
            models to premium luxury vehicles. You will always find the perfect
            solution for your trip with us.
          </P>
          <H3>
            <b>Our mission</b>
          </H3>
          <P>
            In <b>KCN</b>, Our mission is to provide customers with an unforgettable
            travel experience. We strive to make car rental simple, affordable
            and convenient for everyone. We want to be your reliable partner in
            the world of mobility. We are ready to share with you the joy of
            driving and traveling. Welcome to <b>KCN</b>, your partner in the world of
            mobility and freedom!
          </P>
          <P>Best regards, <b>KCN </b> team.</P>
        {/* </div> */}
      </section>
    </>
  );
};

export default AboutUs;
