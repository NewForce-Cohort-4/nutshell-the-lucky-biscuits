//WH - Build list item for each article//

import { getArticles, useArticleTags, useTags, getArticleTags, getTags } from "./ArticleProvider.js";

//Accepts single article object and am HTML string for tags
export const article = (article, tagString) => {
  return `
  <li class="list-group-item text-center">
    <div class="list-group list-group-horizontal-sm text-center">
    <h3>${article.title}</h3>
    ${tagString}
    </div>
    <p>${article.url}</p>
    <p>${article.synopsis}</p>
  </li>
  <button type="button" class="btn btn-secondary" id="deleteArticle-${
    article.id
  }">Delete</button>
  `;
}

