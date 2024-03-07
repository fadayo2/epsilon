import React from 'react';
import { motion } from 'framer-motion';
import '../component/intro.css';
// import hphone from '../component/headphone.png'

const Intro = () => {
  return (
    <div className='introBody'>
        <motion.div className='txtDiv' initial={{ scale:1}}>
            <p>Epsilon</p> 
            <span className='slogan'>"Feel the Beat, Anywhere You Go!"</span>

            <motion.button className='cta' whileHover={{ scale:1.1 }} whileTap={{ scale: .9 }} transition={{ ease:'linear' , type:'spring' , stiffness:400 , duration: .5  }}>Listen now</motion.button>
        </motion.div>

        <motion.div className='imgDiv'></motion.div>
    </div>
  )
}

export default Intro