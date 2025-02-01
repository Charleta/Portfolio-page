"use client";


import { motion } from "framer-motion";
import { fadeIN } from "@/utils/motion-trasitions";


interface MotionTransitionProps {

    children: React.ReactNode;
    position: "right" | "bottom";
    className?: string;
}





const MotionTransition = (props: MotionTransitionProps) => {
    const { children , position , className } = props;
  return (
  
  <motion.div
    
    variants={fadeIN(position)}
    initial= "hidden"
    animate="visible"
    exit = "hidden"
    className={className}
  
  >
    {children}
    </motion.div>
        
);
};

export default MotionTransition;
