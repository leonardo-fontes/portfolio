import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Container from "./components/layout/Container";
import Home from "./components/pages/Home";
import About from "./components/Partials/About";
import Projects from "./components/Partials/Projects";
import Contact from "./components/Partials/Contact";
import Project from "./components/pages/Project";

const projetos = [
  {
    title: "CROWN TEMPLATE",
    description:
      "This page contains the case study of Crown Website Template which includes the Project Overview, Tools Used and Live Links to the official product.",
    projectDescription:
      "Crown is a web template that I created targeting the restaurant and food industry for people to use for their own restaurant business and build trust and engagement with their customers by providing them with a better User Interface on the Web.By taking User Interface ideas by visiting different types of websites of the same industry and even visited platforms like dribble to get inspiration for building a good User Interface that will bring great results. Feel free to check out the Project by visiting the Live Link.",
    tags: ["HTML", "CSS", "JAVASCRIPT", "TAILWIND"],
    id: 1,
  },
];

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="/project"
          element={
            <Project
              title={projetos[0].title}
              description={projetos[0].description}
              projectDescription={projetos[0].projectDescription}
              tags={projetos[0].tags}
            />
          }
        />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
