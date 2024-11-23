import * as React from 'react'
import { Link } from 'gatsby'

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <nav class="bg-gray-300">
        <ul class="flex mx-auto max-w-5xl p-4">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <main class="p-4 mx-auto max-w-5xl">
              <h1 class="text-3xl mb-5">{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout