import React, { Component } from "react";
import * as api from "./api";
import SingleArticle from "./SingleArticle";

export class ArticleList extends Component {
  state = {
    articles: []
  };

  render() {
    const { articles } = this.state;
    return (
      <div className="article-list section">
        <ul className="card z-depth-0 article-list">
          <SingleArticle articles={articles} />
        </ul>
      </div>
    );
  }

  componentDidMount() {
    const { topic } = this.props;
    api.getArticles(topic).then(articles => this.setState({ articles }));
  }
}

export default ArticleList;
