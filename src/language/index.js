import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import eng from './data/eng.json';
import vi from './data/vi.json';

i18n
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: true,
        resources: {
            en: {
                translation: eng,
            },
            vi: {
                translation: vi,
            },
        },
    });

export default i18n;