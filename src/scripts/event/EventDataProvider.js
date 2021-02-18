import { EventList } from "./EventList.js"

let events = []

export const useEvents = () => {
    return events.slice()
}

// Fetches events array from local API
export const getEvents = () => {
    return fetch('http://localhost:8088/events')
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