import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}


// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>About Page</title>

// Step 3: Export your component
export default AboutPage
