import React from "react";

const Emoji = ({ icon, label, margin = "0" }) => {
  return (
    <span role="img" arial-label={label} style={{ margin }}>
      {icon}
    </span>
  );
};

export default Emoji;
