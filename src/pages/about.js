import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <div className="p-4">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      </div>
    </Layout>
  )
}


// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="About Me" />

// Step 3: Export your component
export default AboutPage
