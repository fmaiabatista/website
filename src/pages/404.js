import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const NotFound = () => (
  <Layout>
    <h1>404 Not Found</h1>
    <p>
      <span role="img" aria-label="face screaming in fear">
        😱
      </span>{" "}
      Ops, seems like you're lost.
    </p>
    <p>The page you're looking for was not found or doesn't exist.</p>
    <p>It's alright - it happens to us all.</p>
    <Link to="/">&larr; Go back home!</Link>
  </Layout>
);

export default NotFound;
