import { TfiLinkedin } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";

function Media({ classNameUl, size, classNameLi }) {
  return (
    <ul className={classNameUl}>
      <li className={classNameLi}>
        <a href="">
          <TfiLinkedin size={size} />
        </a>
      </li>
      <li className={classNameLi}>
        <a href="">
          <FaGithub size={size} />
        </a>
      </li>
      <li className={classNameLi}>
        <a href="">
          <AiFillInstagram size={size} />
        </a>
      </li>
      <li className={classNameLi}>
        <a href="">
          <BiLogoGmail size={size} />
        </a>
      </li>
    </ul>
  );
}

export default Media;
