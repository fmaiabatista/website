import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Emoji from "../components/emoji";
import Signature from "../components/signature";

export default () => (
  <Layout>
    <h1>Bem-vindo</h1>
    <p>Hi, there.</p>
    <p>
      If you made it to my page it means either that I'm already popular or
      maybe you have no idea what you're looking for.
    </p>
    <p>
      If it's the first case, I'm flattered!{" "}
      <Emoji icon="🤩" label="star-struck" />
    </p>
    <p>
      You can learn more about me in the following pages (or just use the nav):
    </p>
    <ul>
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
    <p>
      Now, if you still don't know what you're after here - I suggest you go for
      a walk and get your eye off the screen a bit (then come back later and
      check my other pages). <Emoji icon="🙄" label="face with rolling eyes" />
    </p>
    <p>In any case, have fun!</p>
    <div style={{ display: "flex", alignItems: "center" }}>
      <span style={{ marginRight: "1rem" }}>-</span>
      <Signature width="32px" />
    </div>
  </Layout>
);
