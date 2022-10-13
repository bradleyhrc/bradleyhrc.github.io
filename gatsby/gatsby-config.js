module.exports = {
  plugins: [
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
        icon: 'public/static/bhc.png'
      },
    },
  ],
  siteMetadata: {
    title: 'Bradley\'s Portfolio',
    description: 'Welcome to my portfolio website',
    image: '/public/static/bhc.png',
    siteUrl: 'https://www.bradleyhc.com'
  },
};
