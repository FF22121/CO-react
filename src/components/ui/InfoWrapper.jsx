import AnimationWrapper from "./AnimationWrapper";
const InfoWrapper = ({ activeButton }) => {

    const subHeading = 'font-radwave lg:text-[20px] md:text-left text-center lg:mb-[40px]';
    const subText = 'lg:text-[20px] leading-[150%] lg:w-[492px] sm:w-[360px] md:mx-0 mx-auto'

    return (
        <div className='lg:mt-[120px] mt-[50px]'> 
       {activeButton === 'Ethical Investments' && (
          <AnimationWrapper design='lg:space-y-[20px] space-y-[10px]'>  
              <p className={`${subHeading}`}>
                Ethical Investments
              </p>
              <p className={`${subText}`}>
                CONUMAPAD focuses on promoting blockchain projects that adhere 
                to Shariah principles and Islamic ethical standards.
              </p>
              <p className={`${subText}`}>
                We carefully evaluate projects to ensure they meet strict criteria, 
                giving you confidence in the ethical nature of your investments.
              </p>
            </AnimationWrapper>  
          )}
          {activeButton === 'Quality and Trust' && (
             <AnimationWrapper design='lg:space-y-[20px] space-y-[10px]'>  
              <p className={`${subHeading}`}>
                Quality and Trust
              </p>
              <p className={`${subText}`}>
              At CONUMAPAD, we prioritize quality and trust. 
              Our team of experts performs thorough due diligence 
              on every project before it is listed on our platform.
              </p>
              <p className={`${subText}`}>
              This rigorous evaluation process ensures that only the most 
              promising and credible projects are available for investment.
              </p>
              <p className={`${subText}`}>
              This rigorous evaluation process ensures that only the most 
              promising and credible projects are available for investment.
              </p>
              <p className={`${subText}`}> 
              CONUMAPAD ensures that any project bearing our certification logo strictly upholds Shariah principles,
              delivering investment opportunities that are in perfect harmony with your ethical values.
              </p>
            </AnimationWrapper>
          )}
          {activeButton === 'Shariah Compliance' && (
           <AnimationWrapper design='lg:space-y-[20px] space-y-[10px]'>
              <p className={`${subHeading}`}>
                Shariah Compliance
              </p>
              <p className={`${subText}`}>
                CONUMAPAD provides you with access to a curated selection
                of Shariah-compliant blockchain projects.
              </p>
              <p className={`${subText}`}> 
               We understand the importance of adhering to Islamic finance
               principles, and our platform is designed to help you invest in 
               projects that meet these requirements.
              </p>
            </AnimationWrapper>
          )}
          {activeButton === 'Early Access to Promising Projects' && (
           <AnimationWrapper design='lg:space-y-[20px] space-y-[10px]'>
              <p className={`${subHeading}`}>
                Early Access to Promising Projects
              </p>
              <p className={`${subText}`}>     
                As a subscriber to our waiting list, 
                you'll gain exclusive early access to exciting 
                blockchain projects.
              </p>
              <p className={`${subText}`}> 
                Be among the first to discover innovative ideas, 
                groundbreaking technologies, and projects poised for success.
              </p>
              <p className={`${subText}`}> 
                Seize the opportunity to invest early in projects that
                align with your values and have significant growth potential.
              </p>
            </AnimationWrapper>
          )}
          {activeButton === 'Seamless User Experience' && (
            <AnimationWrapper design='lg:space-y-[20px] space-y-[10px]'>
              <p className={`${subHeading}`}>
                Seamless User Experience
              </p>
              <p className={`${subText}`}>     
                CONUMAPAD is committed to providing a seamless user experience.
              </p>
              <p className={`${subText}`}> 
                Our intuitive platform and user-friendly interface makes it easy for you to navigate through projects, 
                access relevant information, and participate in token sales.
              </p>
              <p className={`${subText}`}> 
              We prioritize security, transparency, and a smooth investment process.
              </p>
            </AnimationWrapper>
          )}
    </div>
    );
  };
    
  export default InfoWrapper;