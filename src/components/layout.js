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
      <div className="bg-gray-300">
      <div className="mx-auto max-w-5xl flex">
      <header className="p-4 font-bold"><Link to="/">{data.site.siteMetadata.title}</Link></header>
      <nav>
        <ul className="flex p-4 space-x-4">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
      </nav>
        </div>
        </div>
      <main className="p-4 mx-auto max-w-5xl">
          <h1 className="text-3xl mb-5">{pageTitle}</h1>
          {children}
      </main>
    </div>
  )
}

export default Layout