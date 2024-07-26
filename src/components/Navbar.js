import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.theme} navbar-${props.theme} fixed-top`}>
      <div className="container-fluid">
        <img src={`${process.env.PUBLIC_URL}/TM-favicon.png`} alt="TM Logo" style={{ width: '30px', marginRight: '8px' }} />
        <a className="navbar-brand" href='/'> {props.title} </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to='/' style={{ color: props.theme === "light" ? "black" : "white" }}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/about' style={{ color: props.theme === "light" ? "black" : "white" }}>About</NavLink>
            </li>
          </ul>
        </div>
        <div className={`form-check form-switch text-${props.theme === "light" ? "dark" : "light"}`}>
          <input className="form-check-input" type="checkbox" role="switch" onClick={props.handleTheme} />
          <label className="form-check-label">{props.theme === "light" ? "Enable Dark Mode" : "Enable Light Mode"}</label>
        </div>
      </div>
    </nav>
  );
}
