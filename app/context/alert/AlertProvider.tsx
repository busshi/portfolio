import alertContext from "./alertContext";
import { useEffect, useState } from "react";

const ALERT_TIMEOUT_MS = 2000;

const AlertProvider: React.FC = ({ children }) => {
	const [popup, setPopup] = useState(0);
	const [timeout, setMyTimeout] = useState<any>();

	useEffect(() => {
		if (popup === 1)
			setMyTimeout(setTimeout(( () => setPopup(0) ), ALERT_TIMEOUT_MS))
    	if (popup > 1) {
			clearTimeout(timeout);
			setMyTimeout(setTimeout(( () => setPopup(0) ), ALERT_TIMEOUT_MS));
		}
	}, [popup]);

	return (
		<alertContext.Provider
			value={{
				popup,
				setPopup,
			}}
		>
			{children}
		</alertContext.Provider>
	);
};

export default AlertProvider;