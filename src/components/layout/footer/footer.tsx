import React from "react";
import "./footer.scss";
import DigirealSmallLogo from "../../../assets/images/digireal_logo_small.png";

const Footer = () => {
    return (
        <div className="footer">
            <img className="footer__image" src={DigirealSmallLogo} />
            <p>More coming soon!</p>
        </div>
    );
};

export default Footer;
