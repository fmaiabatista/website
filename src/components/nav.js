import React from "react";
import styles from "./nav.module.css";
import { Link } from "gatsby";
import Emoji from "./emoji";

export default () => (
  <nav className={styles.nav}>
    <div className={styles.logo}>
      <Emoji icon="👨‍💻" label="man technologist" />
      <span className={styles.name}> Felipe Maia</span>
    </div>
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
