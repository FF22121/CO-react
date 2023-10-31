import AnimationWrapper from "./AnimationWrapper";
const ImagesWrapper = ({ activeButton }) => {
    const imageStyle = 'absolute lg:w-[760px] h-[400px] lg:h-[750px] lg:top-[200px] top-[180px] lg:right-[20px] right-[-100px] md:min-w-[760px] lg:min-h-[750px] z-40';

    return (
        <> 
        {activeButton === 'Ethical Investments' && (
            <AnimationWrapper>  
               <img
               className={`${imageStyle}`}
               src="./switcher/one_img.svg"
               alt="first_img"
             />
           </AnimationWrapper>
            )}
           {activeButton === 'Quality and Trust' && (
              <AnimationWrapper> 
               <img
               className={`${imageStyle}`}
               src="./switcher/second_img.svg"
               alt="second_img"
             />
             </AnimationWrapper>
            )}
             {activeButton === 'Shariah Compliance' && (
              <AnimationWrapper> 
               <img
               className={`${imageStyle}`}
               src="./switcher/third_img.svg"
               alt="third_img"
             />
             </AnimationWrapper>
            )}
             {activeButton === 'Early Access to Promising Projects' && (
              <AnimationWrapper> 
               <img
               className={`${imageStyle}`}
               src="./switcher/fourth_img.svg"
               alt="fourth_img"
             />
             </AnimationWrapper>
            )}
            {activeButton === 'Seamless User Experience' && (
              <AnimationWrapper> 
               <img
               className={`${imageStyle}`}
               src="./switcher/fifth_img.svg"
               alt="fifth_img"
             />
             </AnimationWrapper> 
            )}
        </>
    );
  };
    
  export default ImagesWrapper;