import React from "react"
import s from "./nav.module.css"
import { Link } from "gatsby"

export default () => (
  <nav className={s.nav}>
    logo
    <ul className={s.list}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about/">About</Link>
      </li>
      <li>
        <Link to="/uses/">Uses</Link>
      </li>
      <li>
        <Link to="/resources/">Resources</Link>
      </li>
    </ul>
  </nav>
)
