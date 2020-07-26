import React from "react";
import Layout from "../components/layout";
import Title from "../components/title";
import Card from "../components/card";

const cards = [
  {
    title: "Design",
    elements: ["a1", "a2", "a3"],
  },
  {
    title: "Front-end",
    elements: ["b1", "b2", "b3"],
  },
  {
    title: "Back-end",
    elements: ["c1", "c2", "c3"],
  },
];

export default () => (
  <Layout>
    <Title title="Hi, there." emoji={{ icon: "👋", label: "waving hand" }} />
    <p style={{ width: "50%" }}>
      Sit cupidatat aute labore aliqua ipsum laboris laboris ullamco labore eu.
      Ut reprehenderit in in esse do sunt. Commodo do dolore nulla cupidatat
      proident aliquip sit culpa aliquip exercitation amet.
    </p>

    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {cards.map(card => (
        <Card title={card.title}>
          {card.elements.map(element => (
            <span>{element}</span>
          ))}
        </Card>
      ))}
    </div>
  </Layout>
);
