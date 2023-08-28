import { Link } from "react-router-dom";
import { Link as Ancora } from "react-scroll";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Navbar() {
  const currentPath = window.location.pathname;

  return (
    <>
      <div
        className={`flex w-full fixed top-0 z-10 md:justify-between justify-center px-4 lg:px-16 items-center shadow-xl text-[white] py-6 bg-[#8c8c8c]`}
      >
        <Link reloadDocument to="/">
          <div className={`gap-4 relative items-center flex`}>
            <img
              className="w-12 object-cover object-center aspect-square rounded-full"
              src="/linkedin.jpg"
              alt=""
            />
            <h3 className="font-bold lg:text-[1.115rem] hover:text-[#232323] duration-300 ease-out">
              LEONARDO FONTES
            </h3>
          </div>
        </Link>
        <div className={`md:flex hidden`}>
          {currentPath === "/" ? (
            <ul className="flex gap-12 font-bold text-base">
              <li className="hover:text-[#232323] duration-300 ease-out cursor-pointer">
                <Link reloadDocument to="/">
                  HOME
                </Link>
              </li>
              <li className="hover:text-[#232323] duration-300 ease-out cursor-pointer">
                <Ancora smooth={true} duration={1300} to="about">
                  SOBRE MIM
                </Ancora>
              </li>
              <li className="hover:text-[#232323] duration-300 ease-out cursor-pointer">
                <Ancora smooth={true} duration={1300} to="projects">
                  PROJETOS
                </Ancora>
              </li>
              <li className="hover:text-[#232323] duration-300 ease-out cursor-pointer">
                <Ancora smooth={true} duration={1300} to="contact">
                  CONTATO
                </Ancora>
              </li>
              {/* quando estou em outra page o link nao vem com ancora */}
            </ul>
          ) : (
            <ul className="flex gap-12 font-bold text-base">
              <Link to="/">
                <li className="hover:text-[#232323] duration-300 ease-out cursor-pointer">
                  HOME
                </li>
              </Link>
              <li className="hover:text-[#232323] duration-300 ease-out cursor-pointer">
                <Link to="/">
                  <li className="hover:text-[#232323] duration-300 ease-out cursor-pointer">
                    SOBRE MIM
                  </li>
                </Link>
              </li>
              <li className="hover:text-[#232323] duration-300 ease-out cursor-pointer">
                <Link to="/">
                  <li className="hover:text-[#232323] duration-300 ease-out cursor-pointer">
                    PROJETOS
                  </li>
                </Link>
              </li>
              <li className="hover:text-[#232323] duration-300 ease-out cursor-pointer">
                <Link to="/">
                  <li className="hover:text-[#232323] duration-300 ease-out cursor-pointer">
                    CONTATO
                  </li>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
