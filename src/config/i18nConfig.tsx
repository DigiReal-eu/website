import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import TRANSLATIONS_EN from '../assets/translations/en.json';
import TRANSLATIONS_NL from '../assets/translations/nl.json';

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'nl',
        lng: i18n.language,
        resources: {
            en: {
                translation: TRANSLATIONS_EN,
            },
            nl: {
                translation: TRANSLATIONS_NL,
            },
        },
    });
