function Navbar() {
  return (
    <>
      {/* deixar barra fixa */}
      <navbar className="flex w-full justify-between px-16 items-center text-[white] py-8 bg-[#2a3044] ">
        <div className="flex gap-4">
          <img src="vite.svg" alt="" />
          <h3 className="font-bold text-[1.115rem]">LEONARDO FONTES</h3>
        </div>
        <div className="flex ">
          <ul className="flex gap-12 font-bold text-base">
            <li>
              <a href="#contact">HOME</a>
            </li>
            <li>
              <a href="#contact">SOBRE MIM</a>
            </li>
            <li>
              <a href="#contact">PROJETOS</a>
            </li>
            <li>
              <a href="#contact">CONTATO</a>
            </li>
          </ul>
        </div>
      </navbar>
    </>
  );
}

export default Navbar;
