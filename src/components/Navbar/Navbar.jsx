import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    // bem naming convention
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.ethan} alt='logo' />
      </div>
      <ul className='app__navbar-links'>
        {['home', 'about', 'work', 'skills', 'education', 'contact'].map((item) => (
          <li className='app__flex p-text' key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{ item }</a>
          </li>
        ))}
      </ul>

      {/* responsive menu */}
      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        { (
          <motion.div
            initial='hidden'
            animate={toggle ? 'visible' : 'hidden'}
            variants={{ hidden: { x: '100%' }, visible: { x: 0}}}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'work', 'skills', 'education', 'contact'].map((item) => (
                <a href={`#${item}`} onClick={() => setToggle(false)}>
                  <li key={item}>
                    <span>{ item }</span>
                  </li>
                </a>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar