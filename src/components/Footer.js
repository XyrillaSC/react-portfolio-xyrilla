import React from 'react';
import data from '../data.js'
const { projects, pages } = data;
function Footer() {
  return (
    <footer className="footer">
      <h3>You can find me in the places listed below! Hope to see you there!</h3>
      <div className='links-holder'>
        <p>Github</p>
        <p>Linkedin</p>
        <p>Twitter</p>
      </div>
    </footer>
  );
}

export default Footer;
