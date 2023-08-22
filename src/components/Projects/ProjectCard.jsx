import Button from "../layout/Button";

function ProjectCard({ title, description }) {
  return (
    <>
      <div className="flex items-center gap-20 justify-center">
        <img className="w-1/2" src="fundo6.png" alt="" />

        <div className="flex gap-10 flex-col justify-center ">
          <h4 className="font-bold text-2xl">{title}</h4>
          <p className="w-3/4 ">{description}</p>
          <Button text={"CASE STUDY"} classname={"w-48 p-3 bg-[#2a3044]"} />
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
