import { RiWhatsappFill } from "react-icons/ri";
import { PiHandWavingFill } from "react-icons/pi";
import { useState } from "react";
import { Link } from "react-router-dom";

function WhatsMe() {

  return (
    <div className="fixed hidden bottom-0 right-4 z-10 md:flex my-4 items-center justify-center  gap-2">
      <p className="bg-white flex items-center gap-2 rounded-2xl px-5 py-2 text-lg shadow-2xl">
        Converse comigo
        <PiHandWavingFill size={20} color="#fcbd44" />
      </p>
      <div
        className={`bg-white w-16 object-center shadow-2xl relative hover:opacity-5 object-cover aspect-square rounded-full cursor-pointer flex items-center justify-center`}
      >
        <RiWhatsappFill color="green" size={55} />
      </div>
      <p className="w-3 aspect-square rounded-full right-3 top-0 animate-ping absolute brightness-90 bg-green-700"></p>
      <div
        className={`bg-white w-16 object-center opacity-0  shadow-2xl absolute right-0 hover:opacity-100 duration-300 object-cover aspect-square rounded-full cursor-pointer flex items-center justify-center`}
      >
        <Link target="blank" to="https://wa.me/5511993472460">
          <PiHandWavingFill color="green" size={40} />
        </Link>
      </div>
    </div>
  );
}

export default WhatsMe;
