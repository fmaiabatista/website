import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Container from "../components/container"

export default () => {
  return (
    <Container>
      <Header text="Ops. Page not found (404)." />
      <div>
        <Link to="/">Click here</Link> to go back to Home.
      </div>
    </Container>
  )
}
