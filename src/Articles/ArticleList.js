import React, { Component } from "react";
import * as api from "../api";
import { Link } from "@reach/router";
import Error from "../Error";

export class ArticleList extends Component {
  state = {
    articles: [],
    hasError: false,
    loading: true
  };
  render() {
    const { articles, hasError, loading } = this.state;
    if (loading) return <p>Loading...</p>;
    if (hasError) return <Error error={hasError} />;
    return (
      <div className="article-list section">
        <ul className="card z-depth-0 article-list">
          {articles.map((article, index) => {
            return (
              <li className="card-content grey-text text-darken-3" key={index}>
                <Link to={`/articles/${article.article_id}`}>
                  {article.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.topic !== this.props.topic) {
      this.fetchArticles();
    }
  }

  fetchArticles = () => {
    const { topic } = this.props;
    api
      .getArticles(topic)
      .then(articles =>
        this.setState({ articles, loading: false, hasError: false })
      )
      .catch(error => {
        this.setState({ hasError: error, loading: false });
        console.dir(error);
      });
  };
}

export default ArticleList;
