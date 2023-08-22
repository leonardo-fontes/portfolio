import Button from "../layout/Button";
import Label from "../layout/Label";

function Contact() {
  return (
    <div className="flex flex-col container justify-center items-center mx-auto my-32 text-white">
      <header className="flex flex-col justify-center text-center items-center gap-8">
        <h2 className="font-bold text-4xl tracking-widest">CONTATO</h2>
        <span className="w-10 border-[3px] border-solid rounded-lg border-[#2a3044]"></span>
        <p className="text-xl w-5/6">
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </p>
      </header>
      <form className="flex flex-col justify-center items-center rounded-md mt-20 text-[white] w-4/6 bg-[#6a6f86] gap-10 py-12">
        <Label title="Nome" placeholder={"Digite seu nome"} type={"text"} />
        <Label title="Email" placeholder={"Digite seu email"} type={"text"} />
        <div className="flex flex-col w-full px-12 justify-center ">
          <label className="font-bold pb-1 " htmlFor="message">
            Mensagem
          </label>
          <textarea
            className="p-4 rounded-lg bg-[#2a3044] text-white placeholder:text-white"
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Digite sua mensagem"
          ></textarea>
        </div>
        <div className="flex w-full justify-end px-12">
          <Button text="SUBMIT" classname={"w-52 p-4 bg-[#2a3044]"} />
        </div>
      </form>
    </div>
  );
}

export default Contact;
