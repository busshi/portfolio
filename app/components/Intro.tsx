import { useContext } from 'react';
import langageContext, { LangageContextType } from '../context/langage/langageContext';
import { SITE_TITLE, BUSSHI_BIO, AVATAR_URL } from '../lib/constants';
import Avatar from './Avatar';

const Intro = () => {
  const { langId } = useContext(langageContext) as LangageContextType;
 
  return (
    <section className="flex flex-col md:flex-row items-center md:justify-between pt-12 sm:pt-4 pb-14">
      <h1 className="basis-1/3 text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 mb-4 md:mb-0">
        {SITE_TITLE[langId].content}
      </h1>
      <Avatar size={250} name="busshi" picture={AVATAR_URL}/>
      <h2 className="basis-1/3 text-2xl text-center md:text-left mt-5 md:pl-8">
        {BUSSHI_BIO[langId].content}
      </h2>
    </section>
  )
}

export default Intro;
