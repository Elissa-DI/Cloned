import React from 'react'
import './styles/firstDiv.css'
import firstImg from './styles/tech.jpg'

function firstDiv() {
  return (
    <div className='main'>
      <div className='text'>
       <h3 className='font-weight-bold'>Discover scientific knowledge and stay connected to the world of science</h3>
       <button className='btn btn-success' id='joinBtn'>Join for free</button>
      </div>  
      <div>
        <img src={firstImg} className='techImg'/>
      </div>
    </div>
  )
}

export default firstDiv