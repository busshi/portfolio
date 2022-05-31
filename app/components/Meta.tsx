import Head from "next/head";
import { SITE_URL, SITE_PRO, SITE_TITLE } from "../lib/constants";

const Meta = () => {
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
      <meta name="description" content={SITE_TITLE[0].content} />
      {/* Logo */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
              "@context": "https://schema.org",
              "@type": "Organization",
              "url": "${SITE_PRO}",
              "logo": "${SITE_URL}/images/logo.svg"
          }`,
        }}
      />
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
              "name": "Home",
              "item": "${SITE_URL}"
            },{
              "@type": "ListItem",
              "position": 2,
              "name": "Last project",
              "item": "${SITE_URL}/posts/ft_transcendance_EN"
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
                  "@type": "ft_transcendance",
                  "url": "${SITE_URL}/posts/ft_transcendance_EN",
                  "name": "ft_transcendance",
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
                  "ratingCount": "19141"
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
    </Head>
  );
};

export default Meta;
