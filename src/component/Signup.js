import React, { useState } from 'react';
import { motion } from 'framer-motion';
import eyeOpen from '../eye-regular.svg';
import eyeClose from '../eye-slash-regular.svg';
import Music from './Music';

const Signup = ({ onClose }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleFormClick = (e) => {
        e.stopPropagation();
    };

    const handleSignIn = () => {
        if (!username.trim()) {
            setUsernameError('Please enter a username.');
        } else {
            setUsernameError('');
        }

        if (!password.trim()) {
            setPasswordError('Please enter a password.');
        } else {
            setPasswordError('');
        }

        if (username.trim() && password.trim()) {
            // Additional validation logic can be added here

            // Perform sign-in logic here

            // Redirect to the Music page
            window.location.href = '/Music';
        }
    };

    return (
        <div onClick={onClose} className='loginBody'>
            <div className='loginForm' onClick={handleFormClick}>
                <header className='hTxt'>
                    <h1>Welcome Back</h1>
                </header>
                <motion.input
                    type='text'
                    placeholder='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className={`inputField ${usernameError && 'error'}`}
                    whileFocus={ { scale:1.03 } }
                    transition={{ ease:'linear' , type:'spring' , stiffness: 1000 , duration: .5 }}
                />
                {usernameError && <h3 className="errorMessage">{usernameError}</h3>}
                <div className='inputPassword'>
                    <motion.input
                        type={showPassword ? 'text' : 'password'}
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={`inputField ${passwordError && 'error'}`}
                        whileFocus={ { scale:1.03 } }
                        transition={{ ease:'linear' , type:'spring' , stiffness: 1000 , duration: .5 }}
                    />
                    <button className='password' onClick={togglePasswordVisibility}>
                        {showPassword ? <img src={eyeOpen} alt="Hide Password" /> : <img src={eyeClose} alt="Show Password" />}
                    </button>
                </div>
                {passwordError && <h3 className="errorMessage">{passwordError}</h3>}
                <motion.button
                    className='cta'
                    onClick={handleSignIn}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: .9 }}
                    transition={{ ease: 'linear', type: 'spring', stiffness: 400, duration: .5 }}
                >
                    Sign In
                </motion.button>
            </div>
        </div>
    );
};

export default Signup;
