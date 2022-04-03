import { AppProps } from 'next/app'
import '../styles/index.css'
import LangageProvider from "../context/langage/LangageProvider";
import GithubProvider from "../context/github/GithubProvider";
import AlertProvider from '../context/alert/AlertProvider';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AlertProvider>
      <LangageProvider>
        <GithubProvider>
          <Component {...pageProps} />
        </GithubProvider>
      </LangageProvider>
    </AlertProvider>
  )
}
