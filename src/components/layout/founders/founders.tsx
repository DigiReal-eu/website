import React from 'react';
import './founders.scss';
import { useTranslation } from 'react-i18next';
import BuasLogo from '../../../assets/images/Logo BUas_Black.png';
import FontysLogo from '../../../assets/images/fontysict-logo-black-nl.png';
import MindlabsLogo from '../../../assets/images/Logo_Mindlabs-black.jpg';
import SiaLogo from '../../../assets/images/Logo SIA_zwart.png';
import SectionTitle from '../../shared/section-title/section-title';

function Founders() {
    const { t } = useTranslation();

    return (
        <div className="founders">
            <SectionTitle title={t('home.founders')} />
            <div className="founders__images">
                <img
                    className="founders__image"
                    src={FontysLogo}
                    alt="Fontys Logo"
                />
                <img
                    className="founders__image"
                    src={BuasLogo}
                    alt="Buas Logo"
                />
                <img
                    className="founders__image"
                    src={MindlabsLogo}
                    alt="Mindlabs Logo"
                />
                <img
                    className="founders__image"
                    src={SiaLogo}
                    alt="Sia Logo"
                />
            </div>
            <button type="button" className="founders__button">Bekijk partners </button>
        </div>
    );
}

export default Founders;
