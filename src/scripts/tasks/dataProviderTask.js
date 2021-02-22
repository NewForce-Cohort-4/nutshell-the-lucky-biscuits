//dataProvider pages run fetch call to gather data with get, psot or save data with post

import { listTask } from "./listTask.js"

let tasks = []
export const useTasks = () => {
    //returns a copy of array
    return tasks.slice()
}

export const getTasks = () => {
    return fetch('http://localhost:8088/tasks')
        .then(response => response.json())
        .then(parsedTasks => {
            tasks = parsedTasks
        })
}

export const saveTask = task => {
    return fetch('http://localhost:8088/tasks', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
        
    }).then(() => {
    listTask(false)
    })
}

export const updateStatus = (taskId,completed) => {
    return fetch(`http://localhost:8088/tasks/${taskId}`,{
        method: "PATCH",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(
            {
              "completed": completed          // we are changing the completed status
            }
        )
    });
}

export const deleteTask = taskId => {
    return fetch(`http://localhost:8088/notes/${taskId}`, {
        method: "DELETE"
    })
}


