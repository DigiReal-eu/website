import React from 'react';
import './header.scss';
import '../../../App.scss';
import HeaderLogo from '../../../assets/images/digireal_logo_small.png';

function Header() {
    return (
        <div className="header">
            <div className="subHeader">
                <div className="header__images">
                    <img
                        className="header__logo"
                        src={HeaderLogo}
                        alt="DigiReal logo"
                    />
                </div>
            </div>

        </div>
    );
}

export default Header;
