//WH - Build list item for each article//

export const article = (article) => {
  return `
  <li class="list-group-item">
    <h3>${article.title}</h3>
    <p>${article.url}</p>
    <p>${article.synopsis}</p>
  </li>
  <button type="button" class="btn btn-secondary" id="deleteArticle-${article.id}">Delete</button>
  `;
}