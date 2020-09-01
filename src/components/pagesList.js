import React from "react";
import { Link } from "gatsby";

const PagesList = ({ listClass = null, excludedPages = [] }) => {
  const pages = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/portfolio/",
      title: "Portfolio",
    },
    {
      path: "/uses/",
      title: "Uses",
    },
    {
      path: "/resources/",
      title: "Resources",
    },
    {
      path: "/contact/",
      title: "Contact",
    },
  ];

  return (
    <ul className={listClass}>
      {pages
        .filter(page => !excludedPages.includes(page.title))
        .map(page => (
          <li key={page.title}>
            <Link to={page.path}>{page.title}</Link>
          </li>
        ))}
    </ul>
  );
};

export default PagesList;
