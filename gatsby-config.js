module.exports = {
  siteMetadata: {
    title: `BRADLEY HC`,
    description: `This is my personal website`,
    author: `Bradley Herrera Contreras`,
  },
  pathPrefix: "/bradleyhrc.github.io",
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `white`,
        theme_color: `white`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-smoothscroll`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}