import {Link} from "react-router-dom";
import Button from "./Button";

import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Adventure newsletter to receive latest updates
                </p>
                <p className="footer-subscription-text">
                    You also can unsubscribe at any time you wish
                </p>
                <div className="footer-input">
                    <form>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your email"
                            className="footer-input"
                        />
                        <Button buttonStyle="btn--outline">SUBSCRIBE</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About us</h2>
                        <Link to="/">How it works</Link>
                        <Link to="/">Reviews</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Terms of Service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact us</h2>
                        <Link to="/">Contacts</Link>
                        <Link to="/">Support</Link>
                        <Link to="/">Destinations</Link>
                        <Link to="/">Plans</Link>
                        <Link to="/">Sponsorship</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <Link to="/">Subscribe on Facebook</Link>
                        <Link to="/">Subscribe on Instagram</Link>
                        <Link to="/">Subscribe on Youtube</Link>
                        <Link to="/">Subscribe on Twitter</Link>
                        <Link to="/">Subscribe on Linkedin</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Videos</h2>
                        <Link to="/">Submit video</Link>
                        <Link to="/">Trailers</Link>
                        <Link to="/">Trips</Link>
                        <Link to="/">Ambassadors</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div>
                        <Link to="/" className="social-logo">
                            {"Travel{er}"} <i className="fab fa-typo3"/>
                        </Link>
                    </div>
                    <small>
                        <a
                            href="https://www.linkedin.com/in/edgar-hovsepyan-9ba0b3233/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {"Travel{er} by Edgar Hovsepyan © 2022"}
                        </a>
                    </small>
                    <div className="social-icons">
                        <Link
                            to="/"
                            className="social-icon-link facebook"
                            target="_blank"
                            aria-label="facebook"
                        >
                            <i className="fab fa-facebook-f"/>
                        </Link>
                        <Link
                            to="/"
                            className="social-icon-link instagram"
                            target="_blank"
                            aria-label="Instagram"
                        >
                            <i className="fab fa-instagram"/>
                        </Link>
                        <Link
                            to="/"
                            className="social-icon-link youtube"
                            target="_blank"
                            aria-label="Youtube"
                        >
                            <i className="fab fa-youtube"/>
                        </Link>
                        <Link
                            to="/"
                            className="social-icon-link twitter"
                            target="_blank"
                            aria-label="Twitter"
                        >
                            <i className="fab fa-twitter"/>
                        </Link>
                        <Link
                            to="/"
                            className="social-icon-link linkedin"
                            target="_blank"
                            aria-label="Linkedin"
                        >
                            <i className="fab fa-linkedin"/>
                        </Link>
                        <Link
                            to="/"
                            className="social-icon-link google"
                            target="_blank"
                            aria-label="Google"
                        >
                            <i className="fab fa-google"/>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Footer;