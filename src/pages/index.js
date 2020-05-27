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
      I'm Felipe,
      <br />
      BSc. in Computer Engineering, Developer and Designer whose mission is
    </p>
    <pre
      style={{ padding: "12px", background: "#f3f3f3", borderRadius: "4px" }}
    >
      <code>To make the Web EASY, CLEAR and BEAUTIFUL</code>
    </pre>
    <p>If you want to know more, you can check the following pages:</p>
    <PagesList excludedPages={["Home"]} />
    <p>Thanks for stopping by, have fun and stay safe!</p>
    <div style={{ display: "flex", alignItems: "center" }}>
      <span style={{ marginRight: "0.4rem" }}>-</span>
      <Signature width="32px" />
    </div>
  </Layout>
);
