import { useState } from "react";
import githubContext from './githubContext';

const GithubProvider: React.FC = ({ children }) => {
	const [lastY, setLastY] = useState<number>(0);
	const [projectUrl, setProjectUrl] = useState('');

	return (
		<githubContext.Provider
			value={{
				lastY,
                setLastY,
				projectUrl,
				setProjectUrl
			}}
		>
			{children}
		</githubContext.Provider>
	);
};

export default GithubProvider;