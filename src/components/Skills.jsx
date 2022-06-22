import React from 'react'
import bgImage from '../skills-bg.png'
import skillsPhoto from '../skills-photo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faGit, faBootstrap,faJava } from '@fortawesome/free-brands-svg-icons';
const Skills = () => {
  return (
    <div  className='skills'>
          <div className="main-info">
            <div className="left-side">
             <h2>Skills</h2>
             <div className="bottom">
                <div className="lang-row">

                <div className="lang  ">
                    <FontAwesomeIcon icon={faHtml5}  size="5x"/>
                </div>

                <div className="lang ">
                    <FontAwesomeIcon icon={faCss3}  size="5x"/>
                </div>

                <div className="lang ">
                    <FontAwesomeIcon icon={faJs}  size="5x"/>
                </div>

                </div>
  
                 <div className="lang-row">
                    
                 <div className="lang  ">
                    <FontAwesomeIcon icon={faGit}  size="5x"/>
                </div>

                <div className="lang ">
                    <FontAwesomeIcon icon={faBootstrap}  size="5x"/>
                </div>

                <div className="lang ">
                    <FontAwesomeIcon icon={faJava}  size="5x"/>
                </div>
                 </div>
               
             </div>
            </div>

            <div className="right-side ">
                <img src={skillsPhoto} alt=""  className='skills-photo'/>
            </div>
          </div>
        <img src={bgImage} alt="" className='bg-image'/>
    </div>
  )
}

export default Skills