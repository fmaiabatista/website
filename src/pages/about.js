import React from "react";
import Layout from "../components/layout";
import Emoji from "../components/emoji";

const About = () => (
  <Layout>
    <h1>About</h1>
    <p>
      <Emoji icon="🏗️" label="building construction" /> Coming soon
    </p>

    {/*
    <ul>
      <li>Software Engineer</li>
      <li>Frontend Developer</li>
      <li>JavaScript Enthusiast</li>
    </ul> */}
  </Layout>
);

export default About;
