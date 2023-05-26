/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './styles/thirdDiv.css'
import Impact from './styles/impact.png'

function thirdDiv() {
  return (
    <div className='mainT'>
        <div className="connectD">
            <div className="textT">
              <h2>Connect with your scientific community</h2>
              <p>Share your research, collaborate with your peers, and get the support you need to advance your career.</p>
            </div>
            <div className="visit">
                <h4>VISIT TOPIC PAGES</h4>
                <button>Engineering</button>
                <button>Mathematics</button>
                <br />
                <button>Bilogy</button>
                <button>Computer Science</button>
                <br />
                <button>Climate Change</button>
                <button>Medicine</button>
                <br />
                <button>Physics</button>
                <button>Social Science</button>
                <br />
                <button>Astrophysics</button>
                <button>Chemistry</button>
            </div>
            <br />
            <div className="impactD">
                <div>
                   <img src={Impact} className='impact'/>
                </div>
                <div className="textI">
                    <h2>Measure your impact</h2>
                    <br />
                    <p>Get in-depth stats on who's been reading your work and keep track of your citations.</p>
                </div>
                <br />
                <hr />
                <br />
                <div className="advance">
                    <h2>
                    Advance your research and join a community of 20 million scientists
                    </h2>
                    <br />
                    <button className='btn btn-success'>Join for free</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default thirdDiv