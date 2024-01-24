import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <a href="https://www.linkedin.com/in/yucheng-sun-5553492a0/" target="_blank" rel="noopener noreferrer">
        <div>
          <FaLinkedin />
        </div>
      </a>
      <a href="https://github.com/ethansun210" target="_blank" rel="noopener noreferrer">
        <div>
          <FiGithub />
        </div>
      </a>
    </div>
  )
}

export default SocialMedia