import React from "react";
import { Link } from "@reach/router";

const SignInLink = username => {
  return (
    <ul className="right" hide-on-med-and-down="true">
      <li>
        <Link to="/topics">Topics List</Link>
      </li>

      <li>
        <Link to="/">Log Out</Link>
      </li>
      <li>
        <Link to="/" className="btn btn-floating pink lighten-1">
          JJ
        </Link>
      </li>
    </ul>
  );
};

export default SignInLink;
