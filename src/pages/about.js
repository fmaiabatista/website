import React from "react"
import Container from "../components/container"
import Nav from "../components/nav"
import Header from "../components/header"

export default () => (
  <Container>
    <Nav />
    <Header text="About" />
    <p>Frontend Developer</p>
    <ul>
      <li>React</li>
      <li>JS / Typescript</li>
      <li>CSS</li>
    </ul>
  </Container>
)
