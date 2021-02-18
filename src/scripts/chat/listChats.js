import { htmlChat } from './chat.js'
import { getChats, useChats, saveChat } from './dataProviderChat.js'
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
document.querySelector('body').addEventListener('click', clickEvent => {
    if (clickEvent.target.id === 'chat-submit') {
        console.log("yup");
        saveChat()
    }
    })