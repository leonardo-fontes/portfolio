import Media from "../layout/Media";
import Button from "../layout/Button";
import About from "../Partials/About";
import Contact from "../Partials/Contact";
import Projects from "../Partials/Projects";
import Container from "../layout/Container";
import Navbar from "../layout/Navbar";
import WhatsMe from "../layout/WhatsMe";
import Footer from "../layout/Footer";
import { Link } from "react-scroll";

function Home() {
  return (
    <>
      <Navbar />
      <WhatsMe />
      <Container classname={`bg-[#696969] min-h-[90vh]`}>
        <img
          className="object-contain absolute top-48 right-0 z-[-10] opacity-30 "
          src="fundo6.png"
          alt=""
        />

        <div className="w-full flex flex-col text-white gap-20 items-center text-center justify-center">
          <h1 className="lg:text-6xl md:text-5xl text-4xl font-bold">OI, EU SOU O LEONARDO</h1>
          <p className="md:font-normal font-bold text-white md:text-2xl text-xl w-11/12 md:w-8/12 lg:w-1/2">
            Meu nome é Leonardo (você pode me chamar de Leo), sou desenvolvedor
            front-end, estudo no IFSP - Instituto Federal de Ciência e
            Tecnologia de São Paulo e estou buscando uma oportunidade na área de
            desenvolvimento.
          </p>
          <Link smooth={true} duration={1300} to="projects">
            <Button text={"PROJETOS"} classname={"w-64 p-4 bg-[#232323] "} />
          </Link>
        </div>
        <div className="md:flex hidden bg-white absolute top-[18rem] left-0">
          <Media
            size={30}
            classNameUl={"flex flex-col gap-3 w-16 items-center py-2 "}
            classNameLi={
              "p-3 hover:bg-[#696969] rounded-md transition duration-300"
            }
          />
        </div>
        <div id="about" className="flex justify-center absolute bottom-10 right-[50%] left-[50%] border-white border-solid border-[1px] h-8 w-5 rounded-xl">
          <p className="font-bold text-lg text-white animate-bounce">.</p>
        </div>
      </Container>

      <Container classname={`bg-[#8c8c8c]`}>
        <About />
      </Container>
      <Container classname={`bg-[#696969]`}>
        <Projects />
      </Container> 
      <Container classname={`bg-[#8c8c8c]`}>
        <Contact />
      </Container> 
      <Footer />
    </>
  );
}

export default Home;
