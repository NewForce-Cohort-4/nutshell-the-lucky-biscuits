//dataProvider pages run fetch call to gather data with get, psot or save data with post

import { listChats } from "./listChats.js"
let userName = []
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

export const getUserName = (userId) => {
    return fetch(`http://localhost:8088/users/${userId}`)
        .then(response => response.json())
        .then(parsedUserName => {
            let userName = parsedUserName
            console.log(userName);
        })
}
export const useUserName = () => {
    return userName.slice
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


