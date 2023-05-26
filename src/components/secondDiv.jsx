/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './styles/secondDiv.css'
import discover from './styles/discover.png'

function secondDiv() {
  return (
    <div className='mainS'>
        <div>
           <img src={discover} className='discover'/>
        </div>
        <div className="textS">
            <h2>Discover research</h2>
            <br />
            <p className='pS'>Access over 135 million publication pages and stay up to date with what's happening in your field.</p>
            <br />
            <input type="text" placeholder='Search publications' className='form-control'/>
        </div>

    </div>
  )
}

export default secondDiv