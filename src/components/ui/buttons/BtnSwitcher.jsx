import { useState } from "react";

const BtnSwitcher = ({ text, width, activeButton, ...rest }) => {
    const [isHovered, setHovered] = useState(false);
    const isActive = activeButton === text;
    return (
        <div {...rest}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)} 
            className={`relative ${width}`}> 
            <button
                className={`text-main-black text-left font-medium md:text-[20px] ${
                    isActive ? "md:underline md:underline-offset-[7.5px]" : "no-underline"
                  }`}>
                {text}
            </button>
            <div  className={`${
          isActive || isHovered ? "w-[92.5%]" : "w-[0%]"
        } absolute bg-main-black h-[2px]  duration-300 transition-all`} />
        </div>
    );
  };
    
  export default BtnSwitcher;