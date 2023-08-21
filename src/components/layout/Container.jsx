function Container({ children, classname }) {
  return (
    <container
      className={`flex w-full bg-[#6a6f86] z-0 min-h-[90vh] relative ${classname}`}
    >
      {children}
    </container>
  );
}

export default Container;
