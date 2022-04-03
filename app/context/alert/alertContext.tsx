import { createContext } from 'react';

export type AlertContextType = {
	popup: number;
	setPopup: (data: any) => any;
};

const alertContext = createContext<AlertContextType | null>(null);

export default alertContext;