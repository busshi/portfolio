import Author from './author'

type PostType = {
  slug: string,
  lang: string,
  title: string,
  date: string,
  author: Author,
  technos: string[],
  languages: string[],
  frameworks: string[],
  dbs: string[],
  devTools: string[],
  deployTools: string[],
  excerpt: string,
  content: string,
  projectUrl: string,
  cover: string,
  thumb: string[],
  icon: string
}

export default PostType
