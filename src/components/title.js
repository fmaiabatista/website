import React from "react";
import Emoji from "./emoji";

const Title = ({ title = null, tagline = null, emoji = null }) => (
  <>
    <h1>
      {emoji && (
        <Emoji icon={emoji.icon} label={emoji.label} margin="0 12px 0 0" />
      )}
      {title}
    </h1>
    {tagline && <h4>{tagline}</h4>}
  </>
);

export default Title;
