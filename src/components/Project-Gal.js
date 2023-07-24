import React from 'react';
import data from '../data.js'
const { projects, pages } = data;
function Gallery() {
  return (
    <div className="frame-holder">
      <div className='frame'>
        <p>1</p>
      </div>
      <div className='frame'>
        <p>2</p>
      </div>
      <div className='frame'>
        <p>3</p>
      </div>
      <div className='frame'>
        <p>4</p>
      </div>
      <div className='frame'>
        <p>5</p>
      </div>
      <div className='frame'>
        <p>6</p>
      </div>
      
    </div>
  );
}

export default Gallery;
