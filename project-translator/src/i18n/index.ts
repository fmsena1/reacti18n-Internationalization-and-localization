import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

//Language
import enJson from './translations/en.json';
import ptBrJson from './translations/ptBR.json';
import frJson from './translations/fr.json';

i18n.use(initReactI18next).init({
    fallbackLng: "ptBR",
    interpolation:{
        escapeValue: false,
    },
    resources: {
        en: enJson,
        fr: frJson,
        ptBR: ptBrJson,
    }
});