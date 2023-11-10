import { BsFillTelephoneFill } from 'react-icons/bs';
// import { MdLocationPin } from 'react-icons/md';
// import { AiOutlineMail } from 'react-icons/ai';

import { H1, P, A } from './Hero.styled';

const Hero = () => {
  return (
    <>
      <H1>Car rental worldwide</H1>
      <P>
        <i>
          - Are you looking for the best prices, a wide selection of cars and
          quality service?
        </i>
      </P>
      <P>
        <i> - Or do you urgently need a reliable car? </i>
      </P>
      <P>
        <b>You've come to the right place.</b>{' '}
      </P>
      <A
        href="tel:+380730000000"
        style={{
          display: 'flex',
          gap: '16px',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <BsFillTelephoneFill style={{ fontSize: '24px' }} />
        <P>Book your car now</P>
      </A>
    </>
  );
};

export default Hero;
