/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const resumeTemplate = path.resolve(`src/templates/resumeTemplate.js`)
  const result = await graphql(`
    {
      allFile(
        filter: { absolutePath: { regex: "/(/markdown-pages).*.md$/" } }
        limit: 1000
      ) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                path
              }
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allFile.edges.forEach(({ node }) => {
    createPage({
      path: node.childMarkdownRemark.frontmatter.path,
      component: resumeTemplate,
      context: {}, // additional data can be passed via context
    })
  })
}
