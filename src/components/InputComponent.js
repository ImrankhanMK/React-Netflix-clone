import React from 'react';

export default function InputComponent() {
  return (
    <div id="inputcom-div" >
      <div id='input1'>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
      </div>
      <div id="input2">
        <div id='input2-1'>
          <input type="text" required="required"/>
          <label>Email address</label> 
        </div>
        <div id='input2-2'>
          <button id='input-btn'>Get Started <i class="bi bi-chevron-right"></i></button>
        </div>
      </div>
      
    </div>
  )
}
