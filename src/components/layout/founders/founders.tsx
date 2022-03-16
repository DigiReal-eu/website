import React from "react";
import "./founders.scss";

import BuasLogo from "../../../assets/images/breda-university.png";
import FontysLogo from "../../../assets/images/fontys-hogeschool-ict.png";
import MindlabsLogo from "../../../assets/images/mindlabs.png";
import SiaLogo from "../../../assets/images/sia-regieorgaan.png";

const Founders = () => {
    return (
        <div className="founders">
            <p>DE GRONDLEGGERS</p>
            <div className="founders__images">
                <img className="founders__image" src={FontysLogo} />
                <img className="founders__image" src={BuasLogo} />
                <img className="founders__image" src={MindlabsLogo} />
                <img className="founders__image" src={SiaLogo} />
            </div>
        </div>
    );
};

export default Founders;
