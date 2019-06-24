import React, { Component } from "react";
import "./App.css";
import ArticleList from "./ArticleList";
import NavBar from "./NavBar";

export class App extends Component {
  state = {
    articles: [],
    topics: []
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <ArticleList />
      </div>
    );
  }
}

export default App;
