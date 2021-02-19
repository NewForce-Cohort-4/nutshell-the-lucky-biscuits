//WH - Build list item for each article//

export const article = (article) => {
  return `
  <li class="list-group-item text-center">
    <div class="list-group list-group-horizontal-sm text-center">
    <h3>${article.title}</h3>
    <small class="text-muted ms-5">${buildTags(article)}</small>
    </div>
    <p>${article.url}</p>
    <p>${article.synopsis}</p>
  </li>
  <button type="button" class="btn btn-secondary" id="deleteArticle-${
    article.id
  }">Delete</button>
  `;
}

const buildTags = (article) => {
  let tagArray = article.tags.split(",")
  let tagString = ""
  tagArray.forEach(tag => {
    tagString += `<a href="#" id="tag-link-${tag}" class="tag-link">${tag}</a> `
  });
  return tagString
}

//<div class="list-group list-group-horizontal-sm text-center"></div>
//<small class="text-muted"><a href="" id="article-tags-${articleid}></a></small>
   // </div>