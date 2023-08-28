import Button from "../layout/Button";
import Label from "../layout/Label";
import Media from "../layout/Media";

function Contact() {
  return (
    <div
      id="contact"
      className="flex flex-col container justify-center items-center mx-auto my-32 text-white"
    >
      <header className="flex flex-col justify-center text-center items-center gap-8">
        <h2 className="font-bold text-4xl tracking-widest">CONTATO</h2>
        <span className="w-10 border-[3px] border-solid rounded-lg border-[#232323]"></span>
        <p className="text-xl w-5/6">
          Sinta-se à vontade para me contatar através das plataformas:
        </p>
      </header>

      <Media
        size={40}
        classNameUl={"flex md:gap-5 gap-2 items-center pt-16 md:pt-20 "}
        classNameLi={
          "p-3 hover:bg-[#696969] rounded-md transition duration-300"
        }
      />
    </div>
  );
}

export default Contact;
