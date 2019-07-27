import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => {
  return (
    <div className="pageWrapper pageWrapper-404">
      <Header text="Ops. Page not found (404)." />
      <div>
        <Link to="/">Click here</Link> to go back to Home.
      </div>
    </div>
  )
}
