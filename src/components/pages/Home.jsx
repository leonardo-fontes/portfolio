import Media from "../layout/Media";
import Button from "../layout/Button";
import About from "../Partials/About";
import Contact from "../Partials/Contact";
import Projects from "../Partials/Projects";
import Container from "../layout/Container";

function Home() {
  return (
    <>
    <Container classname={`bg-[#4a5065] min-h-[90vh]`}>
    <img
        className="object-contain absolute top-48 right-0 z-[-10] opacity-30 "
        src="fundo6.png"
        alt=""
      />
      {/* verificar comportamento da imagem quando novos componentes forem criados */}

      <div className=" w-full flex flex-col text-white gap-20 items-center text-center justify-center">
        <h1 className="text-6xl font-bold">OI, EU SOU O LEONARDO</h1>
        <p className="font-normal text-white text-2xl w-1/2">
          A Frontend focused Web Developer building the Frontend of Websites and
          Web Applications that leads to the success of the overall product
        </p>
        <Button text={"PROJETOS"} classname={"w-64 p-4 bg-[#2a3044]"} />
      </div>
      <div className="flex bg-white absolute top-[18rem] left-0">
        <Media
          size={30}
          classNameUl={"flex flex-col gap-3 w-16 items-center py-2 "}
          classNameLi={
            "p-3 hover:bg-[#3a4055] rounded-md transition duration-300"
          }
        />
      </div>
      <div className="flex justify-center absolute bottom-10 right-[50%] left-[50%] border-white border-solid border-[1px] h-8 w-5 rounded-xl">
        <p className="font-bold text-lg text-white animate-bounce">.</p>
      </div>
    </Container>
      

      <Container classname={`bg-[#5a5f76]`}>
        <About/>
      </Container>
      <Container classname={`bg-[#4a5065]`}>
        <Projects/>
      </Container>
      <Container classname={`bg-[#5a5f76]`}>
        <Contact/>
      </Container>
    </>
  );
}

export default Home;
