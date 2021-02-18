import { getArticles, useArticles } from "./ArticleProvider.js";
import {article} from "./Article.js"

;

export const articleList = () => {
  const articleElement = document.querySelector("#articleList");
  getArticles().then(() => {
    
      let articles = useArticles();
      let articleString = "";
      for (const singleArticle of articles) {
        articleString += article(singleArticle);
      }
      articleElement.innerHTML = 
    articleString          
    ;
    
  })
  
}