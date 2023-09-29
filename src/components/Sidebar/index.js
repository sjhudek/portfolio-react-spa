import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import Avatar from '../../assets/images/avataaars-1.png'
// import LogoSubtitle from '../../assets/images/logo_sub.png'
import { 
    FontAwesomeIcon 
} from '@fortawesome/react-fontawesome'

import { 
    faHome, 
    faUser, 
    faEnvelope,
    faBriefcase,
    faFile,

} from '@fortawesome/free-solid-svg-icons'

import {
  faLinkedinIn,
  faGithub,
  // faYoutube,
  // faSkype,
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="avatar" to="/">
      <img src={Avatar} alt="avatar" />
      {/* <img className="sub-logo" src={LogoSubtitle} alt="steve" /> */}
    </Link>
    <nav>
      <NavLink
        exact='true'
        activeclassname="active"
        to="/"
      >
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>

      <NavLink
        exact='true'
        activeclassname="active"
        className="portfolio-link"
        to="/portfolio"
      >
        <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
      </NavLink>

      <NavLink
        exact='true'
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>

      <NavLink
        exact='true'
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>

      <NavLink
        exact='true'
        activeclassname="active"
        className="resume-link"
        to="/resume"
      >
        <FontAwesomeIcon icon={faFile} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/stevehudek/"
        >
          <FontAwesomeIcon icon={faLinkedinIn} color="#4d4d4e" />{' '}
          {/* Updated icon name */}
        </a>
      </li>

      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/sjhudek"
        >
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />{' '}
          {/* Updated icon name */}
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar;
