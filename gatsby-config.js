/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-plugin-gatsby-cloud",
      options: {
        allPageHeaders: [
          "X-Frame-Options: DENY",
          "Cache-control: no-cache, no-store, must-revalidate",
          "X-Content-Type-Options: nosniff",
        ],
        mergeCachingHeaders: false,
      },
    },
  ],
}
