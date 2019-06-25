import React, { Component } from "react";
import * as api from "../../api";
import Error from "../../Error";

export class Comments extends Component {
  state = {
    comments: [],
    hasError: false,
    loading: true
  };

  render() {
    const { comments, hasError, loading } = this.state;

    if (loading) return <p>Loading...</p>;
    if (hasError) return <Error error={hasError} />;

    return (
      <div className="Comments container">
        <div className="row comments-card">
          <div className="col s12 m6">
            <div className="col s12 m5 offset-m1">
              {comments &&
                comments.map((comment, index) => {
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
                })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    const { article_id } = this.props;

    api
      .getComments(article_id)
      .then(comments =>
        this.setState({ comments, loading: false, hasError: false })
      )
      .catch(error => {
        this.setState({ hasError: error, loading: false });
        console.dir(error);
      });
  }
}

export default Comments;
