import Container from '../components/Container'
import Stories from '../components/Stories'
import Intro from '../components/Intro'
import Layout from '../components/Layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { SITE_TITLE } from '../lib/constants'
import Post from '../types/post'
import HeroPost from '../components/HeroPost'
import Footer from '../components/Footer'
import { useContext, useEffect, useState } from 'react'
import langageContext, { LangageContextType } from '../context/langage/langageContext'
import githubContext, { GithubContextType } from '../context/github/githubContext'

type Props = {
  allPosts: Post[]
}

const Index = ({ allPosts }: Props) => {
  const [heroPost, setHeroPost] = useState<Post>(allPosts[0]);
  const [stories, setStories] = useState<Post[]>(allPosts);
  const { lang, langId } = useContext(langageContext) as LangageContextType;
  const { setProjectUrl } = useContext(githubContext) as GithubContextType;
  
  useEffect(() => {

    const filtered = allPosts.filter(
      post => post.lang === lang
    );

    setHeroPost(filtered[0]);
    setStories(filtered.slice(1));
    setProjectUrl('portfolio.git')
  }, [lang])

  return (
      <Layout>
        <Head>
          <title>{SITE_TITLE[langId].content}</title>
        </Head>
        
        <Container>

          <Intro />
          
          {heroPost && (
            <HeroPost
              lang={heroPost.lang}
              title={heroPost.title}
              date={heroPost.date}
              excerpt={heroPost.excerpt}
              technos={heroPost.technos}
              slug={heroPost.slug}
              thumb={heroPost.thumb}
            />
          )}
          
          {stories.length > 0 && <Stories posts={stories} />}
          
          <Footer />
        </Container>
      </Layout>
  )
}

export default Index

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'lang',
    'title',
    'date',
    'slug',
    'author',
    'technos',
    'coverImage',
    'excerpt',
    'thumb',
    'icon'
  ])

  return {
    props: { allPosts },
  }
}
