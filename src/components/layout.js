import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <div class="bg-gray-300">
      <div class="mx-auto max-w-5xl flex">
      <header class="p-4 font-bold">{data.site.siteMetadata.title}</header>
      <nav>
        <ul class="flex p-4 space-x-4">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
      </nav>
        </div>
        </div>
      <main class="p-4 mx-auto max-w-5xl">
              <h1 class="text-3xl mb-5">{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout