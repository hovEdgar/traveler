import Button from "./Button";
import videoMove from "../images/video-1.mp4"

import "./HeroSection.css";

const HeroSection = () => {
    return (
        <div className="hero-container">
            <video src={videoMove} autoPlay loop muted/>
            <h1>BIG JOURNEY GET STARTED</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button
                    className="btns"
                    buttonStyle="btn--outline"
                    buttonSize="btn--large"
                >GET STARTED</Button>
                <Button
                    className="btns"
                    buttonStyle="btn--primary"
                    buttonSize="btn--large"
                >
                    WATCH TRAILER <i className="fa fa-play-circle"/>
                </Button>
            </div>
        </div>
    );
};

export default HeroSection;