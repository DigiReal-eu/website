import React from 'react';
import './footer.scss';
import { useTranslation } from 'react-i18next';
import DigirealLogo from '../../../assets/images/digireal_logo_small.png';

function Footer() {
    const { t } = useTranslation();

    return (
        <div className="footer">
            <div className="footer-left">
                <img className="footer__image" src={DigirealLogo} alt="Digireal Logo" />
                <p className="footer__imageText">{t('home.coming_soon')}</p>
            </div>
            <div className="spacer" />
            <div className="footer-right">
                <p>
                    Contact: &nbsp;&nbsp;
                    <a className="footer-email" href="mailto:info@example.com">
                        info@example.com
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Footer;
