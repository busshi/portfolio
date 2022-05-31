import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/Container";
import PostBody from "../../components/PostBody";
import Header from "../../components/Header";
import PostHeader from "../../components/PostHeader";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import PostTitle from "../../components/PostTitle";
import Head from "next/head";
import { SITE_TITLE, SITE_URL } from "../../lib/constants";
import markdownToHtml from "../../lib/markdownToHtml";
import PostType from "../../types/post";
import { MdArrowBackIosNew } from "react-icons/md";
import Link from "next/link";
import Footer from "../../components/Footer";
import { useContext, useEffect } from "react";
import langageContext, {
  LangageContextType,
} from "../../context/langage/langageContext";
import githubContext, {
  GithubContextType,
} from "../../context/github/githubContext";
import PostFooter from "../../components/PostFooter";
import Layout from "../../components/Layout";

type Props = {
  post: PostType;
  morePosts: PostType[];
};

const Post = ({ post }: Props) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  const { setProjectUrl } = useContext(githubContext) as GithubContextType;
  const { langId } = useContext(langageContext) as LangageContextType;

  useEffect(() => {
    setProjectUrl(post.projectUrl);
  }, []);

  return (
    <Layout>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-8">
              <Head>
                <title>
                  {post.title} | {SITE_TITLE[langId].content}
                </title>
                <meta property="og:image" content={post.cover} />
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{
                    __html: `{
                      "@context": "https://schema.org",
                      "@type": "NewsArticle",
                      "headline": "Article headline",
                      "image": ["${SITE_URL}/assets/projects${post.thumb[0]}","${SITE_URL}/assets/projects${post.thumb[1]}"],
                      "datePublished": "${post.date}",
                      "dateModified": "${post.date}",
                      "author": [{
                        "@type": "Person",
                        "name": "${post.author.name}",
                        "url": "${SITE_URL}"
                      }]
                    }`,
                  }}
                />
              </Head>
              <PostHeader
                lang={post.lang}
                title={post.title}
                date={post.date}
                author={post.author}
                thumb={post.thumb}
              />
              <PostBody content={post.content} />
              <PostFooter
                langs={post.languages}
                frameworks={post.frameworks}
                dbs={post.dbs}
                devTools={post.devTools}
                deployTools={post.deployTools}
              />
            </article>
            <div className="flex justify-center m-20">
              <Link href="/">
                <a>
                  <MdArrowBackIosNew className="text-xl md:text-2xl hover:cursor-pointer hover:animate-bounceBack" />
                </a>
              </Link>
            </div>
          </>
        )}
        <Footer />
      </Container>
    </Layout>
  );
};

export default Post;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "lang",
    "title",
    "date",
    "sortDate",
    "slug",
    "author",
    "technos",
    "languages",
    "frameworks",
    "dbs",
    "devTools",
    "deployTools",
    "content",
    "cover",
    "projectUrl",
    "thumb",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
