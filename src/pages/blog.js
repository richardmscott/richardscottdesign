import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { Link, graphql } from 'gatsby'

const BlogPage = ({ data }) => {
  
  return (
    <Layout pageTitle="My Blog Posts">
        {
          data.allMdx.nodes.map(node => (
            <article className="block mb-6" key="{node.id}">
              <Link to={node.frontmatter.slug} className="block font-bold">{node.frontmatter.title}</Link>
              <date className="block mb-3">{node.frontmatter.date}</date>
              <p>{node.excerpt}</p>
            </article>
          ))
        }
    </Layout>
  )
}

export const query = graphql`
query MyQuery {
  allMdx(
      sort: {frontmatter: {date: DESC}}
      filter: {frontmatter: {type: {eq: "blog"}}}
  ) {
    nodes {
      body
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        slug
      }
      id
      excerpt
    }
  }
}
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage