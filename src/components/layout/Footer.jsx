import Media from "./Media";
function Footer() {
  return (
    <footer className="text-white bg-[#2a3044] ">
      <div className="mx-auto container flex justify-between border-b-[1px] border-solid border-[#7a7a7a]">
        <div className="flex flex-col gap-4 py-12  justify-between ">
          <h3 className="font-bold text-2xl">LEONARDO FONTES</h3>
          <p className="w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias a,
            nemo eaque libero atque dicta repellat sed doloribus beatae fugit
          </p>
        </div>
        <div className="flex flex-col py-12 ">
          <p className="font-bold text-2xl pb-4">SOCIAL</p>
          <Media size={22} classNameUl={"flex gap-6"} />
        </div>
      </div>
      <div className="flex items-center justify-center py-12 text-xs">
        <p>
          &copy; Copyright 2023. Feito por{" "}
          <strong className="font-bold">Leonardo Fontes</strong>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
