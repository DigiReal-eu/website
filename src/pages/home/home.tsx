import React, { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Link } from 'react-router-dom';
import Footer from '../../components/layout/footer/footer';
import Founders from '../../components/layout/founders/founders';
import Header from '../../components/layout/header/header';
import './home.scss';

function Home() {
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState('nl');
    const [languageFull, setLanguageFull] = useState('English');

    const toggleLanguage = () => {
        if (language === 'nl') {
            i18n.changeLanguage('en').then(() => {
                setLanguage('en');
                setLanguageFull('Nederlands');
            });
        }
        if (language === 'en') {
            i18n.changeLanguage('nl').then(() => {
                setLanguage('nl');
                setLanguageFull('English');
            });
        }
    };

    return (
        <div className="home">
            <Header />

            <div className="pageHeader">
                <button
                    type="button"
                    className="language"
                    onClick={toggleLanguage}
                >
                    {languageFull}
                </button>
            </div>

            <div className="container">
                <div className="title">
                    <p>{t('home.welcome_to')}</p>
                    <h1>
                        DIGI
                        <b>REAL</b>
                    </h1>
                </div>

                <div className="content">
                    <p className="content">
                        <Trans i18nKey="home.who_are_we">
                            <a
                                href="https://www.nwo.nl/en/key-enabling-technologies"
                                target="_blank"
                                rel="noreferrer"
                            >
                                {' '}
                            </a>
                            <a
                                href="https://www.buas.nl/onderzoek"
                                target="_blank"
                                rel="noreferrer"
                            >
                                {' '}
                            </a>
                            <a
                                href="https://www.sia-projecten.nl/project/digireal-xl-research-development-and-innovation-center-on-digital-realities-for-societal-economic-impact"
                                target="_blank"
                                rel="noreferrer"
                            >
                                {' '}
                            </a>
                            <a
                                href="https://regieorgaan-sia.nl/financiering/sprong/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                {' '}
                            </a>
                            <a
                                href="https://www.mind-labs.eu/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                {' '}
                            </a>
                            <a
                                href="https://www.digishape.nl/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                {' '}
                            </a>
                            <a
                                href="https://smartvenue.nl/chronosphere/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                {' '}
                            </a>
                            <Link to="/partners" />
                        </Trans>
                    </p>
                </div>
            </div>

            <Founders />
            <Footer />
        </div>
    );
}

export default Home;
