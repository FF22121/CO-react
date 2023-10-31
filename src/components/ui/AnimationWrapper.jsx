import { motion } from "framer-motion";
const AnimationWrapper = ({ children, design, ...rest }) => {

    const animationVariants = {
        visible: { opacity: 1},
        hidden: { opacity: 0},
      };
      
    return (
        <motion.div initial="hidden"
            animate="visible"
            exit="hidden"
            variants={animationVariants}
            className={`${design}`}> 
            {children}
        </motion.div>
    );
  };
    
  export default AnimationWrapper;