import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      {/* deixar barra fixa */}
      <div className="flex w-full justify-between px-16 items-center text-[white] py-8 bg-[#2a3044] ">
        <div className="flex gap-4">
          <img src="vite.svg" alt="" />
          <h3 className="font-bold text-[1.115rem]">LEONARDO FONTES</h3>
        </div>
        <div className="flex ">
          <ul className="flex gap-12 font-bold text-base">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/#about">SOBRE MIM</Link>
            </li>
            <li>
              <Link to="#projects">PROJETOS</Link>
            </li>
            <li>
              <Link to="#contact">CONTATO</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
