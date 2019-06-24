import React from "react";

export default function NavBar() {
  return (
    <div className="NavBar">
      <div className="top-box">
        <h1>NC News</h1>
      </div>
      <div className="bottom-box">
        <div className="left">
          <p>Date Created</p>
          <p>Comment Count</p>
          <p>Votes</p>
        </div>
        <div className="right">
          <select>
            <option>Topics</option>
            <option>Coding</option>
            <option>Football</option>
            <option>Cooking</option>
          </select>
        </div>
      </div>
    </div>
  );
}
