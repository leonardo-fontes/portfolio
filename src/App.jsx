import { useState } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Container from "./components/layout/Container";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import Project from "./components/pages/Project";

function App() {
  return (
    <>
      <Navbar />
      {/* <Container children={<Home />} size={"min-h-[90vh]"} classname={"bg-[#6a6f86]"} />
      <Container children={<About />} size={"min-h-[90vh]"} classname={"bg-[#4a5065]"} />
      <Container children={<Projects />} size={"min-h-[90vh]"} classname={"bg-[#6a6f86]"} />
      <Container children={<Contact />}  size={"min-h-[90vh]"} classname={"bg-[#4a5065]"} /> */}
      <Container
        children={
          <Project
            title="DOPEFOLIO"
            description="This page contains the case study of Dopefolio Open-Source Project
            which includes the Project Overview, Tools Used and Live Links to
            the official product."
            projectDescription="Dopefolio is an Open-Source project which is a simple and clean multi-page
            portfolio website template for developers. I created this project for
            developers to quickly build a good-looking and fast-performing multi-page
            portfolio without having to code their portfolio from scratch. Since the
            launch of this project, It has received more than 2k stars on Github and
            it has also got featured on hundreds of sites and CSS-tricks.com has also
            featured this template as the hottest frontend tool of 2021 in one of
            their articles which you can find here Dopefolio is now being used by
            thousands of developers globally and it has helped many people in landing
            jobs & opportunities which makes me happy that my creation is helping
            other people in building their careers. It has many other features like
            Dopefolio's repo contains a playground link which people can use to test
            the template with different theme colours to find their own preferred
            primary colour for the template."
            tags={["HTML", "CSS", "JAVASCRIPT", "BOMDIA"]}
          />
        }
        classname={"bg-[#4a5065]"}
      />
      <Footer />
    </>
  );
}

export default App;
