/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  flags: {
    DEV_SSR: true
  },
  siteMetadata: {
    title: `Richard Scott Design`,
    siteUrl: `https://rscottdesign.co.uk`
  },
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `work`,
        path: `${__dirname}/posts`,
      }
    },
    {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    }
    },
    "gatsby-plugin-mdx",
    {
          resolve: `gatsby-plugin-google-fonts`,
          options: {
              fonts: [
                  `Poppins\:400,700`, // You can specify weights and styles
              ],
              display: 'swap', // Optional font-display property
          },
      },
  ]
};