import {
  BUSSHI_BIO,
  EMAIL,
  FOOTER,
  LINKS,
  PLAY_URL,
  SITE_PRO,
  SITE_PRO_TITLE,
  SITE_URL,
} from "./constants";

export const jsonldLogo = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "busshi",
  email: "contact@busshi.fr",
  url: `${SITE_URL}`,
  logo: `${SITE_URL}/images/logo.png`,
};

export const jsonldFaq = (langId: number) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who am I?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `${BUSSHI_BIO[langId].content}`,
        },
      },
      {
        "@type": "Question",
        name: `${FOOTER[langId].slogan}`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `<ul><li><a href="${LINKS[0].url}">${LINKS[0].name}</li><li><a href="${LINKS[1].url}">${LINKS[1].name}</a></li><li><a href="${LINKS[2].url}">${LINKS[2].name}</a></li><li><a href="${LINKS[3].url}">${LINKS[3].name}</a></li><li><a href="mailto:${EMAIL}">${FOOTER[langId].contact}</a></li></ul>`,
        },
      },
      {
        "@type": "Question",
        name: `${FOOTER[langId].company}`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `<a href="${SITE_PRO}">${SITE_PRO_TITLE}</a>`,
        },
      },
    ],
  };
};

export const jsonldAriane = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "My portfolio",
      item: `${SITE_URL}`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Last project",
      item: `${SITE_URL}/posts/ft_transcendance_EN`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Play online",
      item: `${PLAY_URL}`,
    },
  ],
};

export const jsonldCarousel = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: "1",
      item: {
        "@type": "Movie",
        name: "ft_transcendance",
        url: `${SITE_URL}/posts/ft_transcendance_EN`,
        image: `${SITE_URL}/assets/projects/transcendance/transcendance_architecture.png`,
        dateCreated: "2022-03-28",
        director: {
          "@type": "Person",
          name: "busshi",
        },
        review: {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
          },
          author: {
            "@type": "Person",
            name: "busshi",
          },
          reviewBody: "Last project @42 #born2code",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "99",
          bestRating: "100",
          ratingCount: "83644",
        },
      },
    },
    {
      "@type": "ListItem",
      position: "2",
      item: {
        "@type": "Movie",
        name: "YT2mp3",
        url: `${SITE_URL}/posts/yt2mp3_EN`,
        image: `${SITE_URL}/assets/projects/yt2mp3/cover.png`,
        dateCreated: "2022-01-11",
        director: {
          "@type": "Person",
          name: "busshi",
        },
        review: {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "4",
          },
          author: {
            "@type": "Person",
            name: "busshi",
          },
          reviewBody: "My first app in React",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "81",
          bestRating: "100",
          ratingCount: "21985",
        },
      },
    },
    {
      "@type": "ListItem",
      position: "3",
      item: {
        "@type": "Movie",
        name: "cub3D",
        url: `${SITE_URL}/posts/cub3d_EN`,
        image: `${SITE_URL}/assets/projects/cub3d/cub3d_cover.png`,
        dateCreated: "2021-03-06",
        director: {
          "@type": "Person",
          name: "busshi",
        },
        review: {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
          },
          author: {
            "@type": "Person",
            name: "busshi",
          },
          reviewBody: "Remaking Wolfenstein 3D: My first raycaster",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "96",
          bestRating: "100",
          ratingCount: "88211",
        },
      },
    },
    {
      "@type": "ListItem",
      position: "4",
      item: {
        "@type": "Movie",
        name: "Telegram Bot",
        url: `${SITE_URL}/posts/tgbot_EN`,
        image: `${SITE_URL}/assets/projects/tgbot/cover.png`,
        dateCreated: "2019-06-21",
        director: {
          "@type": "Person",
          name: "busshi",
        },
        review: {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "4",
          },
          author: {
            "@type": "Person",
            name: "busshi",
          },
          reviewBody: "My own Telegram bot coded in Python",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "85",
          bestRating: "100",
          ratingCount: "9374",
        },
      },
    },
  ],
};

/* Website */

/*<script
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
      />*/
