"use client";

import { transitionVarianPage } from "@/utils/motion-trasitions";
import { AnimatePresence, motion } from "framer-motion";


const transitionPage =() =>{

    return(
        <AnimatePresence mode="wait" >
            <div>
                <motion.div
                   
                    variants={transitionVarianPage}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="fixed top-0 bottom-0 right-full w-screen z-30 bg-[#2e2257]"
                    transition={{delay:0 , duration: 1, wase: "easeInOut"}}>
                    
                </motion.div>

            </div>

        </AnimatePresence>

    );

};

export default transitionPage;