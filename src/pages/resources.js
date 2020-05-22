import React from "react";
import Layout from "../components/layout";
import Emoji from "../components/emoji";
import Title from "../components/title";

const Resources = () => (
  <Layout>
    <Title
      title="Resources"
      tagline="Because Quality of Life matters and good tooling helps do the job"
    />
    <p>
      <Emoji icon="🏗️" label="building construction" /> Coming soon
    </p>
  </Layout>
);

export default Resources;
