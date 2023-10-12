import React from "react";
import { Link } from "react-router-dom";

const PagesLinkHelper = ({ linkPathOne, linkPathTwo, nameLinkOne, nameLinkTwo }) => {
  return (
    <div className="mt-5 mb-2 flex gap-7">
      <Link to={linkPathOne} className="text-sm text-red-400">
        {nameLinkOne}
      </Link>
      <Link to={linkPathTwo} className="text-sm text-red-400">
        {nameLinkTwo}
      </Link>
    </div>
  );
};

export default PagesLinkHelper;
