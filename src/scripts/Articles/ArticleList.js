//WH - Responsible for printing articles to DOM and listening for delete button

import { getArticles, useArticles, deleteArticle, getArticleTags, getTags, useArticleTags, useTags, getSingleTag, useSingleTag } from "./ArticleProvider.js";
import {article} from "./Article.js"

;

//WH - Get articles and tags, pass them to article function that builds list item. Filters based on logged in user.//

export const articleList = (withTags) => {
  const articleElement = document.querySelector("#articleList");
  getArticles().then(() => {
    ;
    let articles
    let articleString = "";
    let currentUserId = sessionStorage.getItem("activeUser");
    
//If parameter is passed, filter articles with chosen tag
    if(withTags != null){
      var flattened = [].concat.apply([], withTags);
      articles = flattened.filter((currentArticle) => {
      return currentArticle.userId === currentUserId
      })
      
      for (const singleArticle of articles) {
        
        getArticleTags()
          .then(getTags)
          .then(() => {
            let articleTags = useArticleTags();
            let tags = useTags();
            console.log(tags);
            let relatedArticleTags = articleTags.filter(
              (articleTag) => articleTag.articleId === singleArticle.id
            );

            let relatedTags = [];
            for (let i = 0; i < relatedArticleTags.length; i++) {
              relatedTags.push(
                tags.filter((tag) => tag.id === relatedArticleTags[i].tagId)
              );
            }

            let tagString = "";
            relatedTags.forEach((tag) => {
              for (let i = 0; i < tag.length; i++)
                tagString += `<small class="text-muted"><a href="#">${tag[0].tag}</a></small>`;
                
            });
            articleString += article(singleArticle, tagString);
            articleElement.innerHTML = articleString;
          }
          )
      } 
    } else {
      articles = useArticles();
      articles = articles.filter((currentArticle) => {
        return currentArticle.userId === currentUserId;
      });
      for (const singleArticle of articles) {
        getArticleTags()
          .then(getTags)
          .then(() => {
            let articleTags = useArticleTags();
            let tags = useTags();
            console.log(tags);
            let relatedArticleTags = articleTags.filter(
              (articleTag) => articleTag.articleId === singleArticle.id
            );

            let relatedTags = [];
            for (let i = 0; i < relatedArticleTags.length; i++) {
              relatedTags.push(
                tags.filter((tag) => tag.id === relatedArticleTags[i].tagId)
              );
            }

            let tagString = "";
            relatedTags.forEach((tag) => {
              for (let i = 0; i < tag.length; i++)
                tagString += `<small class="text-muted tags" ><a href="#" id="tag-${tag[0].id}">${tag[0].tag}</a></small>`;
                articleString += article(singleArticle, tagString)
            });
            articleElement.innerHTML = articleString 
          })
  
}
    }})
  }
//Event listener for article delete button and tag filter

const articleHTML = document.querySelector("#articleList");
articleHTML.addEventListener("click", (e) => {
  if (e.target.id.startsWith("deleteArticle")) {
    const idToDelete = e.target.id.slice(14);
    deleteArticle(idToDelete);
    getArticles().then(articleList);
  } else if (e.target.id.startsWith("tag")) {
    let tag = {}
    return fetch(`http://localhost:8088/tags/${e.target.id.slice(4)}`)
      .then((r) => r.json())
      .then((parsedTag) => {
        tag = parsedTag;
      })
      .then(getArticles)
      .then(getArticleTags)
      .then(() => {
        let articleTags = useArticleTags();
        let articles = useArticles();
        let relatedArticleTags = articleTags.filter(
          (articleTag) => articleTag.tagId === tag.id
        );
        
        let relatedArticles = []
        for (let i = 0; i < relatedArticleTags.length; i++){
        relatedArticles.push(((articles.filter((article) => article.id === relatedArticleTags[i].articleId))))
 
        }
        articleList(relatedArticles)
      });
  }  
});


