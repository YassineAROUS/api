import { prisma } from "../config/database-config.js"

// Creating a call
export const createCall = (callName, url, userId, createdAt) => {
    return prisma.call.create({
        data: {
            name: callName,
            url: url,
            userId: userId,
            createdAt: createdAt
        }
    })
}

// Listing Call in a period
export const listCallInPeriod = (timeBefore, timeAfter) => {
    return prisma.call.findMany({
        where: {
            createdAt: {
                gte: timeAfter,
                lte: timeBefore
            }
        },
        select: {
            id: true,
            name: true,
            url: true,
            createdAt: true
        },
        orderBy: {
            createdAt: 'desc'
        }
    })
}

// Deleting a call
export const deleteCall = (callId) => {
    return prisma.call.delete({
        where: {
            id: callId
        }
    })
}

// Updating a call 
export const updateCall = (callId, data) => {
    return prisma.call.update({
        where: {
            id: callId
        },
        data: data
    })
}

