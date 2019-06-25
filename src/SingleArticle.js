import React, { Component } from "react";
import * as api from "./api";
import Error from "./Error";

export class SingleArticle extends Component {
  state = {
    article: {},
    comments: [],
    hasError: false,
    loading: true
  };

  render() {
    const { article, comments, hasError, loading } = this.state;

    if (loading) return <p>Loading...</p>;
    if (hasError) return <Error error={hasError} />;

    return (
      <div className="ArticleList container">
        <div className="row article-card">
          <div className="col s12 m6">
            <ul className="card z-depth-0 article-list">
              <span className="card-title">
                <p>{article.title}</p>
              </span>
              {/* <span className="card-body">{article.body}</span> */}
              <span className="card-topic">
                <p>{article.topic}</p>
              </span>
              <span className="card-created-at">
                <p>{article.created_at}</p>
              </span>
              <p className="grey-text">
                <i className="material-icons">thumb_up</i>
                {article.votes}
              </p>
              <p className="grey-text">
                <i className="material-icons">comments</i>
                {article.comment_count}
              </p>
              <p className="grey-text">
                <i className="material-icons">perm_identity</i>
                {article.author}
              </p>
            </ul>
          </div>
        </div>
        <div className="row comments-card">
          <div className="col s12 m6">
            <div className="col s12 m5 offset-m1">
              {comments
                ? comments.map((comment, index) => {
                    return (
                      <ul className="card z-depth-0 comment-list" key={index}>
                        <span className="comment-author">
                          <p className="grey-text">
                            <i className="material-icons">perm_identity</i>
                            {comment.author}
                          </p>
                        </span>
                        <span className="comment-author">{comment.body}</span>
                        <span className="comment-author">
                          <p className="grey-text">
                            <i className="material-icons">thumb_up</i>
                            {comment.votes}
                          </p>
                        </span>
                      </ul>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    const { article_id } = this.props;

    const article = api.getArticleById(article_id);
    const comments = api.getComments(article_id);

    return Promise.all([article, comments])
      .then(([article, comments]) =>
        this.setState({ article, comments, loading: false, hasError: false })
      )
      .catch(error => {
        this.setState({ hasError: error, loading: false });
        console.dir(error);
      });
  }
}

export default SingleArticle;
