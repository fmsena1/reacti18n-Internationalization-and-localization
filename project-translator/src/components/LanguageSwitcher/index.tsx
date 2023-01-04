import { useTranslation } from 'react-i18next';

//CSS styles
import '../LanguageSwitcher/styles.css';

//Flags 
import flagBr from '../../assets/flags/brazil.svg';
import flagEua from '../../assets/flags/eua.svg';
import flagFr from '../../assets/flags/france.svg';


const languageOptions = [ 
    {
        name: "Português",
        value: "ptBR",
        flag: flagBr,
    },
    {
        name: "English",
        value: "en",
        flag: flagEua,
    },
    {
        name: "French",
        value: "fr",
        flag: flagFr,
    },
]

export const LanguageSwitcher = () => {
    const {t, i18n} = useTranslation();

    return (
        <div className="language-switcher">
            <span>{t("selectYourLanguage")}</span>
            {languageOptions.map(languageOptions => (
                <button 
                    key={languageOptions.value}
                    onClick={()=> {
                    i18n.changeLanguage(languageOptions.value)
                }} >
                    <img src={languageOptions.flag} alt={languageOptions.name}/>
                </button>
            ))}
        </div>
    );
}