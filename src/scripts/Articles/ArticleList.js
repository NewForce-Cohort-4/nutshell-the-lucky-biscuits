//WH - Responsible for printing articles to DOM and listening for delete button

import { getArticles, useArticles, deleteArticle } from "./ArticleProvider.js";
import {article} from "./Article.js"

;

//WH - Get articles and pass them to article function that builds list item. Filters based on logged in user//

export const articleList = () => {
  const articleElement = document.querySelector("#articleList");
  getArticles().then(() => {
    
      let articles = useArticles();
      let articleString = "";
      let currentUserId = sessionStorage.getItem("activeUser");
      
    articles = articles.filter(currentArticle => {
      return currentArticle.userId === currentUserId
    })

      for (const singleArticle of articles) {
        articleString += article(singleArticle);
      }
      articleElement.innerHTML = 
    articleString          
    ;
    
  })
  
}
//Event listener for article delete button
const articleElement = document.querySelector("#articleList");

articleElement.addEventListener("click", (e) => {
  if (e.target.id.startsWith("deleteArticle")) {
    const idToDelete = e.target.id.slice(14);
    deleteArticle(idToDelete);
    getArticles().then(articleList);
  }
});