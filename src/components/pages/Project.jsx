import Button from "../layout/Button";
import Container from "../layout/Container";
import Tag from "../layout/Tag";
import Navbar from "../layout/Navbar";
import { Link } from "react-router-dom";
import WhatsMe from "../layout/WhatsMe";
import Footer from "../layout/Footer";

function Project({
  title,
  description,
  projectDescription,
  tags,
  link,
  image,
}) {
  return (
    <>
      <Navbar />
      <WhatsMe/>
      <Container classname={`bg-[#8c8c8c] min-h-[90vh]`}>
        <div className="flex flex-col w-full">
          <Container classname={"bg-[#696969]"} size={"min-h-[70vh]"}>
            <div className="flex flex-col justify-center items-center text-center mx-auto container text-white gap-12">
              <h1 className="text-5xl font-bold tracking-widest">{title}</h1>
              <p className="text-2xl w-3/5">{description}</p>
              <Link target="_blank" to={link}>
                <Button
                  text={"VER PROJETO NO GITHUB"}
                  classname={"w-80 p-5 bg-[#232323]"}
                />
              </Link>
            </div>
          </Container>
          <Container classname={"min-h-[70vh]"}>
            <div className="flex flex-col mx-auto container items-center justify-center my-20 text-white ">
              <img
                className="mb-8 shadow-2xl rounded-3xl object-contain w-[90vw] md:w-[40vw]"
                src={`/${image}`}
                alt=""
              />
              <div className="flex flex-col md:mx-96 mx-12 gap-8 ">
                <h3 className="font-semibold text-3xl">Descrição do projeto</h3>
                <div className="flex flex-col">
                  <p className="leading-loose md:text-lg">{projectDescription}</p>
                </div>

                <p className="text-lg">
                  Você pode visitar o código do projeto através do Link
                </p>

                <h3 className="font-semibold text-3xl mt-6">
                  Tecnologias utilizadas
                </h3>
                <div className="flex flex-wrap gap-4">
                  {tags?.map((tag) => (
                    <Tag text={tag} />
                  ))}
                </div>

                <h3 className="font-semibold text-3xl mt-6">Ver projeto</h3>
                <div className="flex gap-6">
                  <Link target="_blank" to={link}>
                    <Button
                      classname={"md:w-64 w-48 p-3 relative bg-[#232323]"}
                      text={`GITHUB`}
                    />
                  </Link>

                  <Link to="/">
                    <Button
                      classname={
                        "md:w-48 w-32 p-3 text-[#232323] border-solid border-2 border-[#232323]"
                      }
                      text={"VOLTAR"}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Project;
