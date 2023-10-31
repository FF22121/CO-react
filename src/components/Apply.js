import { motion } from "framer-motion";
import BtnMain from "./ui/buttons/BtnMain";
import { applied } from "../helper";

const defHash = ""

const Apply = () => {

    const imageVariants = {
        visible: { opacity: 1, x:-10},
        hidden: { opacity: 0, x:50},
      };

      const handleApplyButtonClicked = async () => {
        window.open("", '_blank')
        await applied(defHash);
      };
  
  return (
    <div className="lg:mt-[140px] mt-[40px] flex md:flex-row flex-col md:justify-between md:mx-0 mx-auto">


    <motion.div initial="hidden"
                whileInView="visible"
                exit="hidden"
                variants={imageVariants}
                className="md:flex hidden relative md:basis-1/2">
        <img className="absolute z-40 lg:right-[-200px] lg:top-[-200px]
                         lg:w-[950px] lg:h-[755px]  lg:min-w-[950px] lg:min-h-[755px]" 
             src="./apply/apply_img.svg" 
             alt="apply_illustration" />
    </motion.div>

    <div className="flex md:hidden justify-center overflow-clip">
        <img className="w-[340px]" 
             src="./apply/apply_img.svg" 
             alt="apply_illustration" />
    </div>
    
    

    <div className="flex flex-col lg:mx-[72px] md:mx-[2rem] mx-[8px]">
        <div className="mt-[17px] md:w-[384px] w-[340px] space-y-[20px] flex flex-col">
            <p className="text-main-gray">
            Ready to launch your blockchain project to new heights?
            </p>
            <p className="text-main-gray">
             Join CONUMAPAD, the premier launchpad for innovative projects in the blockchain space.
            </p>
            <p className="text-main-gray">
                Our platform offers a seamless application process, 
                connecting you with a vibrant community of investors and providing 
                unparalleled support to help your project soar.
            </p>
            <p className="text-main-gray">
                Don't miss this opportunity to showcase your vision to
                 the world – apply now and unlock the potential of CONUMAPAD.
            </p>
            <BtnMain  onClick={handleApplyButtonClicked}
                    style={{marginTop: '40px'}} 
                     design="green" width="lg:w-[384px] w-[340px] md:mx-0 mx-auto" 
                     text="Apply to launch your project" />
        </div>
        <div className="flex md:justify-end justify-center lg:mb-[70px] lg:mt-[100px] mt-[40px] animate-bounce">
            <a href="#header"> 
            <img className="h-[42px] w-[42px]"
                 src="./system/arrow_up_icon.svg" 
                 alt="arrow_up_icon" />
            </a>
        </div>
    </div>
</div>
  );
};

export default Apply;