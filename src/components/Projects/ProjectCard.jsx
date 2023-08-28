import Button from "../layout/Button";

function ProjectCard({ title, description, image, link }) {
  return (
    <>
      <div className="flex lg:flex-row flex-col items-center lg:gap-20 gap-4 justify-center">
        <img
          className="mb-8 shadow-2xl rounded-3xl object-cover max-w-[75vw] h-80 md:max-w-screen-sm md:h-96"
          src={image}
          alt=""
        />

        <div className="flex md:gap-10 gap-4 flex-col justify-center lg:items-start items-center">
          <h4 className="font-bold text-2xl">{title}</h4>
          <p className="md:w-3/4 w-4/5 ">{description}</p>
          <a target="_blank" href={link}>
            <Button text={"VER PROJETO"} classname={"w-48 text-white p-3 bg-[#388ad6]"} />
          </a>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
