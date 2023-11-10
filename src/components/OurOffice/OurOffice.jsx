// import { BsFillTelephoneFill } from 'react-icons/bs';
// import { MdLocationPin } from 'react-icons/md';
// import { AiOutlineMail } from 'react-icons/ai';
// import React from 'react';
// import { Provider } from 'react-redux';
// // import store from './redux/store';
// import { persistor } from './redux/store';
// import ContactForm from 'components/FeedbackForm/FeedbackForm';


// import { updateForm } from "redux/sliceForm";
// import { selectFeedbackForm } from "redux/selectors";




import { H2, P, A } from './OurOffice.styled';

const OurOffice = () => {
  return (
    <>
      <H2 id="section3">Contact us</H2>
      <P>If you have questions or need help, сontact us.</P>
      <P>You can contact us:</P>
      <P style={{ marginLeft: '24px' }}>
        <b> - by phone: </b>
        <A href="tel:+380730000000"> +380730000000 </A>
      </P>
      <P style={{ marginLeft: '24px' }}>
        <b> - by email: </b>
        <A href="mailto:kcn@gmail.com"> kcn@ggmail.com </A>
      </P>
      <P>
        <b>We are located at: </b>
        c. ​​Beautiful, st. Uyutnaya 5, office 1
      </P>
      {/* <form action="" method="post"></form> */}
      
      {/* <Provider store={persistor}>
        <div className="App">
          <h3>Write to us</h3>
          <ContactForm />
        </div>
      </Provider> */}
    </>
  );
};

export default OurOffice;
