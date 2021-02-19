import { htmlTask } from './task.js'
import { getTasks, useTasks } from './dataProviderTask.js'

export const listTask = (currentState) => {
    //currentState = (typeof currentState !== 'undefined') ?  currentState : false
    //check for current user id
    let activeUser = sessionStorage.getItem('activeUser')
    //call fx to return data from api
    getTasks()
    //instruct program to wait until dat is returned
    .then(() => {
        // taks dont exsist, say so
        const tasks = useTasks()
            //if there are tasks, iterate through them and print all that are created by current user and not marked comleted
            document.querySelector('.tasks-container').innerHTML = ' '
            tasks.map(element => {
                if (element.userId === activeUser && element.completed === currentState){
                    document.querySelector('.tasks-container').innerHTML += htmlTask(element)
                };
            })
    })
}

