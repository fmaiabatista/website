import React from "react"
import styles from "./nav.module.css"
import { Link } from "gatsby"

export default () => (
  <nav>
    logo
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about/">About</Link>
      </li>
      <li>
        <Link to="/uses/">Uses</Link>
      </li>
    </ul>
  </nav>
)
