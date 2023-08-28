import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import Project from "./components/pages/Project";

const projects = [
  {
    id: 1,
    title: "Costs",
    description: "Gerenciador de custos - Acompanhamento de despesas",
    projectDescription: `O "Costs" é um aplicativo de gerenciamento de custos projetado para facilitar o acompanhamento das despesas em diversos projetos. Desenvolvido com tecnologias modernas como React, JavaScript e Tailwind CSS, o CostTrack oferece uma abordagem simplificada para gerenciar suas finanças pessoais.
      Com o Costs, você pode criar, editar e excluir projetos, cada um representando uma área específica de despesas. Dentro de cada projeto, é possível criar uma lista de tarefas relacionadas a gastos específicos, permitindo que você tenha uma visão detalhada de onde seus recursos estão sendo direcionados.
      Neste projeto simulo um banco de dados ao armazenar os projetos em formato JSON. Isso permite que os dados sejam acessados através de uma API, facilitando a integração e recuperação dos projetos e tarefas criados.`,
    tags: ["HTML", "CSS", "TAILWIND", "JAVASCRIPT", "REACT"],
    link: "https://github.com/leonardo-fontes/costs-project",
    image: "costs.png",
  },
  {
    id: 2,
    title: "Notes",
    description:
      "Bloco de notas. Neste projeto você pode criar, editar e excluir notas personalizadas.",
    projectDescription: `O projeto "Notes" é um aplicativo de bloco de notas desenvolvido com foco na simplicidade e segurança das anotações pessoais. Ele foi construído usando tecnologias modernas como React, TypeScript e Tailwind CSS. O aplicativo oferece a capacidade de criar, editar e excluir notas de forma básica. Para acessar o aplicativo, é necessário fazer login com um nome de usuário e senha. A interface do usuário foi projetada com a abordagem minimalista do Tailwind CSS, visando uma experiência simples e direta para os usuários. As notas são exibidas de forma organizada, permitindo que os usuários gerenciem suas informações de maneira simples. O aplicativo foi desenvolvido utilizando o framework React, que proporciona uma experiência de usuário dinâmica e responsiva. Além disso, a integração do TypeScript ajuda a identificar erros de código durante o desenvolvimento, tornando o aplicativo mais confiável. Em resumo, o "Notes" é um projeto de bloco de notas que prioriza a simplicidade e a segurança básica das anotações pessoais. Utilizando tecnologias como React, TypeScript e Tailwind CSS, ele oferece uma solução funcional para aqueles que procuram uma maneira simples de gerenciar suas notas de forma online.`,
    tags: ["HTML", "CSS", "TAILWIND", "TYPESCRIPT", "REACT"],
    link: "https://github.com/leonardo-fontes/notes-frontend",
    image: "notes.png",
  },
];

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {projects.map((project) => (
          <Route
            key={project.id}
            exact
            path={`/project/${project.id}`}
            element={
              <Project
                title={project.title}
                description={project.description}
                projectDescription={project.projectDescription}
                tags={project.tags}
                link={project.link}
                image={project.image}
              />
            }
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
