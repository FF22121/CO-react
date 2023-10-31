const ModalWindowsWrapper = ({ children, closeWindow }) => {
  return (
    <div
     
      className="fixed z-50 top-0 left-0  w-full sm:h-screen h-full flex justify-center items-center"
    >
      {children}
      <div
        onClick={closeWindow}
        style={{ background: "rgba(22, 22, 22, 60%)" }}
        className="z-10 absolute backdrop-blur-md  w-full h-screen"
      ></div>
    </div>
  );
};

export default ModalWindowsWrapper;
