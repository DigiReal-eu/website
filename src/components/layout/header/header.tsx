import React from "react";
import "./header.scss";
import HeaderLogo from "../../../assets/images/digireal_logo_full.png";

const Header = () => {
    return (
        <div className="header">
            <div className="subHeader">
                <div className="header__images">
                    <img className="header__logo" src={HeaderLogo} alt="Digireal Logo" />
                </div>
            </div>

        </div>
    );
};

export default Header;
