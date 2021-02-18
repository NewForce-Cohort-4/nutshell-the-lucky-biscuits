//WH - Provides functions that retrieves articles from DB, exports array of articles sorted by date, save articles, and delete articles//


export const saveArticle = (newArticle) => {
  // Use `fetch` with the POST method to add your entry to your API
  return fetch("http://localhost:8088/articles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newArticle),
  }); 
};

let articles = []

export const useArticles = () => {
  const sortedByDate = articles.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate;
}


export const getArticles = () => {
  return fetch('http://localhost:8088/articles')
    .then((r) => r.json())
    .then((parsedArticles) => {
      articles = parsedArticles;
    });
}

export const deleteArticle = (articleId) => {
  return fetch(`http://localhost:8088/articles/${articleId}`, {
    method: "DELETE",
  });
};