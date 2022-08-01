import "./Button.css";
import {Link} from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

const Button = ({children, buttonStyle, buttonSize, onClick, type}) => {
    const checkBtnStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkBtnSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to="/sign-up" className="btn-mobile">
            <button type={type} className={`btn ${checkBtnStyle} ${checkBtnSize}`} onClick={onClick}>
                {children}
            </button>
        </Link>
    );
};

export default Button;