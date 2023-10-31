import { useState } from 'react';
import BtnSwitcher from './ui/buttons/BtnSwitcher';
import ImagesWrapper from './ui/ImagesWrapper';
import InfoWrapper from './ui/InfoWrapper';

const Switcher = () => {
  const [activeButton, setActiveButton] = useState('Ethical Investments');

  const handleButtonClick = (text) => {
    setActiveButton(text);
  };


  return (
    <div className="lg:mt-[140px] mt-[70px] flex md:flex-row flex-col-reverse overflow-clip lg:h-[930px] md:h-[670px]">
      <div className="relative flex flex-col basis-1/2 lg:mx-[72px] md:mx-[2rem] mx-[8px]">
      <div className="space-y-[5px] md:mx-0 mx-auto z-20 md:pl-[40px] pl-[20px] pt-[20px] bg-main-white border-main-black border-[3px] md:w-[387px] w-[330px] md:h-[208px] h-[190px] rounded-[30px]">
          {['Ethical Investments', 'Quality and Trust', 'Shariah Compliance', 'Early Access to Promising Projects', 'Seamless User Experience'].map((text, index) => (
            <BtnSwitcher
              key={index}
              text={text}
              width={
                index === 0 ? 'md:w-[200px] w-[162px]'
                : index === 1 ? 'md:w-[177px] w-[145px]'
                : index === 2 ? 'md:w-[205px] w-[170px]'
                : index === 3 ? 'md:w-[348px] w-[280px]'
                : 'md:w-[267px] w-[215px]'
              }
              onClick={() => handleButtonClick(text)}
              activeButton={activeButton}
            />
          ))}
        </div>
        <div className="absolute md:flex hidden top-[20px] left-[-10px] border-main-black border-[3px] md:w-[387px] h-[208px] rounded-[30px]" />
        <img  className='lg:flex absolute hidden animate-rotate z-50 right-[-10px] top-[120px]'
             src="./switcher/star_img.svg" 
             alt="rotating_star" />
       <InfoWrapper activeButton={activeButton}/>
      </div>

      <div className="relative flex md:basis-1/2">
        <div className="font-radwave md:mb-0 mb-5 md:mx-0 mx-auto
                            lg:text-[70px] md:text-[50px] text-[30px] 
                            lg:leading-[74.5px] leading-[100%]
                            lg:w-[681px] max-w-[340px] text-center">
            WHY CHOOSE CONUMAPAD
        </div>
        <div className='md:flex hidden'>
       <ImagesWrapper activeButton={activeButton} />
       </div>
       
      </div>
    </div>
  );
};

export default Switcher;