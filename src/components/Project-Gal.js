import React from 'react';
import catScratchImage from '../images/cat-scratch-feev.github.io_Catterday_index.html (1).png';
import landingImage from '../images/landing.png';
import weatherImage from '../images/weather.png';
import dayPlanImage from '../images/dayplan.png';
import placeholderImage from '../images/placeholder.png';
function Gallery() {
    return (
        <div className="port-box-holder">
            <div className="port-box">
                <figure>
                    <p>CATTERDAY</p>
                    <a href="https://cat-scratch-feev.github.io/Catterday/index.html">
                        <img src={catScratchImage} alt="catterday home page"></img>
                    </a>
                    <a href="https://github.com/Cat-Scratch-Feev/Catterday">Repo</a>
                </figure>
            </div>

            <div className="port-box">
                <figure>
                    <p>SOMNIARY</p>
                    <a href="https://somniary-00225b8202c3.herokuapp.com/landing">
                        <img src={landingImage} alt="somniary landing page"></img>
                    </a>
                    <a href="https://github.com/Cat-Scratch-Feev/somniary">Repo</a>
                </figure>
            </div>

            <div className="port-box">
                <figure>
                    <p>Weather Search</p>
                    <a href="https://xyrillasc.github.io/weather-search-mod6-xyrilla/">
                        <img src={weatherImage} alt="weather search home"></img>
                    </a>
                    <a href="https://github.com/XyrillaSC/weather-search-mod6-xyrilla">Repo</a>
                </figure>
            </div>
            <div className="port-box">
                <figure>
                    <p>Day Planner</p>
                    <a href="https://xyrillasc.github.io/day-plan-mod5-xyrilla/">
                        <img src={dayPlanImage} alt="dayplanner"></img>
                    </a>
                    <a href="https://github.com/XyrillaSC/day-plan-mod5-xyrilla">Repo</a>
                </figure>
            </div>
            <div className="port-box">
                <figure>
                    <p>Placeholder</p>
                    <a href="#">
                        <img src={placeholderImage} alt="pink placeholder"></img>
                    </a>
                    <a href="#">Repo</a>
                </figure>
            </div>
            <div className="port-box">
                <figure>
                    <p>Placeholder</p>
                    <a href="#">
                        <img src={placeholderImage} alt="pink placeholder"></img>
                    </a>
                    <a href="#">Repo</a>
                </figure>
            </div>
        </div>
    );
}

export default Gallery;
