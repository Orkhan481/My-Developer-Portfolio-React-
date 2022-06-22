import React from 'react'
import WorkPhoto from '../works-photo.jpg'
const Works = () => {
  return (
    <div className='works'>
        <div className="infos">
      <img src={WorkPhoto} className="work-image"/>

        <div className="work-info">
            <h2>Works</h2>
            <h3>Simon Game</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis maiores numquam consequatur dolorem eveniet optio, accusantium, id asperiores enim consectetur fugiat expedita repudiandae ut qui repellat! Rerum repellendus officiis maiores assumenda. Amet atque deserunt ipsa inventore temporibus nihil! Nemo corrupti ut inventore at consequatur, necessitatibus dolores maxime vitae. Porro enim quidem totam animi error, iusto, fuga odit velit suscipit, voluptatibus quia.</p>
        <div className="btns">
          <a href="#" className='btn'>HTML5</a>
          <a href="#" className='btn'>CSS3</a>
          <a href="#" className='btn'>JavaScript</a>
          <a href="#" className='btn'>ReactJS</a>
        </div>
        </div>
        </div>
      

    </div>
  )
}

export default Works