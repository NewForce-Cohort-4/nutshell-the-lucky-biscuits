//Build form used to create new article objects  and builds object to pass to save function

import {saveArticle} from "./ArticleProvider.js"
import { articleList } from "./ArticleList.js";


//Store today's date//
let today = new Date();
let date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

//Listens for share button, builds new object of an article, calls save function//
document
  .querySelector(".dashboard")
  .addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "saveMe") {
      
      let newTitle = document.getElementById("titleInput");
      let newUrl = document.getElementById("urlInput");
      let newSynopsis = document.getElementById("synopsisInput");
      
      const newArticle = {
        title: newTitle.value,
        url: newUrl.value,
        synopsis: newSynopsis.value,
        userId : sessionStorage.getItem("activeUser"),
        date: date
      };
      // debugger
      saveArticle(newArticle).then(articleList)
    }
  });


//Build and print modal for article inputs and button to show modal  
export const showArticleForm = () => {
  document.querySelector(
    "#articleForm"
  ).innerHTML = ` <div class="d-grid gap-2">
              <button
                class="btn btn-primary"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#articleModal"
              >
                Share Article
              </button>
            </div>
            <div
              class="modal fade"
              id="articleModal"
              tabindex="-1"
              aria-labelledby="articleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModal">
                      Share an Article
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <div class="input-group mb-3">
                      <input
                        type="text"
                        class="form-control"
                        id="titleInput"
                        placeholder="Article Title"
                        aria-label="Title"
                        aria-describedby="basic-addon2"
                      />
                    </div>
                    <div class="input-group mb-3">
                      <input
                        type="text"
                        class="form-control"
                        id="urlInput"
                        placeholder="Article URL"
                        aria-label="URL"
                        aria-describedby="basic-addon2"
                      />
                    </div>
                      
                      <div class="input-group">
                        <span class="input-group-text">Article synopsis</span>
                        <textarea
                          class="form-control"
                          id="synopsisInput"
                          aria-label="Synopsis"
                        ></textarea>
                      </div>
                    </div>
                    <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button class="btn btn-primary" id="saveMe" data-bs-dismiss="modal"
                    >Share</button>
                  </div>
                  </div>
                  
                </div>
              </div>
               
            </div>`;
}