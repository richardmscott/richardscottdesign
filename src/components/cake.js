import * as React from 'react'
import { Link } from 'gatsby'
 
const Cake = ({ children, buttontext }) => {
    return (
        <Link to="/" className="bg-black text-white inline-block p-5">{children}</Link>
    )
}

export default Cake