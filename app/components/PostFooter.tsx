import IconWrapper from './IconWrapper';
import { Fragment, useContext } from 'react';
import { POST_FOOTER } from '../lib/constants';
import langageContext, { LangageContextType } from '../context/langage/langageContext';

type Props = {
  langs: string[],
  frameworks: string[],
  devTools: string[],
  deployTools: string[],
  dbs: string[],
}

type WrapperProps = {
  name: string,
  items: string[]
}

const Wrapper = ({name, items}: WrapperProps) => (
  <div className="flex my-16 content-center items-center space-x-5">
    <h1 className="text-3xl">
      {name}
    </h1>
    <div className="flex">
      <IconWrapper items={items} />
    </div>
  </div>
)

const PostFooter = ({ langs, frameworks, devTools, deployTools, dbs }: Props) => {
  
  const { langId } = useContext(langageContext) as LangageContextType;
    
  return (
    <Fragment>
      <div className="max-w-2xl mx-auto">
            {langs && <Wrapper name={POST_FOOTER[langId].languages} items={langs} />}
            {frameworks && <Wrapper name={POST_FOOTER[langId].frameworks} items={frameworks} />}
            {dbs && <Wrapper name={POST_FOOTER[langId].dbs} items={dbs} />}
            {devTools && <Wrapper name={POST_FOOTER[langId].devTools} items={devTools} />}
            {deployTools && <Wrapper name={POST_FOOTER[langId].deployTools} items={deployTools} />}
      </div>
    </Fragment>
  )
}

export default PostFooter;
