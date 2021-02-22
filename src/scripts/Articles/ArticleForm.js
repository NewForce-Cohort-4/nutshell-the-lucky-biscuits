//Build form used to create new article objects  and builds object to pass to save function

import {
  getArticles,
  getSingleArticle,
  getTags,
  saveArticle,
  saveArticleTags,
  saveTags,
  useArticles,
  useTags,
} from "./ArticleProvider.js";
import { articleList } from "./ArticleList.js";

//Store today's date//
let today = new Date();
let date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

//Listens for share button, builds new object of an article, calls save function//
document.querySelector(".dashboard").addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "saveMe") {
    let newTitle = document.getElementById("titleInput");
    let newUrl = document.getElementById("urlInput");
    let newSynopsis = document.getElementById("synopsisInput");
    let newTags = document.getElementById("tagInput");

    const newArticle = {
      title: newTitle.value,
      url: newUrl.value,
      synopsis: newSynopsis.value,
      userId: sessionStorage.getItem("activeUser"),
      date: date,
    };
    saveAll(newArticle, newTags.value.split(","));
  }
});

const saveAll = (newArticle, newTags) => {
  let newArticleObject = {};
  let newTagObject = {};
  // Save the article
  saveArticle(newArticle)
    .then((r) => r.json())
    .then((currentArticle) => {
      // Loop through tags
      newArticleObject = currentArticle;
      for (let i = 0; i < newTags.length; i++) {
        // For each tag, query the database to see if it exists already
        let tagIdToSave;

        fetch(`http://localhost:8088/tags?q=${newTags[i]}`)
          .then((r) => r.json())
          .then((matchingTags) => {
             
            if (matchingTags.length === 0) {
              // if not, we need to add the tag and THEN add a new entry to the join table
              let singleTagObject = {
                tag: newTags[i],
              };
              
              saveTags(singleTagObject)
                .then((r) => r.json())
                .then((currentTag) => {
                  newTagObject = currentTag;
                  tagIdToSave = newTagObject.id;
                });
            } else {
              // if it DOES exist in the database, we need to grab its id and save a new entry to the join table

              tagIdToSave = matchingTags[0].id;
            
            }

            // build a join table object and post it
            let newArticleTag = {
              articleId: newArticleObject.id,
              tagId: tagIdToSave,
            };
            saveArticleTags(newArticleTag);
          });
      }
    });
};

const searchTags = (passedTag) => {
  getTags().then(() => {
    let tagArray = useTags();
    console.log(tagArray);
    if (tagArray.length > 0) {
      tagArray.forEach((singleTag) => {
        if (singleTag.tag == passedTag) {
          return singleTag.id;
        } else {
          return false;
        }
      });
    } else {
      return false;
    }
  });
};

export const buildTag = (newTag) => {
  let tagObject = {
    tag: newTag,
  };

  saveTags(tagObject)
    .then((r) => r.json())
    .then((currentTag) => {
      let newTagObject = currentTag;
      return newTagObject;
    });
};

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
                      <div class="input-group mb-3">
                      <input
                        type="text"
                        class="form-control"
                        id="tagInput"
                        placeholder="Tags"
                        aria-label="Tags"
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
};
