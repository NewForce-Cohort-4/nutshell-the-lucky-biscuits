export const htmlTask = (task) => {
    
    return `
            <div class="task-card card p-2" ><h3>Task: ${task.task}</h3><br>
            <h5>Complete by: ${task.expCompDate}</h5>
            <div class="form-check">
                <input class="form-check-input" ${task.completed == true ? "checked" : 'notcdafc'} type="checkbox" value="" id="check-complete--${task.id}">
                <label class="form-check-label" for="flexCheckDefault">
                    <h5>Check Completed</h5>
                </label>
            </div>
        </div>
    `
}



