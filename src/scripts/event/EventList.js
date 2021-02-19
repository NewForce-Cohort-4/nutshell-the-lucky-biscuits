import { Event, nextEvent } from "./Event.js";
import { getEvents, useEvents} from "./EventDataProvider.js";




// List function to print the appropriate event objects to the DOM
export function EventList() {
    getEvents().then(() => {
        let allTheEvents = useEvents()

        let activeUser = sessionStorage.getItem('activeUser')
        const contentTarget = document.querySelector(".event-list")

        let arrayOfEventsHTMLRepresentations = ""
        let arrayOfNextEventHTML = ""
        for(const currentEventInLoop of allTheEvents){
            // If the event in teh loop has a userId that matches the activeUser then run
            if(currentEventInLoop.userId === activeUser) {
                let today = new Date();
                let date = today.getFullYear() + "-" + 0 + (today.getMonth() + 1) + "-" + today.getDate();
                    // If the current event in loop has an index of 0 then return nextEvent with a paramter of the current event in loop
                    if(currentEventInLoop === allTheEvents[0]){
                        arrayOfNextEventHTML += nextEvent(currentEventInLoop)
                    // If the current event in loop is not at index 0 then run this
                    } else {
                        arrayOfEventsHTMLRepresentations += Event(currentEventInLoop)
                    }                
                
            }
        }
        const stringOfCurrentEvents = arrayOfNextEventHTML
        const stringOfAllRepresentations = arrayOfEventsHTMLRepresentations

        contentTarget.innerHTML = ``
        contentTarget.innerHTML = `${stringOfCurrentEvents}${stringOfAllRepresentations}`


    })
} 