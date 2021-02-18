// Renders HTML of a single event card
export const Event = (eventObject) => {
    return `
        <div class="event-card card p-2">
            <h3 class="event__name">${ eventObject.name }</h3>
            <p class="event__location">Location: ${ eventObject.location }</p>
            <p class="event__date">Date: ${ eventObject.date }</p>
        </div>
    `
}