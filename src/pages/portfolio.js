import React from "react";
import Layout from "../components/layout";
import RichList from "../components/richList";
import Title from "../components/title";

const lists = {
  code: [
    {
      name: "Codepen",
      link: "https://codepen.io/fmaiabatista/",
      description: "CSS & SVG Animations & other experiments",
    },
    {
      name: "Github",
      link: "https://github.com/fmaiabatista/",
      description: "Public repositories and code snippets (aka gists)",
    },
  ],
  design: [
    {
      name: "Orbiteez",
      link:
        "https://xd.adobe.com/view/57e36cb4-f8c0-48b6-a2bf-b0ab6a852c97-02b0/",
      description: "Prototype of a new mobile game",
    },
    {
      name: "Psicomed",
      link:
        "https://xd.adobe.com/view/607ce055-9698-4932-8c62-f00ab164fcc6-352f/",
      description: "Mockup of a landing page for a new product",
    },
    {
      name: "Website",
      link:
        "https://xd.adobe.com/view/5e6fdae1-4e82-4393-a7aa-2f2eae44834a-0b3c/",
      description: "Mockup for a new version of my website (work in progress)",
    },
  ],
};

const Portfolio = () => (
  <Layout>
    <Title
      title="Portfolio"
      tagline="Showcase of personal projects focusing on Code & Design"
    />
    <div
      className="content"
      style={{
        background: "#00000010",
        padding: "40px",
        borderRadius: "12px",
      }}
    >
      <section>
        <h4>Code</h4>
        <RichList data={lists.code} />
        <h4>Design</h4>
        <RichList data={lists.design} />
      </section>
    </div>
  </Layout>
);

export default Portfolio;
