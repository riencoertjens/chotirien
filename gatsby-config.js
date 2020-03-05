module.exports = {
  siteMetadata: {
    title: `Chotirat and Rien are getting Married`,
    description: `Together with their families Choti and Rien invite you to their wedding in Chumphon, Thailand`,
    author: `@rien_coertjens`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["IBMPlexThai:n4", "WarnockPro:n4,n2,i2"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#869D83`,
        theme_color: `#869D83`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
