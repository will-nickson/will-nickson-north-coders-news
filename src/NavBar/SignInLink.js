import React from "react";
import { Link } from "@reach/router";

const SignInLink = () => {
  return (
    <ul className="right">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">Sign Out</Link>
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
