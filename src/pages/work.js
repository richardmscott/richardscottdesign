import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link, graphql } from 'gatsby'

const WorkPage = ({ data }) => {
  return (
    <Layout pageTitle="My work">
      <div class="flex space-x-4">
        {
          data.allMdx.nodes.map(node => {
          const image = getImage(node.frontmatter.hero_image);
          return (
            <article className="block mb-6" key="{node.id}">
              <GatsbyImage image={image} alt={node.frontmatter.hero_image_alt} />
              <Link to={node.frontmatter.slug} className="block font-bold">{node.frontmatter.title}</Link>
              <date className="block mb-3">{node.frontmatter.date}</date>
              <p>{node.excerpt}</p>
            </article>
          )
        }
        )
        }
        </div>
    </Layout>
  )
}

export const query = graphql`
query MyQuery {
  allMdx(
      sort: {frontmatter: {date: DESC}}
      filter: {frontmatter: {type: {eq: "work"}}}
  ) {
    nodes {
      body
      id
      excerpt
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        slug
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
        childImageSharp {
          gatsbyImageData (
          width: 300
          )
        }
      }
      }
    }
  }
}
`

export const Head = () => <Seo title="My work" />

export default WorkPage