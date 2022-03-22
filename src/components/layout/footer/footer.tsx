import React from 'react';
import './footer.scss';
import DigirealLogo from '../../../assets/images/digireal_logo_full.png';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-left">
                <img
                    className="footer__image"
                    src={DigirealLogo}
                    alt="Digireal Logo"
                />
                <p>More coming soon!</p>
            </div>
            <div className="spacer" />
            <div className="footer-right">
                <p>
                    Contact: &nbsp;&nbsp;
                    <a className="footer-email" href="mailto:info@example.com">info@example.com</a>
                </p>
            </div>
        </div>
    );
}

export default Footer;
