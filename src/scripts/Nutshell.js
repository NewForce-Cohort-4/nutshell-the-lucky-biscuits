import { showArticleForm } from "./Articles/ArticleForm.js"
import { articleList } from "./Articles/ArticleList.js"
import {LogOutButton} from "./auth/LogoutButton.js"

export const Nutshell = () => {
    
    LogOutButton()
      // Render all your UI components here
      //console.log(user.id);
  articleList()
  showArticleForm()























      newTaskButton()
      listTask()

    }

import { newTaskButton } from "./tasks/formBuilderTask.js"
import { listTask } from './tasks/listTask.js'