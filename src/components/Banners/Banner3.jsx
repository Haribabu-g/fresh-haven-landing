import React from 'react'
import BannnerPng from "../../assets/fruits/banner-bg.jpg"
// eslint-disable-next-line no-unused-vars
import {motion} from "framer-motion";
import {FadeLeft} from "../../utility/animation";

const bgstyle  = {
    backgroundImage: `url(${BannnerPng})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
};

function Banner3() {
  return (
    <section className='container mt-12'>
            <div style={bgstyle} className='container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 rounded-3xl '>
                {/*Blank div Image*/}
                <div></div>
               
                {/*Brand Info*/}
                <div className='flex flex-col justify-center'>
                    <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
                        <motion.h1
                        variants={FadeLeft(0.5)}
                        initial = "hidden"
                        whileInView="visible"
                        viewport={{once:true}}
                        className='text-3xl lg:text-6xl font-bold uppercase'>get fresh fruits today
    
                        </motion.h1>
                        <motion.p
                            variants={FadeLeft(0.6)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true}}
                        >
    Grab the freshest, juiciest fruits today—picked with care and delivered with love! Taste the goodness in every bite! 🍎🍊🍇</motion.p>
    
                        
                       
    
                        {/*button section*/}
                        <motion.div 
                        variants={FadeLeft(0.9)}
                        initial="hidden"
                        animate="visible"
                        
                        
                        
                        className='flex justify-center md:justify-start'>
                        <button className='primary-btn'>
                            Learn More</button>
                        </motion.div>
                    </div>
                </div>
    
    
            </div>
         </section>
  )
}

export default Banner3