import React from 'react'
import {HiArrowLeft} from 'react-icons/hi'
import './Main.css'

const Main = () => {
  return (
    <div className='main'>
        <div className='join'>
            <HiArrowLeft className='arrow'/>
            <button>Join Group</button>
        </div>
        <div className='heading'>
            <h1>Computer Engineering</h1>
            <span>142,765 Computer Engineers follow this</span>
        </div>
    </div>
  )
}

export default Main