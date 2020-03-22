import React from "react"
import { Link } from "gatsby"
import Container from "../components/container"
import Nav from "../components/nav"
import Header from "../components/header"

export default () => (
  <Container>
    <Nav />
    <Header text="404 Page not found." />
    <div>
      <Link to="/">Go back</Link>
    </div>
  </Container>
)
