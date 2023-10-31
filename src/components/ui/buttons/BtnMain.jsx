const BtnMain = ({ text, design, width, ...rest }) => {
    const designs = {
        black: "bg-main-black text-main-white",
        green: "bg-main-green text-main-black",
      };
    return (
      <button
        className={`rounded-[30px] font-medium hover:scale-105 
                duration-300 text-center p-2 text-sm disbled:hover:scale-100 disabled:opacity-[50%]
                ${width}  ${designs[design]}`}
        {...rest}
      >
        {text}
      </button>
    );
  };
    
  export default BtnMain;