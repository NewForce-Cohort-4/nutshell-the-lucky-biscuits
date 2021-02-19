export const htmlTask = (task) => {
    
    return `
            <li class="list-group-item" >Task: ${task.task}<br>Complete by: ${task.expCompDate}</il>
            <div class="form-check">
                <input class="form-check-input" ${task.completed == true ? "checked" : 'notcdafc'} type="checkbox" value="" id="check-complete--${task.id}">
                <label class="form-check-label" for="flexCheckDefault">
                    Mark Completed
                </label>
            </div>
    `
}



