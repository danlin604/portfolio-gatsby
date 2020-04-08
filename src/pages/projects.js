import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

const ProjectsPage = () => {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allFile(
        filter: { absolutePath: {regex: "/(\/markdown-projects).*.md$/"} },
        sort: { fields: [childMarkdownRemark___frontmatter___startDate], order: [DESC] }
      ) {
        edges {
          node {
            childMarkdownRemark {
              id
              html
              frontmatter {
                title
                startDate(formatString: "MMMM DD, YYYY")
                endDate(formatString: "MMMM DD, YYYY")
                description
                url
                source
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Projects" />
      {
        data.allFile.edges.map(edge => (
          <article key={ edge.node.childMarkdownRemark.id }>
            <h1>{ edge.node.childMarkdownRemark.frontmatter.title }</h1>
            <p>{ edge.node.childMarkdownRemark.frontmatter.startDate }</p>
            <p>{ edge.node.childMarkdownRemark.frontmatter.endDate }</p>
            <p>{ edge.node.childMarkdownRemark.frontmatter.description }</p>
            <p>{ edge.node.childMarkdownRemark.frontmatter.url }</p>
            <p>{ edge.node.childMarkdownRemark.frontmatter.source }</p>
            <div
              className="project-content"
              dangerouslySetInnerHTML={{ __html: edge.node.childMarkdownRemark.html }}
            />
          </article>
        ))
      }
      {/* {
        data.site.siteMetadata.projects.map(project => (
          <div key={ project.name + project.year }>
            <h2>{ project.name }</h2>
            <p>{ project.description }</p>
          </div>
        ))
      } */}
    </Layout>
  )
}

export default ProjectsPage
