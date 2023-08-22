function Container({ children, classname, size }) {
  return (
    <container
      className={`flex w-full  z-0 ${size} relative ${classname}`}
    >
      {children}
    </container>
  );
}

export default Container;
