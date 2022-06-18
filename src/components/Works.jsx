import React from 'react'
import WorkPhoto from '../works-photo.png'
const Works = () => {
  return (
    <div className='works'>
        <div className="infos row">
        <div className="img-area col-md-7 col-xs-12"><img src={WorkPhoto} className="work-image"/></div>

        <div className="work-info col-md-5 col-xs-12">
            <h2>Works</h2>
            <h3>Simon Game</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis saepe dolor aliquam facere rem blanditiis amet iure et cupiditate! Totam doloremque dolores rerum illo aliquid asperiores facilis atque eveniet distinctio.</p>
        </div>
        </div>
      

    </div>
  )
}

export default Works