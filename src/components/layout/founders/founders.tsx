import React from 'react';
import './founders.scss';
import { useTranslation } from 'react-i18next';
import BuasLogo from '../../../assets/images/breda-university.png';
import FontysLogo from '../../../assets/images/fontys-hogeschool-ict.png';
import MindlabsLogo from '../../../assets/images/mindlabs.png';
import SiaLogo from '../../../assets/images/sia-regieorgaan.png';
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
                <img className="founders__image" src={SiaLogo} alt="Sia Logo" />
            </div>
        </div>
    );
}

export default Founders;
