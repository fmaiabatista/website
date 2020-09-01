import React from "react";
import styles from "./index.module.css";
import Layout from "../components/layout";
import Title from "../components/title";
import Card from "../components/card";
import xdLogoPath from "../assets/200px-Adobe_XD_CC_icon.png";
import figmaLogoPath from "../assets/200px-Figma-logo.png";
import illustratorLogoPath from "../assets/200px-Adobe_Illustrator_CC_icon.png";

const cards = [
  {
    title: "Design",
    elements: [
      { src: xdLogoPath, name: "XD" },
      { src: illustratorLogoPath, name: "Illustrator" },
      { src: figmaLogoPath, name: "Figma" },
    ],
  },
  {
    title: "Front-end",
    elements: [
      { src: xdLogoPath, name: "XD" },
      { src: illustratorLogoPath, name: "Illustrator" },
      { src: figmaLogoPath, name: "Figma" },
    ],
  },
  {
    title: "Back-end",
    elements: [
      { src: xdLogoPath, name: "XD" },
      { src: illustratorLogoPath, name: "Illustrator" },
      { src: figmaLogoPath, name: "Figma" },
    ],
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
      {cards.map((card, i) => (
        <Card title={card.title} key={i}>
          {card.elements.map((element, j) => (
            <div className={styles.technology} key={j}>
              <img
                src={element.src}
                alt={element.name}
                style={{ height: "48px", marginBottom: "0" }}
              />
              <span>{element.name}</span>
            </div>
          ))}
        </Card>
      ))}
    </div>

    <h2>Projects</h2>

    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      <ul>
        <li>abc</li>
        <li>abc</li>
        <li>abc</li>
      </ul>
    </div>
  </Layout>
);
