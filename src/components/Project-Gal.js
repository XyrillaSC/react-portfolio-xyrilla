import React from 'react';
function Gallery() {
    return (
        <div className="port-box-holder">
            <div className="port-box">
                <figure>
                    <p>CATTERDAY</p>
                    <a href="https://cat-scratch-feev.github.io/Catterday/index.html">
                        <img src="..\images\cat-scratch-feev.github.io_Catterday_index.html (1).png" alt="catterday home page"></img>
                    </a>
                    <a href="https://github.com/Cat-Scratch-Feev/Catterday">Repo</a>
                </figure>
            </div>

            <div className="port-box">
                <figure>
                    <p>SOMNIARY</p>
                    <a href="https://somniary-00225b8202c3.herokuapp.com/landing">
                        <img src="../images/landing.png" alt="somniary landing page"></img>
                    </a>
                    <a href="https://github.com/Cat-Scratch-Feev/somniary">Repo</a>
                </figure>
            </div>

            <div className="port-box">
                <figure>
                    <p>Weather Search</p>
                    <a href="https://xyrillasc.github.io/weather-search-mod6-xyrilla/">
                        <img src="../images/weather.png" alt="weather search home"></img>
                    </a>
                    <a href="https://github.com/XyrillaSC/weather-search-mod6-xyrilla">Repo</a>
                </figure>
            </div>
            <div className="port-box">
                <figure>
                    <p>Day Planner</p>
                    <a href="https://xyrillasc.github.io/day-plan-mod5-xyrilla/">
                        <img src="../images/dayplan.png" alt="dayplanner"></img>
                    </a>
                    <a href="https://github.com/XyrillaSC/day-plan-mod5-xyrilla">Repo</a>
                </figure>
            </div>
            <div className="port-box">
                <figure>
                    <p>Placeholder</p>
                    <a href="#">
                        <img src="../images/placeholder.png" alt="pink placeholder"></img>
                    </a>
                    <a href="#">Repo</a>
                </figure>
            </div>
            <div className="port-box">
                <figure>
                    <p>Placeholder</p>
                    <a href="#">
                        <img src="../images/placeholder.png" alt="pink placeholder"></img>
                    </a>
                    <a href="#">Repo</a>
                </figure>
            </div>
        </div>
    );
}

export default Gallery;
