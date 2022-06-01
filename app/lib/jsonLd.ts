import {
  BUSSHI_BIO,
  EMAIL,
  FOOTER,
  LINKS,
  SITE_PRO,
  SITE_URL,
} from "./constants";

export const jsonldLogo = {
  "@context": "https://schema.org",
  "@type": "Organization",
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
          text: `<a href="${LINKS[0].url}">${LINKS[0].name}</a><br/><a href="${LINKS[1].url}"><img src="${SITE_URL}${LINKS[1].src}"/>${LINKS[1].name}</a><br/><a href="${LINKS[2].url}">${LINKS[2].name}</a><br/><a href="${LINKS[3].url}">${LINKS[3].name}</a>`,
        },
      },
      {
        "@type": "Question",
        name: `${FOOTER[langId].company}`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `<a href="${SITE_PRO}">${FOOTER[langId].company}</a>`,
        },
      },
      {
        "@type": "Question",
        name: `${FOOTER[langId].contact}`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `<a href="mailto:${EMAIL}">${FOOTER[langId].contact}</a>`,
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
      name: "Last project in Typescript",
      item: `${SITE_URL}/posts/ft_transcendance_EN`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "My first React app",
      item: `${SITE_URL}/posts/yt2mp3_EN`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Becoming a junior pentester",
      item: `${SITE_URL}/posts/pentest_EN`,
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
        image: `${SITE_URL}/assets/projects/transcendance/cover.png`,
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
