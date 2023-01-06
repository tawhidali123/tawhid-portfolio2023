import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router} from 'react-router-dom';
/* eslint-disable no-unused-vars */
import Nav from './Components/Nav/Nav';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Social from './Components/Social/Social';
import Footer from './Components/Footer/Footer';
/* eslint-enable no-unused-vars */

import './styles/global.scss';
// eslint-disable-next-line no-unused-vars
import * as bootstrap from 'bootstrap';

const Portfolio = () => {
    return(
        <Router>
            <div className="portfolio-container">
                <Nav></Nav>
                <main>
                    <Hero></Hero>
                    <About></About>
                    <Projects></Projects>
                    <Social></Social>
                </main>
                <Footer></Footer>
            </div>
        </Router>
    );
}

const container  = document.getElementById("portfolio");
const root  = ReactDOM.createRoot(container);
root.render(React.createElement(Portfolio));