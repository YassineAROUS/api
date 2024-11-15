import { prisma } from "../config/database-config.js";

// Creating an event
export const createEvent = (userId, eventName, date, createdAt) => {
    return prisma.event.create({
        data: {
            userId: userId,
            date: date,
            name: eventName,
            createdAt: createdAt
        }
    })
}

// Listing all events after a date and before a date
export const listEventsInPeriod = (afterDate, beforeDate) => {
    return prisma.event.findMany({
        where: {
            date: {
                gte: afterDate,
                lte: beforeDate
            }
        },
        select: {
            id: true,
            name: true,
            date: true
        },
        orderBy: {
            createdAt: 'desc'
        }
    })
}

// deleting an event
export const deleteEvent = (eventId) => {
    return prisma.event.delete({
        where: {
            id: eventId
        }
    })
}

// Updating the event
export const updateEvent = (eventId, eventData) => {
    return prisma.event.update({
        where: {
            id: eventId
        },
        data: eventData
    })
}
