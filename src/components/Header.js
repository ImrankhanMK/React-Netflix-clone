import React from 'react';
import InputComponent from './InputComponent';
import image from '../images/netflix.png'

export default function Header() {
  return (
    <div id="header">
        <div id="menubar">
          <img src={image} alt="preview"></img>
          <div id="menubar-div">
              <button id="btn1"><i className="bi bi-globe"></i> English <i class="bi bi-caret-down-fill"></i></button>
              <button id="btn2">Sign In</button>
          </div>
        </div>
        <div id='header-info'>
          <p>Unlimited movies, TV<br/> shows and more.</p>
          <h3>Watch anywhere. Cancel anytime.</h3>
        </div>
        <InputComponent/>
    </div>
  )
}
