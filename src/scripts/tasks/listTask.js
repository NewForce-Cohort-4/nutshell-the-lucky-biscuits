import { htmlTask } from './task.js'
import { getTasks, useTasks } from './dataProviderTask.js'
export const listTask = () => {
    let activeUser = sessionStorage.getItem('activeUser')
    //call fx to return data from api
    getTasks()
    //instruct program to wait until dat is returned
    .then(() => {
        const tasks = useTasks()
        if(tasks.length===0){
            document.querySelector('.tasks-container').innerHTML = 'Tasks you enter will be displayed here'
        }else{
            
            document.querySelector('.tasks-container').innerHTML = ' '
            tasks.map(element => {
                if (element.userId === activeUser && element.completed === 'no'){
                    document.querySelector('.tasks-container').innerHTML += htmlTask(element)
                };
                
            })
    }
    }) 
    
}