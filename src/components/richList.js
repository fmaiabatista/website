import React from "react";

const RichList = ({ data = {} }) => {
  return (
    <ul>
      {data.map(item => (
        <li key={item.name}>
          <a href={item.link}>{item.name}</a>
          <span>{` - ${item.description}`}</span>
        </li>
      ))}
    </ul>
  );
};

export default RichList;
