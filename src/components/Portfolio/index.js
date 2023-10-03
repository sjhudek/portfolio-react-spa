import FlightTrackerImage from '../../assets/images/Flight-Tracker.png'
import PwaTextEditorImage from '../../assets/images/pwa-text-editor.png'
import NosqlSocialNetworkApiImage from '../../assets/images/NoSQL.png'
import OrmEcommerceBackendImage1 from '../../assets/images/ORM-Ecommerce-1.png'
import OrmEcommerceBackendImage2 from '../../assets/images/ORM-Ecommerce-2.png'
import EmployeeTrackerImage from '../../assets/images/Employee-Tracker.png'
import React, { useState } from 'react';


import './index.scss'

const Portfolio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="container portfolio-page">
      <div className="text-zone">
        <h1>Recent Projects</h1>
        <div className="projects-container">
          {/* begin flight tracker */}
          <div className="project-row" id="row-1">
            <div className="project-image project-image-1">
              <img src={FlightTrackerImage} alt="flight tracker" />
            </div>
            <div className="project-link">
              <div className="project-description">
                <p>Flight Tracker Website</p>
                <button onClick={openModal} className="modal-button">More Info</button>
              </div>
              <div className="project-url">
                <a href="https://github.com/sjhudek/notetaker/">GitHub</a>
              </div>
            </div>
          </div>
          {/* end flight tracker */}

          {/* begin pwa text editor */}
          <div className="project-row" id="row-2">
            <div className="project-image project-image-1">
              <img src={PwaTextEditorImage} alt="pwa text editor" />
            </div>
            <div className="project-link">
              <div className="project-description">
                <p>Progressive Web App Text Editor</p>
              </div>
              <div className="project-url">
                <a href="https://github.com/sjhudek/progressive-web-app-text-editor">
                  Github
                </a>
                <br />
                <a href="https://pwa-tex-editor-f5ac1633000d.herokuapp.com/">
                  Heroku
                </a>
                <br />
                <a href="https://youtu.be/H_o4O7btvU0">Video Demo</a>
              </div>
            </div>
          </div>
          {/* end pwa text editor */}

          {/* begin nosql social network api */}
          <div className="project-row" id="row-3">
            <div className="project-image project-image-1">
              <img
                src={NosqlSocialNetworkApiImage}
                alt="nosql social network api"
              />
            </div>
            <div className="project-link">
              <div className="project-description">
                <p>NoSQL Social Network API</p>
              </div>
              <div className="project-url">
                <a href="https://github.com/sjhudek/social-network-api">
                  Github
                </a>
                <br />
                <a href="https://youtu.be/P8tb2_xOg8U">Video Demo</a>
              </div>
            </div>
          </div>
          {/* end nosql social network api */}

          {/* begin orm backend */}
          <div className="project-row" id="row-4">
            <div className="project-image project-image-1">
              <img src={OrmEcommerceBackendImage1} alt="ecommerce backend 1" />
              <br />
              <img src={OrmEcommerceBackendImage2} alt="ecommerce backend 2" />
            </div>
            <div className="project-link">
              <div className="project-description">
                <p>Object Relational Mapping (ORM) E-Commerce Backend</p>
              </div>
              <div className="project-url">
                <a href="https://github.com/sjhudek/ecommerce_store">Github</a>
                <br />
                <a href="https://youtu.be/AOM6bIKzxbo">Video Demo</a>
              </div>
            </div>
          </div>
          {/* end orm backend */}

          {/* begin employee tracker */}
          <div className="project-row" id="row-5">
            <div className="project-image project-image-1">
              <img src={EmployeeTrackerImage} alt="employees tracker" />
            </div>
            <div className="project-link">
              <div className="project-description">
                <p>Employee Tracker</p>
              </div>
              <div className="project-url">
                <a href="https://github.com/sjhudek/eetracker">Github</a>
                <br />
                <a href="https://youtu.be/0McSQCIPzdA">Video Demo</a>
              </div>
            </div>
          </div>
          {/* end employee tracker */}

          {/* Repeat .project-row divs as necessary */}
        </div>
      </div>
      <button onClick={openModal} className="modal-button">Open Modal</button>
      
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <p>Modal Content Here!</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Portfolio
