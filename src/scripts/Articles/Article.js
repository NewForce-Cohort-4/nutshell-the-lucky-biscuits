export const article = (article) => {
  return `
  <li class="list-group-item">
    <h3>${article.title}</h3>
    <p>${article.url}</p>
    <p>${article.synopsis}</p>
  </li>
  `;
}