import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = () => (
  <Layout>
    <Seo title="Dan" />
    <h1>Hello there.</h1>
    <p>
      JavaScript, Web security and Postgres are my current passions. There is
      little else that I enjoy more than to sit down and dig into them.
    </p>
    <p>
      There are other subjects that I am developing interests in: Exploring
      systems programming through Rust, Exploring WASM through Rust, Painting
      with CSS, Blender and unity for use in VR. Blender and CSS offers an
      outlet into art that satisfies visually so I would like to do more of
      these in the future.
    </p>
    <p>
      I'll be updating this website in my spare time, so be sure to check back
      occasionally for new content!
    </p>
  </Layout>
)

export default IndexPage
