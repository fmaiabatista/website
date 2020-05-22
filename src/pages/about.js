import React from "react";
import Layout from "../components/layout";
import Emoji from "../components/emoji";
import Title from "../components/title";

const About = () => (
  <Layout>
    <Title title="About" tagline="A bit more about me" />
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
