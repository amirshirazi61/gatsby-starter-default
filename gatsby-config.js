module.exports = {
  siteMetadata: {
    title: `Amir Shirazi Personal Web Site.`,
    description: `Amir Shirazi Personal Web Site.`,
    author: `Amir Shirazi`,
    url: `http://amir-shirazi.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `abouts`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-transformer-yaml`,
      options: {
        typeName: `About`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Amir Shirazi`,
        short_name: `AmirShirazi`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/business.png`,
        cache_busting_mode: `none`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          globPatterns: ["**/*.{png,svg}"],
        },
      },
    },
  ],
}
