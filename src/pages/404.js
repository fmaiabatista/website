import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Emoji from "../components/emoji";

const NotFound = () => (
  <Layout>
    <h1>404 Not Found</h1>
    <p>
      <Emoji icon="😱" label="face screaming in fear" /> Ops, seems like you're
      lost.
    </p>
    <p>The page you're looking for was not found or doesn't exist.</p>
    <p>It's alright - it happens in the best of websites.</p>
    <Link to="/">&larr; Go back home!</Link>
  </Layout>
);

export default NotFound;
