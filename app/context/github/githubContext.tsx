import { createContext } from 'react';

export type GithubContextType = {
	lastY: number;
	setLastY: (data: any) => any;
	projectUrl: string;
	setProjectUrl: (data: any) => any;
}

const githubContext = createContext<GithubContextType | null>(null);

export default githubContext;