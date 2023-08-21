function Button({ text, size }) {
  return (
    <button
      className={`p-4 font-bold text-xl tracking-wider rounded-lg text-white bg-[#2a3044] ${size}`}
    >
      {text}
    </button>
  );
}

export default Button;
