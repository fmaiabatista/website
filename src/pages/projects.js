import React from "react";
import Layout from "../components/layout";
import Emoji from "../components/emoji";
import Title from "../components/title";

const Projects = () => (
  <Layout>
    <Title
      title="Projects"
      tagline="Showing off side-projects I do in my spare time"
    />
    <p>
      <Emoji icon="🏗️" label="building construction" /> Coming soon
    </p>
  </Layout>
);

export default Projects;
