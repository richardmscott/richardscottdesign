// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import Cake from '../components/cake'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page" pageTitleVisible={false} pageWidth="full">
      <div class="w-full  bg-red-700">
        <div className="md:flex text-white md:flex-row-reverse mx-auto md:static">
          <StaticImage className="w-full h-full md:w-1/2"
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
        />
          <div className="w-full p-4 md:w-1/2 relative">
            <div className="max-w-7xl border-solid border-white">
            <h2 className="text-5xl font-bold mb-4">Test</h2>
          <p className="text-lg mb-2">Testing 123 testing 123</p>
              <Cake buttonLink="/about">Test 2</Cake>
              </div>
        </div>
      </div>
      </div>
        </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Home Page" />

// Step 3: Export your component
export default IndexPage
