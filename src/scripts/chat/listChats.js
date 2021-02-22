import { htmlChat } from './chat.js'
import { getChats, useChats, saveChat, getUsers, useUsers } from './dataProviderChat.js'
export const listChats = () => {
    //check for current user id
    let activeUser = sessionStorage.getItem('activeUser')
    //call fx to return data from api
    getChats()
    //instruct program to wait until dat is returned
    .then(() => {
        // taks dont exsist, say so
        const chats = useChats()
        
        if(chats.length===0){
            document.querySelector('.chat-container').innerHTML = 'Messages will be displayed here'
        }else{
            
            //if there are tasks, iterate through them and print all that are created by current user and not marked comleted
            document.querySelector('.chat-container').innerHTML = ' '
            
            chats.map(element => {
                document.querySelector('.chat-container').innerHTML += htmlChat(element, activeUser)
            })
            document.getElementById("chat-container").scrollTop = document.getElementById("chat-container").scrollHeight
    
        }
    })
}

// listen for new taks button, draw eentry form when pressed
let eventHub = document.querySelector('body')
// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    
    if (clickEvent.target.id === "chat-submit") {
        let activeUser = sessionStorage.getItem('activeUser')
        //instruct program to wait until dat is returned
        getUsers()
        //instruct program to wait until dat is returned
            .then(() => {
                const users = useUsers()
                console.log(users);
                let userName = users.find(x => x.id == activeUser)
                // save a new object representation of a note to sever file
                let newChat = ''
                newChat = {
                    // Key/value pairs here
                    chat:document.querySelector("#message").value,
                    userId:sessionStorage.getItem('activeUser'),
                    userName:userName.email,
                    time:new Date().toLocaleTimeString()
            
                }
            // Change API state and application state
            saveChat(newChat)
            document.getElementById("message").value = "";
    })
    }
})
