import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../component/intro.css';
import Signup from './Signup';

const Intro = () => {
  const [showSignup, setShowSignup] = useState(false);

  const openSignup = () => {
    setShowSignup(true);
  };

  const closeSignup = () => {
    setShowSignup(false);
  };

  return (
    <div className='introBody'>
      <motion.div className='txtDiv' initial={{ scale: 1 }}>
        <p>Epsilon</p>
        <span className='slogan'>"Feel the Beat, Anywhere You Go!"</span>

        <motion.button onClick={openSignup} className='cta' whileHover={{ scale: 1.1 }} whileTap={{ scale: .9 }} transition={{ ease: 'linear', type: 'spring', stiffness: 400, duration: .5 }}>Listen now</motion.button>
      </motion.div>
      <motion.div className='imgDiv'></motion.div>

      {showSignup && <Signup onClose={closeSignup} />}
    </div>
  )
}

export default Intro;
