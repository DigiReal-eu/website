import React from 'react';
import { useTranslation } from 'react-i18next';
import ChangeLanguageButton from '../../components/changeLanguageButton/changeLanguageButton';
import Footer from '../../components/layout/footer/footer';
import Founders from '../../components/layout/founders/founders';
import Header from '../../components/layout/header/header';
import './home.scss';

function Home() {
    const { t } = useTranslation();

    return (
        <div className="home">
            <Header />
            <p>
                {t('home.welcome_to')}
                <br />
                DIGIREAL.XL
            </p>
            <ChangeLanguageButton />

            <p>{t('home.who_are_we')}</p>
            <Founders />
            <Footer />
        </div>
    );
}

export default Home;
