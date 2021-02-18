import { Event } from "./Event.js";
import { getEvents, useEvents} from "./EventDataProvider.js";




// List function to loop through array of events and if the userId matches the active user then print it to the DOM
export function EventList() {
    getEvents().then(() => {
        let allTheEvents = useEvents()
        let activeUser = sessionStorage.getItem('activeUser')
        const contentTarget = document.querySelector(".event-list")

        let arrayOfEventsHTMLRepresentations = ""
        for(const currentEventInLoop of allTheEvents){
            if(currentEventInLoop.userId === activeUser) {
                let today = new Date();
                let date = today.getFullYear() + "-" + 0 + (today.getMonth() + 1) + "-" + today.getDate();
                if(date <= currentEventInLoop.date) {
                arrayOfEventsHTMLRepresentations += Event(currentEventInLoop)
                }
            }
        }

        const stringOfAllRepresentations = arrayOfEventsHTMLRepresentations

        contentTarget.innerHTML = `${stringOfAllRepresentations}`

            
    })
}