import PostTitle from './PostTitle'
import Author from '../types/author'
import Avatar from './Avatar'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import DateFormatter from './DateFormatter'
import { Fragment } from 'react'
 
type Props = {
  lang: string,
  title: string,
  date: string,
  author: Author,
  thumb: string[]
}

const PostHeader = ({ lang, title, date, author, thumb }: Props) => {
  
  return (
    <Fragment>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar size={60} name={author.name} picture={author.picture} />
      </div>
      <div className="mb-16 sm:mx-0">
        <AwesomeSlider animation="cubeAnimation" startup={true}>
          {thumb.map((item, i) => (
            <div key={i++} data-src={`/assets/projects/${item}`}/>
          ))
          }
        </AwesomeSlider>
      </div>
      <div className="w-full md:max-w-[80%] mx-auto mb-6 text-lg">
          <DateFormatter dateString={date} lang={lang}/>
      </div>
    </Fragment>
  )
}

export default PostHeader
