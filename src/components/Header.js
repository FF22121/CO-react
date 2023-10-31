import socialIcons from "../data/socialIcons";

const Header = () => {

  return (
    <header id="header" 
            className="flex justify-between items-center relative 
                       lg:mx-[72px] md:mx-[2rem] mx-[8px]">
        <img src="./header/header_logo.svg" className="lg:w-[350px] lg:h-[300px] w-[150px] h-[86px]" alt="haqqpad_logo" />
        <div className="flex"> 
        {socialIcons.map((icon, index) => (
              <a key={index}
                 target="_blank"
                 rel="noreferrer"
                 href={icon.url}
                 className="space-x-[10px] hover:-translate-y-2 duration-300
                            lg:w-[37px] lg:h-[37px] md:w-[30px] md:h-[30px] h-[27px] w-[27px]">
                   <img  
                    src={icon.src}
                    alt={icon.name} /> 
              </a>
            ))}
        </div>
     
    </header>
  );
};

export default Header;
