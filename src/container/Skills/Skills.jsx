import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Tooltip } from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [Skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query)
      .then(data => {
        setExperiences(data);
      });

    client.fetch(skillsQuery)
      .then(data => {
        setSkills(data);
      });
  }, []);

  return (
    <>
      <h2 className='head-text'><span>Skills</span> & Experiences</h2>

      <div className='app__skills-container'>
        <motion.div
          className='app__skills-list'
        >
          {Skills.map((skill) => (
            <motion.div
              whileInView={{opacity: [0, 1]}}
              transition={{duration: 0.5}}
              className='app__skills-item app__flex'
              key={skill.name}
            >
              <div className='app__flex' style={{ backgroundColor: skill.bgColor}}>
                <img src={urlFor(skill.icon)} alt="skill.name" />
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className='app__skills-exp'>
          {experiences.map(experience => (
            <motion.div
              className='app__skills-exp-item'
              key={experience.year}
            >
              <div className='app__skills-exp-year'>
                <p className='bold-text'>{experience.year}</p>
              </div>
              <motion.div className='app__skills-exp-works'>
                {experience.works.map((work, index) => (
                  <div key={work.name}>
                    <motion.div
                      whileInView={{opacity: [0, 1]}}
                      transition={{duration: 0.5}}
                      className='app__skills-exp-work app__flex'
                      data-tooltip-id={work.year+work.name+work.company}
                      data-tooltip-content={work.desc}
                      
                    >
                      <h4 className='bold-text'>{work.name}</h4>
                      <p className='p-text'>{work.company}</p>
                      <p className='p-text'>{work.desc}</p>
                    </motion.div>
                    <Tooltip id={work.year+work.name+work.company} noArrow />
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  "app__whitebg"
);