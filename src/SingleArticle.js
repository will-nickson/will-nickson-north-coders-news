import React from "react";
import { Link } from "@reach/router";

export default function SingleArticle({ articles }) {
  return (
    <div className="ArticleList container">
      <div className="row">
        <div className="col s12 m6">
          <ul className="card z-depth-0 article-list">
            {articles.map(article => {
              return (
                <li
                  key={article.article_id}
                  className="card-content grey-text text-darken-3"
                >
                  <span className="card-title">
                    <Link to={`/articles/${article.article_id}`}>
                      {article.title}
                    </Link>
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
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col s12 m5 offset-m1">hi</div>
      </div>
    </div>
  );
}
