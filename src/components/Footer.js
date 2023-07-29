import React from 'react';
import data from '../data.js'
const { projects, pages } = data;
function Footer() {
  return (
    <footer className="footer">

      <div className='links-holder'>
        <a>Github</a>
        <a>Linkedin</a>
        <a>Twitter</a>
      </div>
    </footer>
  );
}

export default Footer;
