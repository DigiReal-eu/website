import React from 'react';
import './footer.scss';
import DigirealSmallLogo from '../../../assets/images/digireal_logo_small.png';

function Footer() {
    return (
        <div className="footer">
            <img
                className="footer__image"
                src={DigirealSmallLogo}
                alt="Digireal Logo"
            />
            <p>More coming soon!</p>
        </div>
    );
}

export default Footer;
