import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Seo from '../../components/seo'
import {cms} from '../../components/layout.module.css'

const Post = ({ data, children }) => {
  const img = getImage(data.mdx.frontmatter.hero_image)
  return (
    <Layout pageTitle={data.mdx.frontmatter.title} pageTitleVisible={true}>
      <div className={cms}>
        <p className="font-bold px-4">{data.mdx.frontmatter.date}</p>
        {img && <GatsbyImage image={img} alt={data.mdx.frontmatter.hero_image_alt} />}
        <p className="p-4">
        Photo Credit:{" "}
        <a href={data.mdx.frontmatter.hero_image_credit_link}>
          {data.mdx.frontmatter.hero_image_credit_text}
        </a>
        </p>
        <div className="p-4">
          {children}
          <p><span>Type: </span>{data.mdx.frontmatter.type}</p>
        </div>
        </div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        type
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
        childImageSharp {
          gatsbyImageData
        }
      }
      }
    }
  }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default Post
