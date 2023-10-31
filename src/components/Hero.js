import BtnMain from "./ui/buttons/BtnMain";
import InputMain from "./ui/input/InputMain";
import { baseUrl, downloaded, subscribe } from "../helper";
import { useAppContext } from "../hooks/useAppContext";
import { useState, useEffect } from "react";
const defHash = ""

const Hero = () => {
    const [email, setEmail] = useState("");
    const { updateContextState } = useAppContext();
    const [subscribeResult, setSubscribeResult] = useState();
    const [dowloadWalletlink, setDowloadWalletlink] = useState("");

    
    const handleButtonClick = async () => {
        const reuslt = await subscribe(email);
        setSubscribeResult(reuslt)
    };

   
  const isValidEmail = (value) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(value);
  };

  
  const handleEmailInputChange = (event) => {
    const inputValue = event.target.value;
    setEmail(inputValue);

    
    if (isValidEmail(inputValue)) {
        setTimeout(() => {
            setSubscribeResult(undefined);
          }, 5000);
    } else {
      setSubscribeResult("Please enter a valid email address");
    }
  };


const handleDownloadButtonClicked = async () => {
    await downloaded(defHash);
};

const handleAPKDownloadButtonClicked = async () => {
    window.open("", "_blank");
    await downloaded(defHash);
};

useEffect(() => {
    const dowload = async () => {
        try {
            const response = await fetch(baseUrl + "/downloadWallet", {
                method: "POST",
            });

            if (response.ok) {
                const data = await response.json();
                setDowloadWalletlink(decodeURIComponent(data.link))
            } else {
                console.error("Failed to download wallet");
            }
        } catch (error) {
            console.error("Error occurred:", error);
        }
    }

    dowload()
}, [])

  return (
    <div className="flex md:overflow-clip md:mx-0 mx-auto
                     lg:mt-[70px] mt-[20px]">
        <div className="flex flex-col lg:basis-1/2  
                        lg:mx-[72px] md:mx-[2rem] mx-[8px]">
            <div className="font-radwave lg:mx-0 mx-auto
                            lg:text-[70px] md:text-[50px] text-[30px] 
                            lg:leading-[74.5px] leading-[100%]
                            lg:w-[681px] max-w-[360px]">
            Empowering Investors
            Inspiring Change
            </div>
            <div className="mt-[17px] flex flex-col lg:mx-0 mx-auto">
                <p className="leading-[111%] lg:text-base text-sm lg:w-[450px] w-[340px]  text-main-gray">
                    Welcome to CONUMAPAD, the premier launchpad
                    for ethical blockchain projects.
                </p>
                <p className="leading-[111%] lg:text-base text-sm nd:w-[624px] w-[320px]  text-main-gray mt-[20px]">
                    CONUMAPAD is committed to empowering innovators and connecting 
                    investors who seek Shariah-compliant investment 
                    opportunities in the dynamic world of blockchain technology.
                </p>
            </div>
                <div className="md:hidden">
                    <img className="max-w-[340px] my-[40px]" src="./hero/hero_img_1.svg" alt="hero_illustration" />
                </div>
            <div className="flex flex-col lg:mt-[40px] md:mt-[30px] lg:mx-0 mx-auto">
                <p className="text-main-gray2 lg:w-[398px] w-[340px] leading-[111%] text-[14px]">
                    Stay ahead of the curve and be among the first to discover exciting upcoming projects on CONUMAPAD!
                </p>
                <p className="text-main-gray2 lg:w-[370px]  w-[340px] leading-[111%] text-[14px] mt-[14px]">
                     Register your email now to receive exclusive early access and updates.   
                </p>
                <form className="flex lg:space-x-[25px] space-x-[6px] mt-6">
                    <InputMain  type="email"
                                value={email}
                                placeholder="Email" 
                                onChange={handleEmailInputChange}
                                width="w-[241px]" />
                    <BtnMain type="button" width="w-[91px]" 
                             disabled={!isValidEmail(email)} 
                            design="black" text="Sign Up" 
                            onClick={handleButtonClick}/>
                </form>
                <div className="lg:space-x-[25px] flex space-x-[6px] mt-6">

                    <button  onClick={handleDownloadButtonClicked}
                            className={`rounded-[30px] font-medium hover:scale-105 
                                        duration-300 bg-main-black text-main-white w-[170px]  text-center p-2 text-sm disbled:hover:scale-100 disabled:opacity-[50%]`}>
                        <a target="_blank" rel="noreferrer" href={dowloadWalletlink}>
                        Get Haqq Wallet
                         </a>
                    </button>
               
                <BtnMain onClick={handleAPKDownloadButtonClicked}
                        width="max-w-[170px] basis-1/2" design="black" 
                        text="Get Haqq Wallet APK" />
                </div>
                <div className="mt-6">
                <BtnMain onClick={() => updateContextState({ popup: 'CONUMAPAD' })}
                         width="lg:w-[365px] w-[340px]" 
                         design="green" 
                         text="Participate in a Raffle" />
                </div>
                {subscribeResult?.success && <div className="mt-[15px] md:text-[16px] text-[12px] md:text-left text-center">Thank you for subscribing to CONUMAPAD updates!</div>}
                {subscribeResult?.error && <div className="mt-[15px] md:text-[16px] text-[12px] text-red-600 md:text-left text-center">There was an error subscribing, please try again!</div>}

            </div>
        </div>


        <div className="relative md:flex hidden basis-1/2">
            <img className="absolute lg:w-[1000px] lg:h-[712px]  lg:min-w-[1000px] lg:min-h-[712px] z-40 lg:right-[-206px] md:right-[-100px] lg:top-[10px] md:top-[15px]" 
            src="./hero/hero_img_1.svg" alt="hero_illustration" />
        </div>
        

    </div>
  );
};

export default Hero;
