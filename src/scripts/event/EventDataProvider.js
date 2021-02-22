import { EventList } from "./EventList.js"

let events = []

export const useEvents = () => {
    
    // Sorts all the events by date in descending order
    const sortedByDate = events.sort(
        (currentEvent, nextEvent) =>
        Date.parse(currentEvent.date) - Date.parse(nextEvent.date)   
    )
    // Filters out the dates that have already passed
    const upcomingEvents = sortedByDate.filter(currentEvent => {
        return Date.parse(currentEvent.date) >= Date.now()
    })
    
    return upcomingEvents
}

// Fetches events array from local API
export const getEvents = () => {
    const activeUser = sessionStorage.getItem('activeUser')
    return fetch(`http://localhost:8088/events?userId=${activeUser}`)
        .then(response => response.json())
        .then(parsedEvents => {
            events = parsedEvents
        })
}

// Adds new event to events array on local API 
export const saveEvent = event => {
    return fetch('http://localhost:8088/events', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(event)
    }).then((getEvents) => {
        EventList()
        })
}