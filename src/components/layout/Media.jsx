import { TfiLinkedin } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import {RiWhatsappFill} from 'react-icons/ri'
import { Link } from "react-router-dom";

function Media({ classNameUl, size, classNameLi }) {
  return (
    <ul className={classNameUl}>
      <li className={classNameLi}>
        <Link target="blank" to="https://www.linkedin.com/in/leofonttes/">
          <TfiLinkedin size={size} />
        </Link>
      </li>
      <li className={classNameLi}>
        <Link target="blank" to="https://github.com/leonardo-fontes">
          <FaGithub size={size} />
        </Link>
      </li>
     
      <li className={classNameLi}>
        <Link to="mailto:leofonttes@gmail.com">
          <BiLogoGmail size={size} />
        </Link>
      </li>
      <li className={classNameLi}>
        <Link target="blank" to="https://wa.me/5511993472460">
          <RiWhatsappFill size={size} />
        </Link>
      </li>
    </ul>
  );
}

export default Media;
