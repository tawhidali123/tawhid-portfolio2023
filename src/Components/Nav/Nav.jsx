import { useState } from 'react';
// import styles;
import './Nav.scss';

const Navigation = () => {
    const [stickyNav, setStickyNav] = useState(false);

    window.onscroll = () => {
        const header = document.querySelector('.HeroContent a').offsetTop + 60;
        const top = window.scrollY;

        if (top >= header) {
            setStickyNav(true);
        } else {
            setStickyNav(false);
        }
    }

    return(
        <header className="header" id="header">
            <nav className={`nav ${stickyNav ? 'sticky' : ''}`}>
                <div className="nav-left">
                    <p className="full-name h1">
                        <a href="#header">
                            <span className="first-name hide-mobile">Tawhid Ali</span>
                            <span className="first-name hide-desktop">TA</span>
                        </a>
                    </p>
                </div>
                <div className="nav-right">
                    <ul>
                        <li className="nav-item"> <a href="#about">About </a> </li>
                        <li className="nav-item"> <a href="#projects">Projects </a> </li>
                    </ul>
                    <button className="contact-btn" data-bs-toggle="modal" data-bs-target="#myModal">
                        <span className="copy">Contact Me </span> 
                        <span className="icons"> 
                            <span className="mail fas fa-envelope"> </span>
                            <span className="phone fas fa-mobile-alt"></span>
                        </span>
                    </button>
                </div>

            </nav>

            <div className="modal fade contact-modal" id="myModal" tabindex="-1">
                <button type="button" className="close contact-modal-close" data-bs-dismiss="modal">&times;</button>
                <div className="modal-dialog contact-modal-container modal-md">
                    <div className="modal-content contact-modal-wrapper">

                        <div className="modal-body contact-modal-body">
                            <div className="modal-body--wrapper">
                                <div className="left">
                                    <p className="h1">Tawhid Ali</p>
                                </div>

                                <div className="right">
                                    <div>
                                        <a href="mailto:tawhidali126@gmail.com?subject=Hello Tawhid">                            
                                            <span className="mail fas fa-envelope"></span>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="tel:3473074531">
                                            <span className="phone fas fa-mobile-alt"></span>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </header>
    )
}


export default Navigation;