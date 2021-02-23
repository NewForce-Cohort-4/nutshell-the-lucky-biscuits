import { Event, nextEvent } from "./Event.js";
import { getEvents, useEvents} from "./EventDataProvider.js";

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


// List function to print the appropriate event objects to the DOM
export function EventList() {
    getEvents().then(() => {
        let allTheEvents = useEvents()

        const contentTarget = document.querySelector(".event-list")

        let arrayOfEventsHTMLRepresentations = ""
        let arrayOfNextEventHTML = ""

        let printNextEvent = false

        for(let month = 0; month < months.length; month++){
            let monthlyEvents = []

                    // Filters the array of monthlyEvents
                    monthlyEvents = allTheEvents.filter(x => {
                        return new Date(x.date).getMonth() === month  
                    })
                        // If there are no events in the monthlyEvents then jump over one iteration in the loop
                        if(monthlyEvents.length === 0){
                            continue

                        } else if(monthlyEvents.length > 0 && printNextEvent === false) {
                            // Prints the event that is occuring next in bold
                            arrayOfEventsHTMLRepresentations += nextEvent(monthlyEvents[0])

                            // Loops through the array of events sorted by month and prints the current events for that month
                            for(let i = 1; i < monthlyEvents.length; i++){
                                
                                arrayOfEventsHTMLRepresentations += Event([monthlyEvents[i]])
                            }
                            printNextEvent = true
                        } else {
                            arrayOfEventsHTMLRepresentations += `<h5>${months[month]}<h5><p>(${monthlyEvents.length})</p>`
                            for(const event of monthlyEvents){
                                
                                arrayOfEventsHTMLRepresentations += Event(event)
                            }
                        }              
        }
            const stringOfCurrentEvents = arrayOfNextEventHTML
            const stringOfAllRepresentations = arrayOfEventsHTMLRepresentations
            
            contentTarget.innerHTML = `${stringOfCurrentEvents}${stringOfAllRepresentations}`
    })
} 