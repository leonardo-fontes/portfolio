function Button({ text, classname, handleClick}) {
  return (
    <button
     onClick={handleClick} className={`font-bold text-lg  tracking-wider rounded-lg text-white ${classname}`}
    >
      {text}
    </button>
  );
}

export default Button;
