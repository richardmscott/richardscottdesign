import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { graphql } from 'gatsby'

const BlogPage = ({ data }) => {
  
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {
          data.allMdx.nodes.map(node => (
            <li key="{node.id}">
              {node.id}
            </li>
          ))
        }
        </ul>
    </Layout>
  )
}

export const query = graphql`
query MyQuery {
  allMdx {
    nodes {
      id
      body
    }
  }
}
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage