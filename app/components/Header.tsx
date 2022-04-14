import Link from 'next/link'
import { useContext } from 'react';
//import { MdArrowBackIosNew } from 'react-icons/md'
import langageContext, { LangageContextType } from '../context/langage/langageContext';
import { SITE_TITLE } from '../lib/constants'

const Header = () => {

  const { langId } = useContext(langageContext) as LangageContextType;

  return (
    <div className="flex justify-between content-center mb-10">
      <div className="content-center">
        <h2 className="my-6 text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
          <Link href="/" >
            <a className="hover:underline">
              {SITE_TITLE[langId].content}
              .
            </a>
          </Link>
        </h2>
      </div>
{/*}    <div className="mx-16 md:mx-0 my-5">
      <Link href="/">
        <a>
          <MdArrowBackIosNew className="text-2xl hover:cursor-pointer hover:animate-bounceBack"/>
        </a>
      </Link>
  </div>*/}
  </div>)
}

export default Header
