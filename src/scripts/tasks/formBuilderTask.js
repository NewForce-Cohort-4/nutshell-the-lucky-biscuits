import { saveTask, updateStatus } from "./dataProviderTask.js"
import { listTask } from "./listTask.js"
let currentState
export const newTaskButton = () => {
    let contentTarget = document.querySelector('.task-form')
    contentTarget.innerHTML = `
        
            <button type="button"  class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            New Task
            </button>&nbsp
            <button type="button"  class="btn btn-primary" id='completed'>
            Completed Tasks
            </button>&nbsp
            <button type="button"  class="btn btn-primary" id='active'>
            Active Tasks
            </button>
            
        

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog ">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Enter Task Information</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                <div class="modal-body">
                    <div class="container">
                        <form class="form-horizontal">
                            <div class="form-group">
                                <label for="task" class="col-sm-2 control-label">Task</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="task">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="exp-comp-date" class="col-sm-2 control-label">Target Completion</label>
                                <div class="col-sm-10">
                                    <input type="date" class="form-control" id="exp-comp-date">
                                </div>
                            </div>       
                        </form>
                    </div> 
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" id='save-task' class="save-task"  data-bs-dismiss="modal">Save changes</button>
                    
                </div>
            </div>
        </div>
    </div>
    
`
}
// listen for new taks button, draw eentry form when pressed
document.querySelector('body').addEventListener('click', clickEvent => {
if (clickEvent.target.id === 'new-task-btn') {
    taskForm()
}
})
export const taskForm = () => {
        let contentTarget = document.querySelector('.tasks-form')
        contentTarget.innerHTML = `
            <label for='task'>Task</label>
            <input type="text" name='task' id="task">
            <label for='exp-comp-date'>Exp Comp Date</label>
            <input type="text" name='exp-comp-date' id="exp-comp-date">
            <button type='button' id="save-task">Save Task</button>
            
    `
}
//listen for save button, send post call if saved, clear dom and rewrite
let eventHub = document.querySelector('body')
// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    
    if (clickEvent.target.id === "save-task") {
        console.log('hdf');
        // save a new object representation of a note to sever file
        let newTask = ''
        newTask = {
            // Key/value pairs here
            task:document.querySelector("#task").value,
            expCompDate:document.querySelector('#exp-comp-date').value,
            userId:sessionStorage.getItem('activeUser'),
            completed:false
        }
        console.log('h');
        console.log(newTask);
        // Change API state and application state
        saveTask(newTask)
        listTask(false)
    }
})

// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    //when a chckbox is checked, get id and send a patch call to update completion status
    if (clickEvent.target.id.startsWith("check-complete") ) {
        let status = document.getElementById(clickEvent.target.id).checked
        let taskId = clickEvent.target.id.split("--").pop();
        status ? currentState = false : currentState = true;
        updateStatus(taskId, status)

        listTask(currentState)
    }
})
// listen for display completed button, draw completed tasks when pressed
document.querySelector('body').addEventListener('click', clickEvent => {
    if (clickEvent.target.id === 'completed') {
        let currentState = true
        listTask(currentState)
    }
    })

    // listen for display active tasks button, draw active tasks when pressed
document.querySelector('body').addEventListener('click', clickEvent => {
    if (clickEvent.target.id === 'active') {
        let currentState = false
        listTask(currentState)
    }
    })