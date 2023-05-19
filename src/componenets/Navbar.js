import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to="/">Page1</Link>
        <Link to="/page2">Page2</Link>
        <Link to="/page3">Page3</Link>
        <Link to="/page4">Page4</Link>
      </nav>
    </div>
  )
}

export default Navbar
