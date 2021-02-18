import {articleList} from "./ArticleList.js"

export const saveArticle = (newArticle) => {
  // Use `fetch` with the POST method to add your entry to your API
  return fetch("http://localhost:9099/articles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newArticle),
  }); 
};

let articles = []

export const useArticles = () => articles.slice()

export const getArticles = () => {
  return fetch('http://localhost:9099/articles')
    .then((r) => r.json())
    .then((parsedArticles) => {
      articles = parsedArticles;
    });
}