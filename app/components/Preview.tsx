import Link from 'next/link'
import Author from '../types/author'
import Slider from './Slider'
import DateFormatter from './DateFormatter'
import IconWrapper from './IconWrapper'

type Props = {
  lang: string,
  title: string,
  thumb: string[],
  date: string,
  excerpt: string,
  author: Author,
  technos: string[],
  slug: string
}

const Preview = ({
  lang,
  title,
  thumb,
  date,
  excerpt,
  technos,
  slug,
}: Props) => {
  return (
    <div className="border border-orange-200 p-5 bg-orange-500/50 md:bg-orange-500/20 md:hover:bg-orange-500/50 md:ease-in md:duration-1000 rounded-lg">
      <Slider thumb={thumb} title={title} slug={slug} excerpt={excerpt} heroPost={false} />
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <a>
          <h3 className="text-3xl mb-3 leading-snug hover:underline underline-offset-4 decoration-orange-600">
            {title}
          </h3>
          <div className="text-lg mb-4">
            <DateFormatter dateString={date} lang={lang}/>
          </div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        </a>
      </Link>
      <div className="flex">
        <IconWrapper items={technos} />
      </div>
    </div>
  )
}

export default Preview
