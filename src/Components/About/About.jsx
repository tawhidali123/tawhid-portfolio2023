import React from "react";

import webSVG from '../../Images/web.svg';
import loveSVG from '../../Images/love.svg';
import responsiveSVG from '../../Images/responsive.svg';
import meImg from '../../Images/me.jpeg';


// // import Liquid Fill Gauge;
import liquidFillGauge from "./liquidFillGauge";

// import styles
import "./About.scss";





class About extends React.Component{
    constructor(props){
        super(props);

        this.state = {};
    }


    render(){
        const expertise = {
            web: {
                svg: webSVG
            },
            responsive: {
                svg : responsiveSVG
            },

            love: {
                svg : loveSVG 
            }
        }

        return(
            <div className="about" id="about">
                <div className="about-container">
                    <div className="about-info-wrapper">
                        <div className="about-img">
                            <div>
                                <img src={meImg}></img>
                            </div>
                        </div>
                        <div className="about-copy">
                            <div className="text">
                                <h2> About Me </h2>
                                <p>Full stack web developer with a passion for making diverse applications.  With experience in Ruby on Rails, JavaScript, and React with a background in Research Analysis, I discovered web development through making my own eCommerce site. I bring strong skills in leadership and communication that help industries scale their agendas or ideas to the public through the power of Web Development. Published Tech blogger with ‘Noteworthy The Journal Blog’ and ‘The Startup’ in Medium. <br></br><span> #softwareEngineer </span></p>
                            </div>
                            <div className="expertise">
                                <div>
                                    <object id="responsive-svgas" type="image/svg+xml" data={ expertise.responsive.svg }></object>
                                    <p>Responsive Design</p>
                                </div>

                                <div>
                                    <object id="web-svg" type="image/svg+xml" data={ expertise.web.svg }></object>
                                    <p>W3 Web Standards</p>
                                </div>

                                <div>
                                    <object id="love-svg" type="image/svg+xml" data={ expertise.love.svg }></object>
                                    <p>Code With LOVE</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="about-skills-wrapper">

                        <div className="skill">
                            <svg id="html" ></svg>
                            <p>HTML</p>
                        </div>

                        <div className="skill">
                            <svg id="css" ></svg>
                            <p>CSS</p>
                        </div>

                        <div className="skill">
                            <svg id="js" ></svg>
                            <p>JavaScript</p>
                        </div>

                        <div className="skill">
                            <svg id="python" ></svg>
                            <p>Python</p>
                        </div>

                        <div className="skill">
                            <svg id="Rails" ></svg>
                            <p>Ruby on Rails</p>
                        </div>

                        <div className="skill">
                            <svg id="scss" ></svg>
                            <p>SCSS / LESS</p>
                        </div>


                        <div className="skill">
                            <svg id="react" ></svg>
                            <p>React / Redux</p>
                        </div>

                        <div className="skill">
                            <svg id="node" ></svg>
                            <p>Node / NPM</p>
                        </div>

                        <div className="skill">
                            <svg id="jwt" ></svg>
                            <p>JWT / Bcrypt Auth</p>
                        </div>

                        <div className="skill">
                            <svg id="sql" ></svg>
                            <p>SQL</p>
                        </div>
                        
                        <div className="skill">
                            <svg id="postgres" ></svg>
                            <p>Postgres</p>
                        </div>

                        <div className="skill">
                            <svg id="passion" ></svg>
                            <p className="bold-text">Passion To Learn</p>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

    componentDidMount(){

        let createGauge = (eleTarget, percent, config) => {

            let randomWaveHeight = Math.random();

            let customDefaultSettings = {
                waveTextColor: "#fff",
                textColor: "#000",
                circleColor: "#000",
                textSize: .65,
                waveColor: "#eb5757",
                waveHeight: ( randomWaveHeight > .009 && randomWaveHeight > .7) ? .05 : randomWaveHeight
            }


            let settings = {
                ...liquidFillGauge.liquidFillGaugeDefaultSettings(),
                ...customDefaultSettings,
                ...config
            };

            let gauge = liquidFillGauge.loadLiquidFillGauge(eleTarget, percent, settings);

            window.addEventListener("resize", () => {
                gauge.update(percent);
                console.log("updated gauge translate");
            })
            return gauge;
        }

        /* eslint-disable no-unused-vars */
        let html = createGauge("html", 90);
        let css =  createGauge("css", 88);
        let js =  createGauge("js", 87);
        let python =  createGauge("python", 69);
        let php =  createGauge("rails", 85);
        let node =  createGauge("node", 70);
        let scss =  createGauge("scss", 80);
        let react = createGauge("react", 85);
        let webpack = createGauge("jwt", 75);
        let seo = createGauge("sql", 80);
        let wordpress = createGauge("postgres", 85);

        let passion = createGauge("passion", 100, {
            textColor: "rgba(#eb5757, .9)",
            waveColor: "#000",
            waveTextColor: "#fff",
            circleColor: "#eb5757",
            textSize: 1
        });
    }   
}


export default About;