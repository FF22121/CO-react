
import { motion } from "framer-motion";
import { useAppContext } from "../../hooks/useAppContext";
import BtnMain from "../ui/buttons/BtnMain";
import { baseUrl } from "../../helper";
import QRCode from 'qrcode.react';
import { useState, useEffect, useMemo } from "react";

const defHash = ""

const BasePopup = () => {
  const popUpVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  };
  const { updateContextState } = useAppContext();
  const [dynamicLink, setDinamikLink] = useState()

  const handleOpenLinkClick = () => {
    window.open(dynamicLink, '_blank');
  };

    const handleTwitterLogin = () => {
    // Redirect the user to the backend authentication endpoint
    window.location.href = baseUrl+"/auth/twitter";
  };

  const openDynamicLinkButton = useMemo(() =>
    <div className="flex flex-col">
      <p className="lg:text-[20px] my-[40px] md:mx-[48px]">
        Your ticket is available for claim in Haqq Wallet!
      </p>
      <BtnMain design="green" text="Claim ticket" width="md:w-[560px] w-[340px] mb-[40px]"
              onClick={handleOpenLinkClick}/>
    </div>
    , [dynamicLink])

  const dynamicLinkQrCode = useMemo(() =>
    <div className="flex flex-col">
      <p className="mt-[40px] md:mx-[48px] mb-[20px]">
        Scan QR code with your phone to claim your ticket!
      </p>
      <div className="flex  justify-center mb-5"> 
      <QRCode value={dynamicLink} />
      </div>
    </div>
    , [dynamicLink])
    
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const modalParam = urlParams.get('dynamic_link');
    if (modalParam) {
      setDinamikLink(decodeURIComponent(modalParam))
    }
  }, [])
  
  return (
    <motion.div initial="hidden"
              animate="visible"
              exit="hidden"
              variants={popUpVariants}
      className={` relative md:w-[700px] p-5 rounded-[10px] flex flex-col
                      z-50 justify-center lg:mx-0 mx-6 bg-main-white`}>
      <div className="flex justify-end items-end">                  
      <img onClick={() => updateContextState({ popup: null })}
           src="./system/popupclose_icon.svg"
           alt="close_button"
           className="md:w-[40px] w-[20px] md:h-[40px] h-[20px]  md:mt-0 mt-7 cursor-pointer" />
       </div> 
       <div className="items-center flex flex-col">
        <div className="font-radwave md:text-[30px]">
          CONUMAPAD RAFFLE
        </div>
        {dynamicLink ?
          <>
            {openDynamicLinkButton}
            {dynamicLinkQrCode}
          </>
          : <>
        <p className="lg:text-[20px] my-[40px] md:mx-[48px]">
          Enter our lottery for a chance to secure an exclusive 
          allocation in our first inaugural project launching from CONUMAPAD.
        </p>
        <p  className="lg:text-[20px] mb-[40px]  md:mx-[48px]">
          Don't miss your opportunity to participate now 
          for the chance to purchase your allocation.
        </p>
        <p  className="lg:text-[20px] mb-[40px]  md:mx-[48px]">
          Verify your Twitter account and claim your 
          Raffle ticket from Haqq Wallet!
        </p>
        <BtnMain  onClick={handleTwitterLogin} design="green" width="md:w-[560px] w-[340px] mb-[40px]" text="Verify Twitter" />
        <p  className="lg:text-[20px] mb-[40px]  md:mx-[48px]">
          We will pick 10 winners that will be given a chance to get an 
          allocation to the first project launching on CONUMAPAD.
        </p>
        <p  className="lg:text-[20px] mb-[40px]  md:mx-[48px]">
          As an added bonus, the winners will also receive a rewarding 
          prize of ISLM coins.
        </p>
        </>}
       </div>
    </motion.div>
  );
};
export default BasePopup;
