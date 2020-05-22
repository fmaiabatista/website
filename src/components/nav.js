import React from "react";
import styles from "./nav.module.css";
import PagesList from "../components/pagesList";
import Emoji from "./emoji";

const Nav = () => (
  <nav className={styles.nav}>
    <div className={styles.logo}>
      <Emoji icon="👨‍💻" label="man technologist" />
      <span className={styles.name}> Felipe Maia</span>
    </div>
    <PagesList listClass={styles.list} />
  </nav>
);

export default Nav;
