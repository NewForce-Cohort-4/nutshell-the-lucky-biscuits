import { showArticleForm } from "./Articles/ArticleForm.js"
import { articleList } from "./Articles/ArticleList.js"
import {LogOutButton} from "./auth/LogoutButton.js"
import { EventList } from "./event/EventList.js"
import { Form } from "./event/EventForm.js"


export const Nutshell = () => {

    LogOutButton()
    Form()
    EventList()
      // Render all your UI components here

    
    LogOutButton()
      // Render all your UI components here
      //console.log(user.id);
  articleList()
  showArticleForm()























      newTaskButton()
      listTask()
      //listCompletedTasks()
      listChats()
    }
import { } from './chat/listChats.js'
import { newTaskButton } from "./tasks/formBuilderTask.js"
import {  listTask } from './tasks/listTask.js'
import { listChats } from './chat/listChats.js'
