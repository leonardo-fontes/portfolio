import Button from "../layout/Button";
import Container from "../layout/Container";
import Tag from "../layout/Tag";

function Project({ title, description, projectDescription, tags }) {
  return (
    <>
      <Container classname={`bg-[#4a5065] min-h-[90vh]`}>
        <div className="flex flex-col w-full">
          <Container classname={"bg-[#6a6f86]"} size={"min-h-[70vh]"}>
            <div className="flex flex-col justify-center items-center text-center mx-auto container text-white gap-12">
              <h1 className="text-5xl font-bold tracking-widest">{title}</h1>
              <p className="text-2xl w-3/5">{description}</p>
              <Button
                text={"PROJECT LINK"}
                classname={"w-80 p-5 bg-[#2a3044]"}
              />
            </div>
          </Container>
          <Container classname={"min-h-[70vh]"}>
            <div className="flex flex-col mx-auto container items-center justify-center my-20 text-white ">
              <img src="fundo6.png" alt="" />
              <div className="flex flex-col mx-96 gap-8 ">
                <h3 className="font-semibold text-3xl">Project Overview</h3>
                <div className="flex flex-col gap-8">
                  <p className="leading-loose text-lg">{projectDescription}</p>
                </div>

                <p className="text-lg">
                  Feel free to check out the Project by visiting the Project
                  Link.
                </p>

                <h3 className="font-semibold text-3xl mt-6">Tool used</h3>
                <div className="flex flex-wrap gap-4">
                  {tags?.map((tag) => (
                    <Tag text={tag} />
                  ))}
                </div>

                <h3 className="font-semibold text-3xl mt-6">See Live</h3>
                <div className="flex gap-6">
                  <Button
                    classname={"w-64 p-3 bg-[#2a3044]"}
                    text={"PROJECT LINK"}
                  />
                  <Button
                    classname={
                      "w-48 p-3 text-[#2a3044] border-solid border-2 border-[#2a3044]"
                    }
                    text={"VOLTAR"}
                  />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </Container>
    </>
  );
}

export default Project;
