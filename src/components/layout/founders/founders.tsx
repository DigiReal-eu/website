import React from 'react';
import './founders.scss';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../../shared/section-title/section-title';
import {BuasLogo, SiaLogo, MindlabsLogo, FontysLogo} from "./images";
import {Link} from "react-router-dom";

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
            <Link style={{textDecoration: 'none'}} to="/partners" className="founders__button">{t('founders.button')}</Link>
        </div>
    );
}

export default Founders;
