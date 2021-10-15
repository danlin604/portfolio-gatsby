module.exports = {
  siteMetadata: {
    title: `Dan`,
    description: `A place for code.`,
    author: `Dan Lin`,
    menuLinks: [
      {
        name: "Dan",
        link: "/",
      },
      {
        name: "Resume",
        link: "/resume",
      },
      {
        name: "Projects",
        link: "/projects",
      },
      {
        name: "Contact",
        link: "/contact",
      },
    ],
    projects: [
      {
        name: "Music Player",
      },
      {
        name: "Portfolio Website 2017",
      },
      {
        name: "BarterBay Exchange",
      },
      {
        name: "Portfolio Website 2018",
      },
      {
        name: "Eyexpo Technology Corp.",
      },
      {
        name: "Portfolio Website 2019",
      },
      {
        name: "Hello WASM",
      },
      {
        name: "D3 Gapminder",
      },
      {
        name: "Portfolio Website 2020",
      },
    ],
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "markdown-pages",
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "markdown-projects",
        path: `${__dirname}/src/markdown-projects`,
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // If you’re using this plugin with gatsby-plugin-manifest (recommended) this plugin should be listed after that plugin so the manifest file can be included in the service worker.
    `gatsby-plugin-offline`,
    `gatsby-plugin-catch-links`,
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [], // just in case those previously mentioned remark plugins sound cool :)
      },
    },
    `gatsby-plugin-styled-components`,
  ],
}
