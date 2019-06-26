import React, { Component } from "react";
import * as api from "../api";
import { Link } from "@reach/router";
import Error from "../Error";

export class TopicList extends Component {
  state = {
    topics: [],
    hasError: false,
    loading: true
  };

  render() {
    const { topics, hasError, loading } = this.state;
    if (loading) return <p>Loading...</p>;
    if (hasError) return <Error error={hasError} />;
    return (
      <div className="container section topic-list">
        <div className="card z-depth-1">
          <div className="card-content">
            {topics.map((topic, index) => {
              return (
                <ul className="card z-depth-1 topic-list" key={index}>
                  <li className="card-content grey-text text-darken-3">
                    <Link to={`/topics/${topic.slug}`}>{topic.slug}</Link>
                  </li>
                  <li className="card-content grey-text text-darken-3">
                    {topic.description}
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    const { topics } = this.props;
    api
      .getTopics(topics)
      .then(topics =>
        this.setState({ topics, loading: false, hasError: false })
      )
      .catch(error => {
        this.setState({ hasError: error, loading: false });
      });
  }
}

export default TopicList;
