import { createContext } from 'react';

export type LangageContextType = {
	lang: string;
	setLang: (data: any) => any;
	langId: number;
	setLangId: (data: any) => any;
	}

const langageContext = createContext<LangageContextType | null>(null);

export default langageContext;