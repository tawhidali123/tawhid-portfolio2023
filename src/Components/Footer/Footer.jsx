// import styles
import "./Footer.scss";

const Footer = () => {
    let date = new Date().getFullYear()
    return(
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-wrapper">
                    <ul>
                        <li><a href="https://github.com/tawhidali123" target="_blank"><span className="fab fa-github-square"></span></a></li>
                        <li><a href="https://www.linkedin.com/in/tawhid-ali-889a90ba/" target="_blank"><span className="fab fa-linkedin"></span></a></li>
                    </ul>
                    <p>&copy; {date} Tawhid Ali</p>
                </div>
            </div>
        </footer>
    )
};

export default Footer;