import Head from "next/head";
import { useContext } from "react";
import langageContext, {
  LangageContextType,
} from "../context/langage/langageContext";
import {
  SITE_URL,
  SITE_TITLE,
  BUSSHI_BIO,
  LINKS,
  jsonldLogo,
  jsonldFaq,
} from "../lib/constants";

const Meta = () => {
  const { langId } = useContext(langageContext) as LangageContextType;

  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/favicon/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/favicon/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/favicon/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/favicon/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/favicon/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/favicon/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/favicon/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/favicon/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/favicon/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta
        name="msapplication-TileImage"
        content="/favicon/ms-icon-144x144.png"
      />
      <meta name="theme-color" content="#ffffff" />
      <meta name="description" content={SITE_TITLE[langId].content} />
      {/* Logo */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonldLogo,
        }}
      />

      {/* Website */}

      {/*<script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
              "@context": "https://schema.org",
              "@type": "WebPage",
              "id": "${SITE_URL}",
              "name":"${SITE_TITLE[langId].content}",
              "breadcrumb":{
                "@type":"BreadcrumbList",
                "itemListElement":[
                {
                  "@type":"ListItem",
                  "position":"1",
                  "item":{
                    "@type":"WebSite",
                  "@id":"${SITE_URL}",
                  "name":"${SITE_TITLE[langId].content}"
                  }
                },
                {
                  "@type":"ListItem",
                  "position":"2",
                  "item":{
                    "@type":"WebPage",
                    "@id":"${SITE_URL}/posts/ft_transcendance_EN"",
                    "name":"Last project"
                  }
                },
                {
                  "@type":"ListItem",
                  "position":"3",
                  "item":{
                    "@type":"WebPage",
                    "@id":"${SITE_URL}/posts/yt2mp3_EN"",
                    "name":"My first React app"
                  }
                },
                {
                  "@type":"ListItem",
                  "position":"4",
                  "item":{
                    "@type":"WebPage",
                    "@id":"${SITE_URL}/posts/pentest_EN"",
                    "name":"Becoming a junior pentester"
                  }
                }
              ]
            }
          }`,
        }}
      />*/}

      {/* Fil d'ariane */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "My portfolio",
              "item": "${SITE_URL}"
            },{
              "@type": "ListItem",
              "position": 2,
              "name": "Last project in Typescript",
              "item": "${SITE_URL}/posts/ft_transcendance_EN"
            },{
              "@type": "ListItem",
              "position": 3,
              "name": "My first React app",
              "item": "${SITE_URL}/posts/yt2mp3_EN"
            },{
              "@type": "ListItem",
              "position": 4,
              "name": "Becoming a junior pentester",
              "item": "${SITE_URL}/posts/pentest_EN"
            }]
          }`,
        }}
      />

      {/* Carousel with movies style */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              {
              "@type": "ListItem",
              "position": "1",
              "item": {
                "@type": "Movie",
                "name": "ft_transcendance",
                "url": "${SITE_URL}/posts/ft_transcendance_EN",
                "image": "${SITE_URL}/assets/projects/transcendance/cover.png",
                "dateCreated": "2022-03-28",
                "director": {
                  "@type": "Person",
                  "name": "busshi"
                },
                "review": {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5"
                },
                "author": {
                  "@type": "Person",
                  "name": "busshi"
                },
                "reviewBody": "Last project @42 #born2code"
              },
              "aggregateRating":
              {
                "@type": "AggregateRating",
                "ratingValue": "99",
                "bestRating": "100",
                "ratingCount": "83644"
              }
            }
          },
            {
              "@type": "ListItem",
              "position": "2",
              "item": {
                "@type": "Movie",
                "name": "YT2mp3",
                "url": "${SITE_URL}/posts/yt2mp3_EN",
                "image": "${SITE_URL}/assets/projects/yt2mp3/cover.png",
                "dateCreated": "2022-01-11",
                "director": {
                  "@type": "Person",
                  "name": "busshi"
                },
                "review": {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "4"
                },
                "author": {
                  "@type": "Person",
                  "name": "busshi"
                },
                "reviewBody": "My first app in React"
              },
              "aggregateRating":
              {
                "@type": "AggregateRating",
                "ratingValue": "81",
                "bestRating": "100",
                "ratingCount": "21985"
              }
            }
          },
          {
            "@type": "ListItem",
            "position": "3",
            "item": {
              "@type": "Movie",
              "name": "cub3D",
              "url": "${SITE_URL}/posts/cub3d_EN",
              "image": "${SITE_URL}/assets/projects/cub3d/cub3d_cover.png",
              "dateCreated": "2021-03-06",
              "director": {
                "@type": "Person",
                "name": "busshi"
              },
              "review": {
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5"
              },
              "author": {
                "@type": "Person",
                "name": "busshi"
              },
              "reviewBody": "Remaking Wolfenstein 3D: My first raycaster"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "96",
                "bestRating": "100",
                "ratingCount": "88211"
              }
            }
          },
          {
            "@type": "ListItem",
            "position": "4",
            "item": {
              "@type": "Movie",
              "name": "Telegram Bot",
              "url": "${SITE_URL}/posts/tgbot_EN",
              "image": "${SITE_URL}/assets/projects/tgbot/cover.png",
              "dateCreated": "2019-06-21",
              "director": {
                "@type": "Person",
                "name": "busshi"
              },
              "review": {
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "4"
              },
              "author": {
                "@type": "Person",
                "name": "busshi"
              },
              "reviewBody": "My own Telegram bot coded in Python"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "85",
                "bestRating": "100",
                "ratingCount": "9374"
              }
            }
          }]}`,
        }}
      />

      {/* FAQ */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonldFaq(langId),
        }}
      ></script>
    </Head>
  );
};

export default Meta;
