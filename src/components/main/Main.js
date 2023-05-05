import React from 'react'
import './Main.scss'
import Slider from '../../images/Slider.jpeg'

const Main = () => {
  return (
    <div className='main'>
      <img  className='slider' src={Slider}/>
      <div className='categories'>
      <div className='fear'></div>
      <div className='action'></div>
      <div className='drama'></div>
      <div className='documentary'></div>
      </div>
    </div>
  )
}

export default Main