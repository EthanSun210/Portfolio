import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Education.scss'

const Education = () => {
  const [edus, setEdus] = useState([])

  useEffect(() => {
    const query = '*[_type == "education"]'

    client.fetch(query)
      .then(data => {
        setEdus(data)
      })
  }, [])

  return (
    <>
      <div className='head-text'> My <span>Education</span></div>
      {edus.map(education => (
        <motion.div 
          whileInView={{ y: [50, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5, ease: 'easeInOut'  }}
          className='app__education-item app__flex' key={education.degree}>
          <motion.div 
            // whileInView={{ y: [50, 0], opacity: [0, 1] }}
            className='app__education-head'
          >
            <img src={urlFor(education.logo)} alt={education.school} />
            <div className='app__education-head-content'>
              <p className='bold-text'>{education.school}</p>
              <p className='p-text'>{education.degree}</p>
              <p className='p-text'>{`${education.start}-${education.end}`}</p>
              <p className='bold-text'>GPA: <span>{`${education.gpa}/4`}</span></p>
            </div>
          </motion.div>

          <div className='app__education-body'>
            <p className='bold-text'>Relevant Courses</p>
            <div className='app__education-courses'>
              {education.courses.map((course, index) => (
                <motion.div 
                  whileInView={{ y: [50, 0], opacity: [0, 1] }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className='app__education-course app__flex' 
                  key={course.name}
                >
                  <div className='app__flex'>
                    <img src={urlFor(course.icon)} alt={course.name} />
                  </div>
                  <p className='p-text'>{course.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </>
  )
}

export default AppWrap(
  MotionWrap(Education, 'app__education'),
  'education',
  'app__primarybg'
)