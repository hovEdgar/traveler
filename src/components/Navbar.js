import {useState, useCallback, useEffect} from "react";
import {Link} from "react-router-dom";
import Button from "./Button";

import "./Navbar.css";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [showButton, setShowButton] = useState(true);

    const clickHandler = () =>  setClick(prevState => !prevState);
    const closeMobileMenu = () => setClick(false);

    const showButtonHandler = () => {
        if (window.innerWidth > 960) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    useEffect(() => {
        showButtonHandler();
    }, [])

    window.addEventListener("resize", useCallback(showButtonHandler, []));

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        {"Travel{er}"} <i className="fab fa-typo3"/>
                    </Link>
                </div>
                <div className="menu-icon" onClick={clickHandler}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"}/>
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                            Services
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                            Products
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                            Sign up
                        </Link>
                    </li>
                </ul>
                {showButton && <Button>Sign in</Button>}
            </nav>
        </>

    );
};


export default Navbar;