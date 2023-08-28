import Media from "./Media";
function Footer() {
  return (
    <footer className="text-white bg-[#232323] ">
      <div className="mx-auto container flex md:flex-row flex-col justify-between  border-b-[1px] border-solid border-[#7a7a7a]">
        <div className="flex flex-col md:gap-4 gap-20 py-12 justify-between md:items-start items-center ">
          <h3 className="font-bold text-2xl">LEONARDO FONTES</h3>
          <p className="md:w-1/2 w-10/12 md:text-start text-center">
            Obrigado por visualizar meu portfólio, Sinta-se à vontade para
            entrar em contato caso tenha alguma dúvida, sugestão, ou queira
            conversar sobre programação.
          </p>
        </div>
        <div className="flex flex-col py-12 md:items-start items-center  ">
          <p className="font-bold text-2xl pb-4">SOCIAL</p>
          <Media size={22} classNameUl={"flex gap-6"} />
        </div>
      </div>
      <div className="flex items-center justify-center py-12 text-xs">
        <p>
          &copy; Copyright 2023. Feito por{" "}
          <strong className="font-bold underline">Leonardo Fontes</strong>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
