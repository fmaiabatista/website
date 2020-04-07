import React from "react";

const Emoji = ({ icon, label }) => {
  return (
    <span role="img" arial-label={label}>
      {icon}
    </span>
  );
};

export default Emoji;
