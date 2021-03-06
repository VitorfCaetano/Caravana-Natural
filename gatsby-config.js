require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Caravana Natural',
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID || '',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`, 
    {
      resolve: 'gatsby-remark-images',
      options: {
        maxWidth: 1450,
      }
    }
  ],
}
