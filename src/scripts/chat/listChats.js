import { htmlChat } from './chat.js'
import { getChats, useChats } from './dataProviderChat.js'
export const listTask = () => {
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
            tasks.map(element => {
                document.querySelector('.chat-container').innerHTML += htmlChat(element)
                }
            
        
     
        }
    })
}