import Link from 'next/link';
import Slider from './Slider';
import DateFormatter from './DateFormatter';
import IconWrapper from './IconWrapper';

type Props = {
  lang: string,
  title: string,
  date: string,
  excerpt: string,
  technos: string[],
  slug: string,
  thumb: string[]
}

const HeroPost = ({
  lang,
  title,
  date,
  excerpt,
  technos,
  slug,
  thumb,
}: Props) => {
    
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <Slider thumb={thumb} title={title} slug={slug} excerpt={excerpt} heroPost={true}/>
      </div>
      <div className="md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline underline-offset-4  decoration-orange-800 md:grid md:grid-cols-2">
            <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
              {title}
            </h3>
            <div className="mx-0 md:mx-5 mb-4 md:mb-0 text-lg">
              <DateFormatter dateString={date} lang={lang}/>
              <p className="text-lg leading-relaxed mb-4">
                {excerpt}
              </p>
            </div>
          </a>
        </Link>
        <div className="flex">
          <IconWrapper items={technos} />
        </div>
      </div>
    </section>
  )
}

export default HeroPost
