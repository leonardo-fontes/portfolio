import Button from "../layout/Button";
import Tag from "../layout/Tag";
function About() {
  return (
    <>
      <div className="flex flex-col container mx-auto my-32 text-white">
        <header className="flex flex-col justify-center text-center items-center gap-8">
          <h2 className="font-bold text-4xl tracking-widest">SOBRE MIM</h2>
          <span className="w-10 border-[3px] border-solid rounded-lg border-[#2a3044]"></span>
          <p className="text-xl w-3/5">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
        </header>
        <div className="flex mt-32 px-32 gap-40">
          <div className="flex flex-col gap-10 w-1/2">
            <h4 className="font-bold text-3xl">Conheça-me melhor!</h4>
            <p className="text-lg leading-loose">
              I'm a Frontend Web Developer building the Front-end of Websites
              and Web Applications that leads to the success of the overall
              product. Check out some of my work in the Projects section. I also
              like sharing content related to the stuff that I have learned over
              the years in Web Development so it can help other people of the
              Dev Community. Feel free to Connect or Follow me on my{" "}
              <a className="font-bold" href="">
                Linkedin
              </a>{" "}
              where I post useful content related to Web Development and
              Programming I'm open to Job opportunities where I can contribute,
              learn and grow. If you have a good opportunity that matches my
              skills and experience then don't hesitate to contact me.
            </p>
            <Button text="CONTATO" classname={"w-48 p-4 bg-[#2a3044]"} />
          </div>
          <div className="flex flex-col gap-10 w-1/2">
            <h4 className="font-bold text-3xl">Minhas Habilidades</h4>
            <div className="flex gap-4 flex-wrap w-10/12">
              <Tag text={"HTML"} />
              <Tag text={"CSS"} />
              <Tag text={"JAVASCRIPT"} />
              <Tag text={"TYPESCRIPT"} />
              <Tag text={"REACT.JS"} />
              <Tag text={"TAILWINDCSS"} />
              <Tag text={"GIT"} />
              <Tag text={"GITHUB"} />
              <Tag text={"RESPONSIVE DESIGN"} />
              <Tag text={"SEO"} />
              <Tag text={".NET"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
