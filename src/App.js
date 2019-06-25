import React, { Component } from "react";
import { Router } from "@reach/router";
import NavBar from "./NavBar/NavBar";
import ArticleList from "./ArticleList";
import SingleArticle from "./SingleArticle";
import TopicList from "./TopicList";
import "./App.css";

export class App extends Component {
  state = {
    articles: [],
    topics: []
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <Router>
          <TopicList path="/topics" />
          <ArticleList path="/" />
          <SingleArticle path="/articles/:article_id" />
        </Router>
      </div>
    );
  }
}

export default App;
