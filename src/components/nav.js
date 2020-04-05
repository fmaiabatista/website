import React from "react";
import styles from "./nav.module.css";
import { Link } from "gatsby";

export default () => (
  <nav className={styles.nav}>
    <span role="img" aria-label="man technologist">
      👨‍💻 Felipe Maia
    </span>
    <ul className={styles.list}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about/">About</Link>
      </li>
      <li>
        <Link to="/uses/">Uses</Link>
      </li>
      <li>
        <Link to="/resources/">Resources</Link>
      </li>
    </ul>
  </nav>
);
