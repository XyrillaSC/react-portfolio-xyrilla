import React from 'react';
import screen from "../images/screen.png"
function About() {
  return (
    <div className='about'>
      <div className='sidebar'>
        <img src={screen} alt="little green screen guy"></img>
        <h2>Hi there!</h2>
      </div>
      <div className="abo-textbox">
        <p>My name is Skylar Kramer!
          <br>
          </br>
          <br>
          </br>
          I'm an aspiring programmer and game dev as well as a writer and world-builder.</p>
      </div>
    </div>
  );
}

export default About;
