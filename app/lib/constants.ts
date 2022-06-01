export const EMAIL = "contact@busshi.fr";
export const SITE_URL = "https://busshi.fr";
export const SITE_PRO = "https://busshidev.fr";
export const AVATAR_URL = "/assets/authors/busshi.jpeg";
export const SITE_TITLE = [
  {
    lang: "EN",
    content: "My portfolio",
  },
  { lang: "FR", content: "Mon portfolio" },
];
export const STORIES_TITLE = [
  {
    lang: "EN",
    content: "Some projects I made",
  },
  { lang: "FR", content: "Mes dernières réalisations" },
];
export const FOOTER = [
  {
    lang: "EN",
    slogan: "Powered by busshi",
    contact: "Contact me",
    company: "Check my company here",
  },
  {
    lang: "FR",
    slogan: "Développé par busshi",
    contact: "Me contacter",
    company: "Site pro",
  },
];
export const POST_FOOTER = [
  {
    lang: "EN",
    frameworks: "Frameworks",
    languages: "Languages",
    dbs: "Databases",
    devTools: "Development tools",
    deployTools: "Deployment tools",
  },
  {
    lang: "FR",
    frameworks: "Frameworks",
    languages: "Langages",
    dbs: "Bases de données",
    devTools: "Outils de développement",
    deployTools: "Outils de déploiement",
  },
];
export const BUSSHI_BIO = [
  {
    lang: "EN",
    content:
      "Full-stack developper freelance, aspiring pentester, infosec lover, check out some of my personnal projects here...",
  },
  {
    lang: "FR",
    content:
      "Développeur fullstack freelance, passionné de cybersécurité, explorez ici quelques-uns de mes projets personnels...",
  },
];
export const LINKS = [
  {
    id: 1,
    name: "Linkedin",
    url: "https://www.linkedin.com/in/alexandre-dubar/",
  },
  {
    id: 2,
    name: "Malt",
    url: "https://www.malt.fr/profile/alexandredubar",
  },
  {
    id: 3,
    name: "Github",
    url: "https://github.com/busshi",
  },
  {
    id: 4,
    name: "DockerHub",
    url: "https://hub.docker.com/repository/docker/busshi/portfolio",
  },
];

export const jsonldLogo = JSON.stringify(`{
  "@context": "https://schema.org",
  "@type": "Organization",
  url: "${SITE_URL}",
  logo: "${SITE_URL}/images/logo.png",
}`);

export const jsonldFaq = (langId: number) => {
  return JSON.stringify(`{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who am I?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "${BUSSHI_BIO[langId].content}",
        },
      },
      {
        "@type": "Question",
        name: "${LINKS[0].name}",
        acceptedAnswer: {
          "@type": "Answer",
          text: '<a href="${LINKS[0].url}">${LINKS[0].name}</a>',
        },
      },
      {
        "@type": "Question",
        name: "${LINKS[1].name}",
        acceptedAnswer: {
          "@type": "Answer",
          text: '<a href="${LINKS[1].url}">${LINKS[1].name}</a>',
        },
      },
      {
        "@type": "Question",
        name: "${LINKS[2].name}",
        acceptedAnswer: {
          "@type": "Answer",
          text: '<a href="${LINKS[2].url}">${LINKS[2].name}</a>',
        },
      },
      {
        "@type": "Question",
        name: "${LINKS[3].name}",
        acceptedAnswer: {
          "@type": "Answer",
          text: '<a href="${LINKS[3].url}">${LINKS[3].name}</a>',
        },
      },
    ],
  }`);
};
