import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

const ProjectsPage = () => {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allFile(
        filter: { absolutePath: { regex: "/(/markdown-projects).*.md$/" } }
        sort: {
          fields: [childMarkdownRemark___frontmatter___startDate]
          order: [DESC]
        }
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
      {data.allFile.edges.map(edge => (
        <article key={edge.node.childMarkdownRemark.id}>
          <h1>{edge.node.childMarkdownRemark.frontmatter.title}</h1>
          <p>Date: {edge.node.childMarkdownRemark.frontmatter.startDate} - {edge.node.childMarkdownRemark.frontmatter.endDate}</p>
          <p>Description: {edge.node.childMarkdownRemark.frontmatter.description}</p>
          <p>
            <a href={edge.node.childMarkdownRemark.frontmatter.url}>url</a> {` | `}
            <a href={edge.node.childMarkdownRemark.frontmatter.source}>source</a>
          </p>
          <div
            className="project-content"
            dangerouslySetInnerHTML={{
              __html: edge.node.childMarkdownRemark.html,
            }}
          />
        </article>
      ))}
    </Layout>
  )
}

export default ProjectsPage
