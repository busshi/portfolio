import { useEffect, useState } from "react";
import langageContext from "./langageContext";
import { useRouter } from "next/router";

const LangageProvider: React.FC = ({ children }) => {
  const [lang, setLang] = useState("EN");
  const [langId, setLangId] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    const userLanguage = window.navigator.language;
    if (userLanguage) {
      const language = userLanguage.substring(0, 2).toUpperCase();
      if (language === "FR" && router.pathname === "/") {
        setLang(language);
        setLangId(1);
      }
    }
  }, []);

  return (
    <langageContext.Provider
      value={{
        lang,
        setLang,
        langId,
        setLangId,
      }}
    >
      {children}
    </langageContext.Provider>
  );
};

export default LangageProvider;
