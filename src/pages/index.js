import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = () => (
  <Layout>
    <Seo title="Dan" />
    <h1>Hello there.</h1>
    <p>
      I am a full-stack developer. JavaScript, Web security and Postgres are my current passions.
    </p>
    <p>
      There are other technologies that I am interested in. Systems programming through Rust. WASM. CSS painting. Virtual Reality.
    </p>
    <p>
      My goal is to showcase projects without having to tinker within frameworks too much. Projects will be hosted separately and the write ups will be in markdown. So be sure to check back occasionally for new content!
    </p>
  </Layout>
)

export default IndexPage
