module.exports = {
  siteMetadata: {
    title: `Dan`,
    description: `A place for code.`,
    author: `Dan Lin`,
    menuLinks:[
      {
        name:'Dan',
        link:'/'
      },
      {
        name:'Resume',
        link:'/resume'
      },
      {
        name:'Projects',
        link:'/projects'
      },
      {
        name:'Contact',
        link:'/contact'
      },
    ],
    projects: [
      {
        name: 'Music Player',
        year: 2016,
        description: `A student project. It allows .flac playback. The music player is asynchronous and recursively scans through user's media folder.`,
        url: 'youtu.be/xxdy4SwaoJg',
        source: ``
      },
      {
        name: 'Portfolio Website 2017',
        year: 2017,
        description: `Portfolio website created to teach myself basics of web development. Key concepts learned from the project are self-executing JS scripts, ES5 syntax, partial re-render of web element, and HTML/CSS design patterns. You can find my a attempt at a JS Fiddle that dangerously uses eval() and a CSS scene based on a photograph.`,
        url: 'https://danlin604.github.io/website/',
        source: `https://github.com/danlin604/website`
      },
      {
        name: 'BarterBay Exchange',
        year: 2017,
        description: `The product was built from scratch, and my focus was on React Native, Node.js, and PostgreSQL. I enjoyed my time there and contributed directly to the business logic and the direction of the product. There were a lot of whiteboard discussions throughout the development and that sort of direct interaction & dogfooding gave confidence to the technical development of the product. I grew interested in security from designing and implementing the autehtnication system. Key background to the product are the PostgreSQL based business backend that handles the majority of the searches, bartering transactions, anonymized GIS feature. Interestingly enough, I also wrote the TOS and some of the marketing research materials there.`,
        url: 'https://barterbay.ca/',
        source: ``
      },
      {
        name: 'Portfolio Website 2018',
        year: 2018,
        description: ``,
        url: 'https://danlin.ca',
        source: ``
      },
      {
        name: 'Eyexpo Technology Corp.',
        year: 2018,
        description: `I worked on multiple projects here focused mainly on the client-side of the `,
        url: 'https://danlin.ca',
        source: ``
      },
      {
        name: 'Portfolio Website 2019',
        year: 2019,
        description: `A co-worker convinced me to dig deeper into Webpack so I began a new portfolio website. Initially, my plan was to convert the 2018 website to Gatsby, but none of the styles imported well so I ended up trying to fix more breakages then to actually learn new thing! The excuse of learning Webpack is what was needed for me to start from scratch. You can see that I am really taken with Markdown and began converting a more portable version of my resume. because by now this is my fourth website, and I am looking for a way to write less. You can find animated emoji, imported P5 starfield animation, and a solar-system built in A-Frame.`,
        url: 'https://danlin.ca',
        source: `https://github.com/danlin604/web`
      },
      {
        name: 'Hello WASM',
        year: 2020,
        description: ``,
        url: 'https://danlin604.github.io/hello-wasm-rust/',
        source: `https://github.com/danlin604/hello-wasm-rust`
      },
      {
        name: 'D3 Gapminder',
        year: 2020,
        description: `This is my first experience with D3. I have seen and played with some amazing D3 visualization, and an opportunity to learn D3 came up when I saw a short MIT intro on D3. No project is complete until you really put the subject matter through its paces, so a few additional requirements came up. The visualization needs to intergrate with a modern framework, look nice, and loads real data. My feeling about the integration is that D3 still tries to fight with React and the integration is not plainless. An alternative should be sought out. The dataset I chose is from the Gapminder Foundation. The late Hans Rosling was an excellent speaker and writer. The choice was relevant as I only just finished reading his book, Factfulness, in 2019.`,
        url: 'https://danlin604.github.io/d3-gapminder/',
        source: `https://github.com/danlin604/d3-gapminder`
      },
      {
        name: 'Portfolio Website 2020',
        year: 2020,
        description: `You are looking at it! Website #5 addresses the problem of scalability. I have noticed that if I were to integrate projects closely with my website I would run into large payloads, and limits the type of technology my future projects are based. The goal of the new website is to separate projects and the portfolio itself. By now I want to do less configuration and work on more fun projects, so I want to give Gatsby a good try.`,
        url: 'https://danlin604.github.io/hello-wasm-rust/',
        source: `https://github.com/danlin604/hello-wasm-rust`
      },
    ]
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
    `gatsby-plugin-styled-components`
  ],
}
