import React from "react";
import Layout from "../components/layout";
import Emoji from "../components/emoji";
import Title from "../components/title";

const Resources = () => (
  <Layout>
    <Title
      title="Resources"
      tagline="Because quality of life matters and good tools deserve to be shared"
    />
    <p>
      <Emoji icon="🏗️" label="building construction" /> Coming soon
    </p>
  </Layout>
);

export default Resources;
