import Preview from './Preview'
import Post from '../types/post'
import { Fade } from 'react-awesome-reveal'
import { STORIES_TITLE } from '../lib/constants';
import { useContext } from 'react';
import langageContext, { LangageContextType } from '../context/langage/langageContext';

type Props = {
  posts: Post[],
}

const Stories = ({ posts }: Props) => {
  const { langId } = useContext(langageContext) as LangageContextType;
 
  return (
    <section>
      <h2 className="mt-16 mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        {STORIES_TITLE[langId].content}
      </h2>
      <div className="items-stretch grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20 mb-32">
        <Fade cascade triggerOnce duration={500}>
          {posts.map((post) => (
          <Preview
            key={post.slug}
            lang={post.lang}
            title={post.title}
            thumb={post.thumb}
            date={post.date}
            author={post.author}
            technos={post.technos}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
        </Fade>
      </div>
    </section>
  )
}

export default Stories
