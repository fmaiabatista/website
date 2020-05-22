import React from "react";

const Title = ({ title = null, tagline = null }) => (
  <>
    <h1>{title}</h1>
    {tagline && <h4>{tagline}</h4>}
  </>
);

export default Title;
