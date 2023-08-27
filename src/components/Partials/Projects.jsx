import ProjectCard from "../Projects/ProjectCard";

function Projects() {
  return (
    <>
      <div className="flex flex-col container mx-auto my-32 text-white">
        <header className="flex flex-col justify-center text-center items-center gap-8">
          <h2 className="font-bold text-4xl tracking-widest">PROJETOS</h2>
          <span className="w-10 border-[3px] border-solid rounded-lg border-[#2a3044]"></span>
          <p className="text-xl w-3/5">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
        </header>
        <div className="flex flex-col mt-40">
          <ProjectCard
            title={"Dopefolio"}
            description={
              "Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally"
            }
          />
          <ProjectCard
            title={"Dopefolio"}
            description={
              "Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally"
            }
          />
          <ProjectCard
            title={"Dopefolio"}
            description={
              "Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally"
            }
          />
        </div>
      </div>
    </>
  );
}

export default Projects;
