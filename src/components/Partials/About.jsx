import { Link } from "react-scroll";
import Button from "../layout/Button";
import Tag from "../layout/Tag";
function About() {
  const tags = [
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "TYPESCRIPT",
    "REACT.JS",
    "TAILWINDCSS",
    "GIT",
    "GITHUB",
    "RESPONSIVE DESIGN",
    "SEO",
    ".NET",
  ];
  return (
    <>
      <div
        
        className="flex flex-col container mx-auto my-32 text-white"
      >
        <header className="flex flex-col justify-center text-center items-center gap-8">
          <h2 className="font-bold text-4xl tracking-widest">SOBRE MIM</h2>
          <span className="w-10 border-[3px] border-solid rounded-lg border-[#232323]"></span>
          <p className="text-xl w-3/5">
            Aqui você conhece um pouco mais sobre mim, o que eu faço, e quais
            são minhas maiores habilidades quando se trata de programação.
          </p>
        </header>
        <div className="flex lg:flex-row flex-col  mt-12 lg:mt-32 px-8 lg:px-32 gap-20 lg:gap-40">
          <div className="flex flex-col lg:items-start items-center  gap-10 lg:w-1/2">
            <h4 className="font-bold text-3xl">Conheça-me melhor!</h4>
            <p className="text-lg leading-loose">
              Meu nome é Leonardo (você pode me chamar de Leo), sou
              desenvolvedor front-end, estudo no IFSP - Instituto Federal de
              Ciência e Tecnologia de São Paulo e estou buscando uma
              oportunidade na área de desenvolvimento. Minha paixão por
              tecnologia me levou a trabalhar com desenvolvimento front-end.
              Minha especialização gira em torno das ferramentas essenciais do
              comércio: React, que me permite criar interfaces de usuário
              dinâmicas e interativas que deixam um impacto duradouro. Também
              sou versado no uso do Tailwind CSS para simplificar o estilo e dar
              vida aos meus designs de maneira integrada. Aproveitando
              TypeScript e JavaScript, crio código que não é apenas eficiente,
              mas também agradável de colaborar. Na área de controle de versão,
              aprimorei minhas habilidades em Git e GitHub, garantindo que meus
              projetos permaneçam organizados, colaborativos e em constante
              evolução. Você pode conferir meus projetos no GitHub: <br></br>
              <a
                className="underline"
                href="https://github.com/leonardo-fontes"
              >
                https://github.com/leonardo-fontes
              </a>{" "}
              <br />
            </p>
            <Link id="projects" smooth={true} duration={1300} to="contact">
              <Button  text="CONTATO" classname={"w-48 p-4 bg-[#232323]"} />
            </Link>
          </div>
          <div className="flex flex-col gap-10 lg:w-1/2">
            <h4 className="font-bold lg:text-start text-center text-3xl">Minhas Habilidades</h4>
            <div  className="flex gap-4 flex-wrap lg:w-10/12">
              {tags.map((tag) => (
                <Tag text={tag} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
