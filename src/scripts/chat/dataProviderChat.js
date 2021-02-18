//dataProvider pages run fetch call to gather data with get, psot or save data with post

import { listChats } from "./listChats.js"
let users = []
let chats = []
export const useChats = () => {
    //returns a copy of array
    return chats.slice()
}

export const getChats = () => {
    return fetch('http://localhost:8088/messages')
        .then(response => response.json())
        .then(parsedChats => {
            chats = parsedChats
        })
}

export const getUsers = () => {
    return fetch('http://localhost:8088/users')
        .then(response => response.json())
        .then(parsedUsers => {
            users = parsedUsers
            console.log(users);
        })
}
export const useUsers = () => {
    console.log(users);
    return users.slice()
}


export const saveChat = chat => {
    return fetch('http://localhost:8088/messages', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(chat)
        
    }).then(() => {
    listChats()
    })
}



export const deleteTask = taskId => {
    return fetch(`http://localhost:8088/notes/${taskId}`, {
        method: "DELETE"
    })
}


