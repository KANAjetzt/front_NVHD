require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Narrenverein Heulicher | Heudorf im Hegau`,
    description: `Der Narrenverein Heulicher`,
    author: `NV Heulicher`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-polyfill-io`,
      options: {
        features: [`IntersectionObserver`, `IntersectionObserverEntry`],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-137417026-1',
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '74ftimmm',
        dataset: 'production',
        // To enable preview of drafts, copy .env-example into .env,
        // and add a token with read permissions
        token: process.env.SANITY_TOKEN,
        watchMode: true,
        overlayDrafts: true,
      },
    },
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
        name: `Narrenverein Heuliecher Heudorf`,
        short_name: `NV Heuliecher`,
        start_url: `/`,
        background_color: `#025753`,
        theme_color: `#025753`,
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
  ],
}
