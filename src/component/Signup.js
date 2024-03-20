import { useState } from 'react';
import { motion } from 'framer-motion'
import eyeOpen from '../eye-regular.svg';
import eyeClose from '../eye-slash-regular.svg';

// Rest of the component remains the same
const Signup = ({ onClose }) => {
    const handleFormClick = (e) => {
        e.stopPropagation();
    }

    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div onClick={onClose} className='loginBody'>
            <div onClick={handleFormClick} className='loginForm'>
                <header className='hTxt'> <h1> Welcome Back </h1> </header>
                <motion.input
                    placeholder='Username'
                    type='text'
                    initial={{ scale: 1 }}
                    whileFocus={{ scale: 1.03 }}
                    transition={{ ease: 'linear', type: 'spring', stiffness: 1000, duration: .5 }}
                />
                <div className='inputPassword'>
                    <motion.input
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Password'
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        initial={{ scale: 1 }}
                        whileFocus={{ scale: 1.03 }}
                        transition={{ ease: 'linear', type: 'spring', stiffness: 1000, duration: .5 }}
                    />
                    {/* Use the src attribute to specify the image source */}
                    <button className='password' onClick={togglePasswordVisibility}>
                        {showPassword ? <img src={eyeOpen} alt="Hide Password"/> : <img src={eyeClose} alt="Show Password"/>}
                    </button>
                </div>
                <motion.button className='cta' whileHover={{ scale: 1.1 }} whileTap={{ scale: .9 }} transition={{ ease: 'linear', type: 'spring', stiffness: 400, duration: .5 }}>sign in</motion.button>
                {/* <motion.a href=''>
                    link
                </motion.a> */}
            </div>
        </div>
    );
};

export default Signup;
