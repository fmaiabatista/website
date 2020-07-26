import React from "react";
import styles from "./card.module.css";

const Card = ({ title = "title", children }) => (
  <div className={styles.card}>
    <h3 style={{ margin: 0 }}>{title}</h3>
    <div className={styles.body}>{children}</div>
  </div>
);

export default Card;
