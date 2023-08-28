import ProjectCard from "../Projects/ProjectCard";

function Projects() {
  return (
    <>
      <div
        
        className="flex flex-col container mx-auto my-32 text-white"
      >
        <header className="flex flex-col justify-center text-center items-center gap-8">
          <h2 className="font-bold text-4xl tracking-widest">PROJETOS</h2>
          <span className="w-10 border-[3px] border-solid rounded-lg border-[#232323]"></span>
          <p className="text-xl md:w-3/5 w-4/5">
            Aqui você pode encontrar mais informações sobre meus projetos, como identificar sua funcionalidade e tecnologias utilizadas.
          </p>
        </header>
        <div className="flex flex-col justify-center items-center lg:text-start text-center lg:gap-12 gap-40 mt-10 lg:mt-40">
          <ProjectCard
            title={"Costs"}
            description={`O "Costs" é um aplicativo de gerenciamento de custos projetado para facilitar o acompanhamento das despesas em diversos projetos. Desenvolvido com tecnologias modernas como React, JavaScript e Tailwind CSS, o CostTrack oferece uma abordagem simplificada para gerenciar suas finanças pessoais.
              Com o Costs, você pode criar, editar e excluir projetos, cada um representando uma área específica de despesas.`}
              image={"/costs.png"}
              link="http://localhost:5173/project/1"
          />
          <ProjectCard
            title={"Notes"}
            description={
              `O projeto "Notes" é um aplicativo de bloco de notas desenvolvido com foco na simplicidade e segurança das anotações pessoais. Ele foi construído usando tecnologias modernas como React, TypeScript e Tailwind CSS.`
            }
            image={"/notes.png"}
            link="http://localhost:5173/project/2"
          />
        </div>
      </div>
    </>
  );
}

export default Projects;
