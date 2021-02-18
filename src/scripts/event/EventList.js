import { Event } from "./Event.js";
import { getEvents, useEvents} from "./EventDataProvider.js";

// // Query the DOM for the element that your notes will be added to 


// Standard list function you're used to writing by now. BUT, don't call this in main.js! Why not?
export function EventList() {
    getEvents().then(() => {
        let allTheEvents = useEvents()
        const contentTarget = document.querySelector(".event-list")

        // for(const event of allTheEvents){
        //     if(event == entry.moodId){
        //         console.log(moodSelected)
        //          allTheEntries = allTheEntries.filter(currentEntryInLoop => {
                
        //             return currentEntryInLoop.moodId == moodSelected
        //         })
        //     }
        // }

        let arrayOfEventsHTMLRepresentations = ""
        for(const currentEventInLoop of allTheEvents){
            arrayOfEventsHTMLRepresentations += Event(currentEventInLoop)
        }

        const stringOfAllRepresentations = arrayOfEventsHTMLRepresentations

        contentTarget.innerHTML = `<h3>Events</h3>${stringOfAllRepresentations}`

            
    })
}