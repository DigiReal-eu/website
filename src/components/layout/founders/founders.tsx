import React from 'react';
import './founders.scss';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SectionTitle from '../../shared/section-title/section-title';
import {
    BuasLogo, SiaLogo, MindlabsLogo, FontysLogo,
} from './images';

function Founders() {
    const { t } = useTranslation();

    return (
        <div className="founders">
            {/* <SectionTitle title={t('home.founders')} /> */}

            <SectionTitle>{t('home.founders')}</SectionTitle>

            <div className="founders__images">
                <img className="founders__image" src={BuasLogo} alt="Buas Logo" />
                <img className="founders__image" src={FontysLogo} alt="Fontys Logo" />
                <img className="founders__image" src={MindlabsLogo} alt="Mindlabs Logo" />
                <img className="founders__image" src={SiaLogo} alt="Sia Logo" />
            </div>
            <Link style={{ textDecoration: 'none' }} to="/partners" className="founders__button">
                {t('home.view_partners')}
            </Link>
        </div>
    );
}

export default Founders;
