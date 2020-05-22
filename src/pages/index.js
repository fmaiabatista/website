import React from "react";
import Layout from "../components/layout";
import Emoji from "../components/emoji";
import PagesList from "../components/pagesList";
import Signature from "../components/signature";
import Title from "../components/title";

export default () => (
  <Layout>
    <Title title="Bem-vindo" />
    <p>
      <Emoji icon="👋" label="waving hand" /> Hi, there.
    </p>
    <p>
      I'm Felipe, BSc. in Computer Engineering and Developer/Designer whose
      mission is
    </p>
    <pre>
      <code>To make the Web EASY, CLEAR and BEAUTIFUL</code>
    </pre>
    <p>
      If this piqued your interest, you can check the following pages for more
      information:
    </p>
    <PagesList excludedPages={["Home"]} />
    <p>Thanks for stopping by, have fun!</p>
    <div style={{ display: "flex", alignItems: "center" }}>
      <span style={{ marginRight: "0.4rem" }}>-</span>
      <Signature width="32px" />
    </div>
  </Layout>
);
