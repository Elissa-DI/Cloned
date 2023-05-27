/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './styles/footer.css'
import recruit from './styles/recruit.jpg'
import marketing from './styles/marketing.jpg'

function footer() {
  return (
    <div className='mainF'>
        <div className="recruitmentD">
            <div>
              <img src={recruit} className='fImg'/>
            </div>
            <div className="textF">
              <h2>Scientific Recruitment</h2>
              <p>
                  Hire qualified researchers and build the best teams in science
              </p>
  