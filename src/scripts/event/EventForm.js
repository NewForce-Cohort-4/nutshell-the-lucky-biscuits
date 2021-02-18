import { saveEvent } from "./EventDataProvider.js"


export const Form = () => {
    const contentTarget = document.querySelector(".event-form")
    contentTarget.innerHTML = `
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#eventModal">
    Add a new event
  </button>
  
  <div class="modal fade" id="eventModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add A New Event</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <input type="text" class="form-control col-sm-3" placeholder="Event Name" id="event-name" />
          <input type="text" class="form-control col-sm-3" placeholder="Event Location" id="event-location" />
          <input type="date" class="form-control col-sm-3" id="event-date"/>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" id="saveEvent">Save Event</button>
        </div>
      </div>
    </div>
  </div>`
}


// Handle browser-generated click event in component
const eventHub = document.querySelector(".event-form")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveEvent") {
        console.log("You clicked the save event button")
        // Make a new object representation of a note
        const newEvent = {
            name: document.querySelector("#event-name").value,
            location: document.querySelector("#event-location").value,
            date: document.querySelector("#event-date").value,
            userId: sessionStorage.getItem('activeUser')
        }
        
        // Change API state and application state
        saveEvent(newEvent)
    }
})