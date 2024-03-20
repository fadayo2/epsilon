// import React, { useState } from 'react';
import Intro from './Intro';
import {motion} from 'framer-motion'

const Signup = ({onClose}) => {
    const handleFormClick = (e) => {
        e.stopPropagation();
    }


    return (
        <div onClick={onClose} className='loginBody'>
            <div onClick={handleFormClick} className='loginForm'>
                <header className='hTxt'> <h1> Welcome back </h1> </header>
                <motion.input
                    placeholder='Username'
                    type='text'
                    initial={{ scale:1 }}
                    whileFocus={{ scale:1.03}}
                    transition={{ ease:'linear' , type:'spring' , stiffness:1000 , duration:.5 }}
                />
                <motion.input  
                    placeholder='Password'
                    type='password'
                    initial={{ scale:1 }}
                    whileFocus={{ scale:1.03}}
                    transition={{ ease:'linear' , type:'spring' , stiffness:1000 , duration:.5 }}
                />
                <motion.button className='cta' whileHover={{ scale:1.1 }} whileTap={{ scale: .9 }} transition={{ ease:'linear' , type:'spring' , stiffness:400 , duration: .5  }}>sign in</motion.button>
                {/* <motion.a href=''>
                    link
                </motion.a> */}
            </div>
        </div>
    );
};

export default Signup;
