import expensePlannerImg from '../../Images/expense-planner.png';
import memoryGameImg from '../../Images/memory-game.png';
import gitCardsImg from '../../Images/git.png';
import fitAliImg from '../../Images/fitali.png';
import allHddImg from '../../Images/allhdd.png';
import cryptoSearchImg from '../../Images/crypto-search.png';
import trashPandaImg from '../../Images/trash-panda.png';
import multiplierImg from '../../Images/multiplier-mania.png';
import edjSportsImg from '../../Images/edj-sports.png';
import preferredHotelImg from '../../Images/preferred-hotels.png';

import WOW from 'wowjs';

// import styles
import "./Projects.scss";

const projects = [
    {
        name : `Income-Expense Planner`,
        link : `https://tawhidali123.github.io/monthly_planner/`,
        img : {
            src : expensePlannerImg,
            alt : `Income Expense`
        }
    },

    {
        name : `Memory Game`,
        link : `https://tawhidmemorygame.herokuapp.com/`,
        img : {
            src : memoryGameImg,
            alt : `Memory Game`
        }
    },

    {
        name : `Github Cards`,
        link : `https://git-cards.herokuapp.com/`,
        img : {
            src : gitCardsImg,
            alt : `Github Cards`
        }
    },

    {
        name : `FitAli`,
        link : `https://fitali.netlify.com/`,
        img : {
            src : fitAliImg,
            alt : `HCI Live`
        }
    },

    {
        name : `ALLHDD`,
        link : `https://www.allhdd.com/`,
        img : {
            src : allHddImg,
            alt : `HCI Live`
        }
    },

    {
        name : `Crypto Search`,
        link : `https://crypto-search.netlify.app/`,
        img : {
            src : cryptoSearchImg,
            alt : `crypto search app`
        }
    },

    {
        name : `Trash Panda`,
        link : `https://trashpandaapp.com/`,
        img : {
            src : trashPandaImg,
            alt : `trash panda app`
        }
    },

    {
        name : `Multiplier Mania`,
        link : `https://ga.secondchancebonuszone.com/multipliermania/`,
        img : {
            src : multiplierImg,
            alt : `multiplier mania app`
        }
    },

    {
        name : `EDJ Sports Betting App`,
        link : `https://play.google.com/store/apps/details?id=com.edjsports.bettinganalytics&hl=en_US&gl=US&pli=1`,
        img : {
            src : edjSportsImg,
            alt : `EDJ sports betting app`
        }
    },

    {
        name : `Preferred Hotels`,
        link : `https://preferredhotels.com/`,
        img : {
            src : preferredHotelImg,
            alt : `preferred hotels app`
        }
    },

];

// eslint-disable-next-line no-unused-vars
const Card = props => {
    return(
        <div className="card wow fadeInUP">
            <div className="card-wrapper">
                <div className="card-front">
                    <img src={ props.img.src } alt={props.img.alt}></img>
                </div>
                <div className="card-back">
                    <div className="card-back-wrapper">
                        <a href={props.link} target="_blank">
                            <h5> { props.name } </h5>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {

    let loopCards = cards => {
        return cards.map( (card, key) =>{
            return <Card key={key} {...card}></Card>;
        })
    }

    const wowConfig = {
    
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       false,       // trigger animations on mobile devices (default is true)
        live:         true,       // act on asynchronously loaded content (default is true)
        callback:     function() {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null // optional scroll container selector, otherwise use window
    
    }

    const animateOnScroll = new WOW.WOW(wowConfig);

    animateOnScroll.init();

    return(
        <div id="projects" className="projects">
            <div className="projects-container">
                <div className="projects-wrapper">
                    <div className="project-heading">
                        <h2>Projects</h2>
                    </div>
                    <div className="project-section">
                        <div className="project-section-wrapper">
                            { loopCards(projects) }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;