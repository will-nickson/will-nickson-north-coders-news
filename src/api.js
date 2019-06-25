import axios from "axios";

const request = axios.create({
  baseURL: `https://will-nickson-nc-news.herokuapp.com/api`
});

export const getArticles = topic => {
  return request
    .get(`/articles`, {
      params: { topic: topic }
    })
    .then(({ data }) => {
      return data.articles;
    });
};

export const getArticleById = article_id => {
  return request.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const getComments = article_id => {
  return request.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const getTopics = topics => {
  return request
    .get(`/topics`, { params: { topics: topics } })
    .then(({ data }) => {
      return data.topics;
    });
};
