import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import Seo from '../../components/seo'
import {cms} from "../../components/layout.module.css"

const BlogPost = ({ data, children }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <div className={cms} >
      <p className="font-bold">{data.mdx.frontmatter.date}</p>
        {children}
        </div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`

export const Head = () => <Seo title="Super Cool Blog Posts" />

export default BlogPost
