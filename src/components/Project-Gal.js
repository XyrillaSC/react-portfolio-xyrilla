import React from 'react';
import data from '../data.js'
const { projects, pages } = data;
function Gallery() {
  return (
    <div className="port-box-holder">
      <a class="port-box" href="https://cat-scratch-feev.github.io/Catterday/index.html">
            <figure>
                <img src="..\images\cat-scratch-feev.github.io_Catterday_index.html (1).png" alt="pink placeholder"></img>
                <p>
                    CATTERDAY
                </p>
            </figure>
        </a>
        <a class="port-box" href="https://somniary-00225b8202c3.herokuapp.com/landing">
            <figure>
                <img src="../images/landing.png" alt="pink placeholder"></img>
                <p>
                    SOMNIARY
                </p>
            </figure>
        </a>
        <a class="port-box" href="#">
            <figure>
                <img src="../images/placeholder.png" alt="pink placeholder"></img>
                <p>
                    Project
                </p>
            </figure>
        </a>
        <a class="port-box" href="#">
            <figure>
                <img src="../images/placeholder.png" alt="pink placeholder"></img>
                <p>
                    Project
                </p>
            </figure>
        </a>
        <a class="port-box" href="#">
            <figure>
                <img src="../images/placeholder.png" alt="pink placeholder"></img>
                <p>
                    Project
                </p>
            </figure>
        </a>
        <a class="port-box" href="#">
            <figure>
                <img src="../images/placeholder.png" alt="pink placeholder"></img>
                <p>
                    Project
                </p>
            </figure>
        </a>
    </div>
  );
}

export default Gallery;
