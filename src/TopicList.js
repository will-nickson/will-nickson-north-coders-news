import React, { Component } from "react";
// import { Link } from "@reach/router";

export class TopicList extends Component {
  state = {
    topics: []
  };

  render() {
    return (
      <div className="TopicListBody">
        <ul className="TopicList">
          {/* {topic.map(topic => {
            return (
              <li key={topic.slug}>
                <Link to={`/topic/${topic.slug}`}>{topic.slug}</Link>
              </li>
            );
          })} */}
        </ul>
      </div>
    );
  }

  //   componentDidMount() {
  //     const { topic } = this.props;
  //     api.getArticles(topic).then(articles => this.setState({ articles }));
  //   }
}

export default TopicList;
