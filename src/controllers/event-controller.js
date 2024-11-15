import * as models from "../services/event-queries.js"
import * as messages from "../config/constants.js"
import { getUTCTime, setUTCTunisiaTime } from "../utils/time/time-utils.js"

// Creating an event
export const CreateEventAPIView = async (req, res) => {
    try {
        const eventName = req.body.name
        var eventDate = req.body.date
        const userId = req.user.id

        // Checking the provided data
        if (
            (!eventName) ||
            (!eventDate)
        ) 
            return res.status(400).json(messages.missingData)
        
        // Converting the date to ISO datetime
        eventDate = setUTCTunisiaTime(eventDate)
        if (eventDate === "Invalid date")
            return res.status(400).json(messages.invalidDate)
        
        // Creating the event
        const createdAt = getUTCTime()
        await models.createEvent(userId, eventName, eventDate, createdAt)
        
        return res.status(201).json(messages.successCreation)
    
    } catch(error) {
        return error.code === "P2003" ? res.status(404).json(messages.userNotFound) : res.status(500).json(messages.serverError)
    }
}

// Deleting an event
export const DeleteEventAPIView = async (req, res) => {
    try {
        const eventId = req.params.id

        // Deleting the event 
        await models.deleteEvent(eventId)

        return res.status(204).json(messages.successDeletion)
    
    } catch(error) {
        return error.code === "P2025" ? res.status(404).json(messages.eventNotfound) : res.status(500).json(messages.serverError)
    }
}

// Listing the events in a period
export const ListEventAPIView = async (req, res) => {
    try {
        // Retrieving the period in the request
        var dateAfter = req.body.after
        var dateBefore = req.body.before
        
        // Checking the if the data is provided in the request
        if (!dateAfter || !dateBefore)
            return res.status(400).json(messages.missingData)
        
        // Retrieving the events from the database 
        dateAfter = setUTCTunisiaTime(dateAfter)
        dateBefore = setUTCTunisiaTime(dateBefore)
        const events = await models.listEventsInPeriod(dateAfter, dateBefore)
        return res.status(200).json(events)

    } catch(error) {
        return res.status(500).json(messages.serverError)
    }
}

// Updating the event
export const UpdateEventAPIView = async (req, res) => {
    try {
        const id = req.params.id
        const name = req.body.name
        const date = req.body.date
        var updatedData = {}

        // Checking if the name of the event is provided
        if (name) {
            updatedData.name = name
        }

        // Checking if the date of the event is provided
        if (date) {
            const eventDate = setUTCTunisiaTime(date)
            if (eventDate === "Invalid date")
                return res.status(400).json(messages.invalidDate)

            updatedData.date = eventDate
        }

        // Update the event
        if (updatedData.name || updatedData.date)
            await models.updateEvent(id, updatedData)
        
        return res.status(202).json(messages.successUpdate)

    } catch(error) {
        return error.code === "P2025" ? res.status(404).json(messages.eventNotfound) : res.status(500).json(messages.serverError)
    }
}
