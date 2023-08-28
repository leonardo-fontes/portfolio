import { TfiLinkedin } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import {RiWhatsappFill} from 'react-icons/ri'
import { Link } from "react-router-dom";

function Media({ classNameUl, size, classNameLi, color }) {
  return (
    <ul className={classNameUl}>
      <li className={classNameLi}>
        <Link target="blank" to="https://www.linkedin.com/in/leofonttes/">
          <TfiLinkedin color={color} size={size} />
        </Link>
      </li>
      <li className={classNameLi}>
        <Link target="blank" to="https://github.com/leonardo-fontes">
          <FaGithub color={color} size={size} />
        </Link>
      </li>
      <li className={classNameLi}>
        <Link to="mailto:leofonttes@gmail.com">
          <BiLogoGmail color={color}  size={size} />
        </Link>
      </li>
      <li className={classNameLi}>
        <Link target="blank" to="https://wa.me/5511993472460">
          <RiWhatsappFill color={color}  size={size} />
        </Link>
      </li>
    </ul>
  );
}

export default Media;
