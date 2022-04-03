import { useRouter } from 'next/router';
import { Fragment, useContext, useEffect, useState } from 'react'
import langageContext, { LangageContextType } from '../context/langage/langageContext'
import Switch from "react-switch";
import alertContext, { AlertContextType } from '../context/alert/alertContext';
import { Bounce } from 'react-awesome-reveal';
import { useMediaQuery } from 'react-responsive';

const LangageSwitcher = () => {
    const { popup, setPopup } = useContext(alertContext) as AlertContextType;
    const { lang, setLang, setLangId } = useContext(langageContext) as LangageContextType;
    const router = useRouter();
    const [mobileScreen] = useState(useMediaQuery({ query: "(max-width: 800px)"}));

    useEffect(() => {
        setLangId(lang === 'EN' ? 0 : 1);
        (window.location.href.lastIndexOf('/') !== window.location.href.length - 1) && router.push(window.location.href.replace(lang === 'EN' ? 'FR' : 'EN', lang === 'EN' ? 'EN' : 'FR'))
    }, [lang])

    const handleChange = () => {
        setLang(lang === 'FR' ? 'EN' : 'FR');
        setLangId(lang === 'EN' ? 1 : 0);
        setPopup(popup + 1)
    }

    return (
        <Fragment>
            <div className="border border-orange-200 rounded-full absolute md:fixed z-50 top-5 right-5">
                <Switch
                      boxShadow="0 0 1px 1px #ffcc00"
                      activeBoxShadow="0 0 5px 5px #ffcc00"
                      onColor="#cc7000"
                      offColor="#cc7000"
                      onHandleColor="#b36200"
                      offHandleColor="#b36200"
                      checkedIcon={<div className="text-xl">🇫🇷</div>}
                      uncheckedIcon={<div className="text-xl ml-1">🏴󠁧󠁢󠁥󠁮󠁧󠁿</div>}
                      onChange={handleChange}
                      checked={lang === 'FR' ? true : false}
                />
            </div>
            
            {(popup >= 1) ?
                (mobileScreen ?
                    <div className="fixed w-1/3 left-1/3 top-1 cursor-default">
                        <Bounce triggerOnce duration={1000}>
                            <div className="text-xs md:text-sm bg-orange-200/50 text-orange-800 text-center rounded-full py-1 px-3">
                                {lang === 'FR' ? "Français" : "English"}
                            </div>
                        </Bounce>
                    </div>
                    :
                    <div className="fixed right-5 top-14 cursor-default">
                        <Bounce triggerOnce duration={1000}>
                            <div className="text-sm md:text-sm bg-orange-200/50 text-orange-800 text-center rounded-full py-1 px-3">
                                {lang === 'FR' ? "Traduit en Français" : "Switched to English"}
                            </div>
                        </Bounce>
                    </div>
                )
                : <></>
            }      
          </Fragment>
    )
}

export default LangageSwitcher;