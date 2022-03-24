import React from 'react';
import './founders.scss';
import BuasLogo from '../../../assets/images/breda-university.png';
import FontysLogo from '../../../assets/images/fontys-hogeschool-ict.png';
import MindlabsLogo from '../../../assets/images/mindlabs.png';
import SiaLogo from '../../../assets/images/sia-regieorgaan.png';
import SectionTitle from '../../shared/section-title/section-title';

function Founders() {
    return (
        <div className="founders">
            <SectionTitle title="De Grondleggers" />
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
