const path = require("path");

module.exports = {
  siteMetadata: {
    title: "WJGolfAcademy",
  },
  plugins: [
    "gatsby-plugin-postcss",
    `gatsby-plugin-offline`,
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};
