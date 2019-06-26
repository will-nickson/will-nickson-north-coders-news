import React, { Component } from "react";
import * as api from "../../api";
import Error from "../../Error";

export class Comments extends Component {
  state = {
    comments: [],
    userComment: "",
    hasError: false,
    loading: true
  };

  render() {
    const { comments, hasError, loading } = this.state;

    if (loading) return <p>Loading...</p>;
    if (hasError) return <Error error={hasError} />;

    return (
      <div className="container section submit-comment">
        <div className="row">
          <form
            onSubmit={this.addComment}
            className="col s12"
            style={{ display: "flex" }}
          >
            <div className="input-field z-depth-1 col s6">
              <div>
                <input
                  type="text"
                  name="userComment"
                  //   style={{ flex: "10", padding: "5px" }}
                  placeholder="Add comment..."
                  value={this.state.userComment}
                  onChange={this.onChange}
                />
              </div>
              <div>
                <input
                  type="submit"
                  value="Submit"
                  className="btn"
                  //   style={{ flex: "1" }}
                />
              </div>
            </div>
          </form>
        </div>
        <div className="container section comments-list">
          <div className="row z-depth-1 comment-card">
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
                        <span className="comment-author">
                          <p>{comment.body}</p>
                        </span>
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
      </div>
    );
  }

  //   addComment = event => {
  //     event.preventDefault();

  //     const { comments } = this.state;
  //     const { article_id, author } = this.props;

  //     api.postComment(article_id, author, userComment).then(({ data }) => {
  //       //   const { userComment } = data;
  //       console.log(data);
  //       this.setState(prevState => {
  //         return {
  //           comments: [...this.state.comments],
  //           userComment: ""
  //         };
  //       });
  //     });
  //   };

  onChange = event => this.setState({ comments: event.target.value });

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
