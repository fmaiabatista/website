import React from "react";
import styles from "./layout.module.css";
import Nav from "./nav";

const Layout = ({ children }) => (
  <div className={styles.layout}>
    <Nav />
    {children}
  </div>
);

export default Layout;
