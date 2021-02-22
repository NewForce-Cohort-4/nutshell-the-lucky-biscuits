export const htmlChat = (chat, activeUser) => {
    
    return `
    
        <div class="container card mt-2 rounded ${chat.userId === activeUser?'chatlight':'chatdark'}">
            <div class='row '>
                <div class='name col-1 text-truncate text-nowrap'><h6 class='text-truncate fw-bolder'>${chat.userName}</h6></div>
                <div class='col-2 ><small class = 'text-muted'>${chat.time}</small></div>
            </div>
            <div >
                <div class = 'text-right'>${chat.chat}</div
            </div>
            
        </div>     
    `
}
