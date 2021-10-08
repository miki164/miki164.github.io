module.exports = {
  siteMetadata: {
    siteUrl: "https://miki164.github.io",
    title: "JimmysGarden",
  },
  plugins: [
    "gatsby-plugin-catch-links",
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-double-brackets-link",
            options: {
              titleToURLPath: `${__dirname}/resolve-url.js`,
              stripBrackets: true,
              parseWikiLinks: true
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `notes`,
        path: `${__dirname}/content/`,
      },
      __key: `notes`,
    },
  ],
};
