function Button({ text, classname, handleClick}) {
  return (
    <button
     onClick={handleClick} className={`font-bold text-lg hover:-translate-y-1 duration-300 tracking-wider rounded-lg text-white ${classname}`}
    >
      {text}
    </button>
  );
}

export default Button;
