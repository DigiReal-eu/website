import React, { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import './changeLanguageButton.scss';

function ChangeLanguageButton() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (e: ChangeEvent<HTMLInputElement>) => {
        i18n.changeLanguage(e.target.value);
    };

    return (
        <div className="changeLanguageButton" onChange={changeLanguage}>
            <input type="radio" value="en" name="language" />
            {' '}
            English
            <input type="radio" value="nl" name="language" defaultChecked />
            {' '}
            Dutch
        </div>
    );
}

export default ChangeLanguageButton;
