import React, { useState } from 'react';

import { images } from '../../constants';
import { client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = async () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
  }

  return (
    <>
      <h2 className='head-text'>Take a <span>coffee</span> & <span>chat</span> with me</h2>

      <div className='app__footer-cards'>
        <a href="mailto:ethansun@gmail.com">
          <div className='app__footer-card'>
            <img src={images.email} alt="email" />
            <p className='p-text'>ethansun210@gmail.com</p>
          </div>
        </a>
        <a href="tel: +1 (805) 865-6883">
          <div className='app__footer-card'>
            <img src={images.mobile} alt="mobile" />
            <p className='p-text'>+1 (805) 865-6883</p>
          </div>
        </a>
      </div>

      {!isFormSubmitted ?
        <div className='app__footer-form app__flex'>
          <div className='app__flex'>
            <input className='p-text' type="text" placeholder='Your Name' name="name" value={name} onChange={handleChangeInput}/>
          </div>
          <div className='app__flex'>
            <input className='p-text' type="text" placeholder='Your Email' name="email" value={email} onChange={handleChangeInput}/>
          </div>
          <div>
            <textarea 
              className='p-text'
              placeholder='Your Message'
              value={message}
              name='message'
              onChange={handleChangeInput}
            />
          </div>
          <button type='button' className='p-text' onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
        </div> : 
        <div>
          <h3 className='head-text'>Thank you for getting in touch!</h3>
        </div>
      }
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)