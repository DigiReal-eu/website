import React, { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { t } from 'i18next';
import Footer from '../../components/layout/footer/footer';
import Founders from '../../components/layout/founders/founders';
import Header from '../../components/layout/header/header';
import SectionTitle from '../../components/shared/section-title/section-title';
import './home.scss';

function Home() {
    const { i18n } = useTranslation();

    const [language, setLanguage] = useState(i18n.language);
    const [languageFull, setLanguageFull] = useState(i18n.language === 'nl-NL' ? 'English' : 'Nederlands');

    const toggleLanguage = () => {
        if (language === 'nl-NL') {
            i18n.changeLanguage('en').then(() => {
                setLanguage('en');
                setLanguageFull('Nederlands');
            });
        } else if (language === 'en') {
            i18n.changeLanguage('nl-NL').then(() => {
                setLanguage('nl-NL');
                setLanguageFull('English');
            });
        } else {
            i18n.changeLanguage('nl-NL').then(() => {
                setLanguage('nl-NL');
                setLanguageFull('English');
            });
        }
    };

    return (
        <div className="home">
            <Header />

            <div className="pageHeader">
                <button type="button" className="language" onClick={toggleLanguage}>
                    {languageFull}
                </button>
            </div>

            <div className="container">
                <div className="content">
                    <p className="content">
                        <Trans i18nKey="home.who_are_we">
                            <a href="https://www.nwo.nl/en/key-enabling-technologies" target="_blank" rel="noreferrer">
                                {' '}
                            </a>
                            <a href="https://www.buas.nl/onderzoek" target="_blank" rel="noreferrer">
                                {' '}
                            </a>
                            <a
                                href="https://www.sia-projecten.nl/project/digireal-xl-research-development-and-innovation-center-on-digital-realities-for-societal-economic-impact"
                                target="_blank"
                                rel="noreferrer"
                            >
                                {' '}
                            </a>
                            <a href="https://regieorgaan-sia.nl/financiering/sprong/" target="_blank" rel="noreferrer">
                                {' '}
                            </a>
                            <a href="https://www.mind-labs.eu/" target="_blank" rel="noreferrer">
                                {' '}
                            </a>
                            <a href="https://www.digishape.nl/" target="_blank" rel="noreferrer">
                                {' '}
                            </a>
                            <a href="https://smartvenue.nl/chronosphere/" target="_blank" rel="noreferrer">
                                {' '}
                            </a>
                            <Link to="/partners" />
                        </Trans>
                    </p>
                </div>
            </div>
            <SectionTitle>{t('home.founders')}</SectionTitle>
            <Founders />

            <Footer />
        </div>
    );
}

export default Home;
