import React from 'react'
import { FaGithub ,FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLeaf } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import {motion} from "framer-motion";

function Footer() {
  return (
        <footer className=' bg-primary/10 py-12 mt-12 '>
            <motion.div 
            initial= {{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:1, delay: 0.3}}
            
            className='container flex justify-between items-center'>
                {/*Logo Section*/}
                <div className='text-2xl flex gap-2 items-center font-bold '>
                           <p className='text-primary'>Fresh</p>
                           <p className='text-secondary'>Haven</p>
                           <FaLeaf className='text-green-500'/>
                       </div>

    
                {/*Social icons section*/}
                <div className='text-3xl flex items-center gap-4 mt-6'>
                    {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/haribabu-g/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            <FaLinkedin />
          </a>
                   
                  {/* Twitter (X) */}
          <a 
            href="https://x.com/IamHaribabu_?t=LKD-nhd4Meh8YLJJGE-EtA&s=08" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-black hover:text-gray-600"
          >
            <FaSquareXTwitter />
          </a>

          {/* GitHub */}
          <a 
            href="https://github.com/Haribabu-g" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-black hover:text-gray-600"
          >
            <FaGithub />
          </a>

                </div>

            </motion.div>
        </footer>



  )
}

export default Footer