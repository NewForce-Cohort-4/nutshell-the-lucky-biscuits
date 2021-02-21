import { htmlTask } from './task.js'
import { getTasks, useTasks } from './dataProviderTask.js'
import { taskForm } from './formBuilderTask.js'

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
            console.log(tasks.length);
            console.log(tasks);
            let done = 0
            
            for(let i = 0; i < tasks.length; i++) {
                if(tasks[i].completed === true) {
                    done++;
                } 
                 
            }
            let percentComplete = Math.round((done/tasks.length)*100)
            document.querySelector('.tasks-container').innerHTML = ' '
            document.querySelector('.tasks-container').innerHTML = `<div class='percent-complete d-flex '>Percent of Tasks Completed: ${percentComplete}</div>
            <div class='tasks-inner overflow-auto border'></div>
            ` 
            tasks.map(element => {
                if (element.userId === activeUser && element.completed === currentState){
                    document.querySelector('.tasks-inner').innerHTML += htmlTask(element)
                };

            })
    })
}


