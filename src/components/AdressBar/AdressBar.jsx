import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdLocationPin } from 'react-icons/md';
import { AiOutlineMail } from 'react-icons/ai';

import {
  Ul,
  A,
} from './AdressBar.styled';

const AdressBar = () => {
  return (
    <Ul>
      <li>
        <b><A href="tel:+380730000000"> <BsFillTelephoneFill /> +380730000000</A></b>
      </li>
      <li>
        <b><span> <MdLocationPin /> c. ​​Beautiful, st. Uyutnaya 5, office 1 </span></b>
      </li>
      <li>
        <b><A href="mailto:kcn@gmail.com"> <AiOutlineMail /> kcn@ggmail.com</A></b>
      </li>
    </Ul>
  )
}

export default AdressBar;