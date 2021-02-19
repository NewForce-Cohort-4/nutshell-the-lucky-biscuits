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

export const saveTags = (tag) => {
  return fetch("http://localhost:8088/tags", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tag),
  }); 
}

export const saveArticleTags = (articleTag) => {
  return fetch("http://localhost:8088/articleTags", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(articleTag),
  });
};

export let articleObject = {}

export const getSingleArticle = (articleId) => {
  return fetch(`http://localhost:8088/articles/${articleId}`)
    .then((r) => r.json())
    .then((parsedArticle) => {
      articleObject = parsedArticle;
    });
};

export let tagObject = {}



export const getSingleTag = (tagId) => {
  return fetch(`http://localhost:8088/tags/${tagId}`)
    .then((r) => r.json())
    .then((parsedTag) => {
      tagObject = parsedTag;
    });
};

let tags = []
export const useTags = () => tags.slice()

export const getTags = () => {
  return fetch(`http://localhost:8088/tags`)
    .then((r) => r.json())
    .then((parsedTag) => {
      tags= parsedTag;
    });
}