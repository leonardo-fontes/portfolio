function Container({ children, classname, size }) {
  return (
    <div
      className={`flex w-full  z-0 ${size} relative ${classname}`}
    >
      {children}
    </div>
  );
}

export default Container;
