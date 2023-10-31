import { useAppContext } from "../hooks/useAppContext";
import Header from "./Header";
import BasePopup from "./popups/BasePopup";
import ModalWindowsWrapper from "./popups/ModalWindowsWrapper";
import Banner from "./Banner";


const popups = {
  conumapad: <BasePopup />,
};

const Layout = ({ children }) => {
  const { contextState, updateContextState } = useAppContext();

  return (
    <div className="min-w-[360px]">
      <Banner/> 
      <div className=" flex flex-col max-w-[1440px] mx-auto justify-center">
     
        <Header />
        {children}
        
      </div>
    
      {contextState?.popup && (
        <ModalWindowsWrapper
          closeWindow={() => updateContextState({ popup: null })}
        >
          {popups[contextState.popup]}
        </ModalWindowsWrapper>
      )}
    </div>
  );
};

export default Layout;
