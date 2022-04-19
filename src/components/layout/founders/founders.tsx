import React from 'react';
import './founders.scss';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {
    BuasLogo, MindlabsLogo, FontysLogo,
} from '../../../Shared/images';

function Founders() {
    const { t } = useTranslation();

    return (
        <div className="founders">
            <div className="founders__images">
                <img className="founders__image" src={BuasLogo} alt="Buas Logo" />
                <img className="founders__image" src={FontysLogo} alt="Fontys Logo" />
                <img className="founders__image" src={MindlabsLogo} alt="Mindlabs Logo" />
            </div>
            <Link to="/partners" className="founders__button">
                {t('home.view_partners')}
                <FontAwesomeIcon className="founders__button__icon" icon={faArrowRight} />
            </Link>
        </div>
    );
}

export default Founders;
