import React from "react";
import { Link } from "@reach/router";
import SignInLink from "./SignInLink";
import SignOutLink from "./SignOutLink";

export default function NavBar() {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <a
          href="/"
          // {`https://will-nickson-nc-news.herokuapp.com/api/`}
          className="NC-logo"
        >
          NC News
        </a>
        {/* <a href="# className=" sidebar-trigger>
          <i className="material-icons">menu</i>
        </a> */}
        <SignOutLink />
        <SignInLink />

        <ul className="left">
          <li>Date</li>
          <li>Comment</li>
          <li>Votes</li>
        </ul>

        <div className="right" /*hide-on-med-and-down*/>
          <Link to="/topics">
            <button>Topics List</button>
          </Link>
        </div>
        <div className="topics">
          <select>
            <option>
              <Link to="/topics/coding">Coding</Link>
            </option>

            <option>
              <Link to="/topics/football">Football</Link>
            </option>

            <option>
              <Link to="/topics/cooking">Cooking</Link>
            </option>
          </select>
        </div>
      </div>
    </nav>
  );
}
