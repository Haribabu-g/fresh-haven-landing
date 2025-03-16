import React from 'react'
import BannnerPng from "../../assets/fruits/fruits-splash.png"
// eslint-disable-next-line no-unused-vars
import {motion} from "framer-motion";
import {FadeLeft , FadeUp} from "../../utility/animation";

function Banner() {
  return (
     <section className='bg-secondary/10'>
        <div className='container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14'>
            {/*Banner Image*/}
            <div className='flex justify-center items-center'>
                <motion.img 

                initial={{opacity: 0 , scale: 0.5}}
                whileInView={{opacity: 1 , scale: 1}}
                transition={{type:"spring", stiffness: 100, delay:0.2}}
                viewport={{once: true}}
            
                
                
                
                src={BannnerPng} alt="" className='w-[300px] md:max-w-[400px] h-full object-cover drop-shadow'/>
            </div>
            {/*Brand Info*/}
            <div className='flex flex-col justify-center'>
                <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
                    <motion.h1
                    variants={FadeUp(0.5)}
                    initial = "hidden"
                    whileInView="visible"
                    viewport={{once:true}}
                    className='text-3xl lg:text-6xl font-bold uppercase'>Brand Info

                    </motion.h1>
                    <motion.p
                        variants={FadeUp(0.6)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}

                        className='text-justify'
                    >
At Fresh Haven, we bring you the juiciest, farm-fresh fruits straight from nature’s backyard. From sun-kissed mangoes to crisp apples, every bite is packed with delicious goodness!</motion.p>

                    <motion.p
                     variants={FadeUp(0.9)}
                     initial="hidden"
                     whileInView="visible"
                     viewport={{once: true}}

                     className='text-justify'
                    >Founded in 2025 by Haribabu G, Fresh Haven is a fruity revolution, delivering premium-quality produce with care and speed. From perfectly curved bananas to show-stopping watermelons, we ensure every fruit is as amazing as it looks!</motion.p>
                   

                    {/*button section*/}
                    <motion.div 
                    variants={FadeUp(1.1)}
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

export default Banner