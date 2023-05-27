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
              <button>Find out more</button>
            </div>
        </div>
        <br />
        <div className="recruitmentD">
            <div>
              <img src={marketing} className='fImg'/>
            </div>
            <div className="textF">
              <h2>Marketing Solutions</h2>
              <p>
                  Griw your brand's impact in the scientific community with the world's leading network for scientists
              </p>
              <button>Find out more</button>
            </div>
        </div>
        <div className="last">
            <div className="fl">
            <ul className='d-flex m-5' id='leftF'>
                <li>
                    <a href="about">
                       About us
                    </a>
                </li>
                <li>
                    <a href="about">
                       About us
                    </a>
                </li>
                <li>
                    <a href="about">
                       About us
                    </a>
                </li>
                <li>
                    <a href="about">
                       About us
                    </a>
                </li>
                <li>
                    <a href="about">
                       About us
                    </a>
                </li>
                <li>
                    <a href="about">
                       About us
                    </a>
                </li>
                <li>
                    <a href="about">
                       About us
                    </a>
                </li>
                <li>
                    <a href="about">
                       About us
                    </a>
                </li>
            </ul>
            </div>
            <div className="fs">
            <ul className='d-flex m-3 justify-content-center' id='rightF'>
                <li>
                    <a href="about">
                       About us
                    </a>
                </li>
                <li>
                    <a href="about">
                       About us
                    </a>
                </li>
                <li>
                    <a href="about">
                       About us
                    </a>
                </li>
                <li>
                    <a href="about">
                       About us
                    </a>
                </li>
                <li>
                    <a href="about">
                       About us
                    </a>
                </li>
                <li>
                    <a href="about">
                       About us
                    </a>
                </li>
            </ul>
            </div>
        </div>
     </div>
  )
}

export default footer