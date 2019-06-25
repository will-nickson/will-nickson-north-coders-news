import React, { Component } from "react";
import { Router } from "@reach/router";
import NavBar from "./NavBar/NavBar";
import ArticleList from "./ArticleList";
import SingleArticle from "./SingleArticle";
import TopicList from "./Topics/TopicList";
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
          <ArticleList path="/topics/:topic" />
          <SingleArticle path="/articles/:article_id" />
          {/* <Error default /> */}
        </Router>
      </div>
    );
  }
}

export default App;
