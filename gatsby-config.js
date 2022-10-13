module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-top-layout',
    'gatsby-plugin-react-helmet',
    // If you want to use styled components you should add the plugin here.
    'gatsby-plugin-styled-components',
    'gatsby-plugin-mui-emotion',
    `gatsby-plugin-sass`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/bhc.png',
      },
    },
  ],
  siteMetadata: {
    title: 'Bradley\'s Portfolio',
    description: 'Welcome to my portfolio website',
    image: 'src/images/bhc.png',
    siteUrl: 'https://www.bradleyhc.com'
  },
};
