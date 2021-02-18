import { htmlChat } from './chat.js'
import { getChats, useChats, saveChat, getUserName, useUserName } from './dataProviderChat.js'
export const listChats = () => {
    //check for current user id
    let activeUser = sessionStorage.getItem('activeUser')
    //call fx to return data from api
    getChats()
    //instruct program to wait until dat is returned
    .then(() => {
        // taks dont exsist, say so
        const chats = useChats()
        console.log(chats);
        if(chats.length===0){
            document.querySelector('.chat-container').innerHTML = 'Messages will be displayed here'
        }else{
            console.log('chatsin');
            //if there are tasks, iterate through them and print all that are created by current user and not marked comleted
            document.querySelector('.chat-container').innerHTML = ' '
            chats.map(element => {
                document.querySelector('.chat-container').innerHTML += htmlChat(element)
            })
        }
    })
}

// listen for new taks button, draw eentry form when pressed
let eventHub = document.querySelector('body')
// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    
    if (clickEvent.target.id === "chat-submit") {

        let userName = getUserName(sessionStorage.getItem('activeUser'))
        //instruct program to wait until dat is returned
        getUserName(sessionStorage.getItem('activeUser'))
    //instruct program to wait until dat is returned
            .then(() => {
                let userName = useUserName()
                console.log(userName);
            })
        
        // save a new object representation of a note to sever file
        let newChat = ''
        newChat = {
            // Key/value pairs here
            chat:document.querySelector("#message").value,
            userId:sessionStorage.getItem('activeUser'),
            userName:userName
            
        }
        
        
        console.log(newChat);
        // Change API state and application state
        saveChat(newChat)
    }
})
