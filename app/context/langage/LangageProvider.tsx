import { useState } from "react";
import langageContext from "./langageContext";

const LangageProvider: React.FC = ({ children }) => {
	const [lang, setLang] = useState('EN');
    const [langId, setLangId] = useState<number>(0);
  
	return (
		<langageContext.Provider
			value={{
				lang,
                setLang,
                langId,
                setLangId
			}}
		>
			{children}
		</langageContext.Provider>
	);
};

export default LangageProvider;