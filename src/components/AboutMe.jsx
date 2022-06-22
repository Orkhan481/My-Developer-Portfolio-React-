import React from 'react';
import myPhoto from '../my-photo.jpg'
const AboutMe = () => {
    return (
        <div className="about-me">
          <div className="row-item">
            <img src={myPhoto} id='my-photo'/>
            <div className="col-item ">
               <h2>About Me</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quam harum odio quod, corporis fugit voluptatum. Ea, dolorem. Quas odio nemo dolorem ipsam velit eum nesciunt. Atque modi aliquid possimus corporis accusantium sapiente, officia soluta autem ad, voluptas nam aut repudiandae perspiciatis nisi veritatis velit quas itaque eaque dicta quidem eligendi? Laudantium voluptate officiis doloribus, aliquid dolore incidunt reprehenderit molestiae.</p>
               <a href={myPhoto}><button className='button'>Download CV</button></a>
            </div>
          </div>
        </div>
    )
}

export default AboutMe