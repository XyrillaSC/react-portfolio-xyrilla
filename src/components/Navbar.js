import React from 'react';

function Navbar(props) {
  const { onAboutClick, onGalleryClick, onContactClick } = props;

  return (
    <nav>
      <a onClick={onAboutClick}>About Me</a>
      <a onClick={onGalleryClick}>Gallery</a>
      <a onClick={onContactClick}>Contact</a>
    </nav>
  );
}
export default Navbar;
