import { useState } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Container from "./components/layout/Container";
import Home from "./components/pages/Home";
import About from "./components/pages/About";

function App() {
  return (
    <>
      <Navbar />
      <Container children={<Home />} classname={""} />
      <Container children={<About />} classname={""} />
      <Footer />
    </>
  );
}

export default App;
