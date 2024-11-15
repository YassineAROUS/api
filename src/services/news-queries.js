import { prisma } from "../config/database-config.js"

// Create a news
export const createNews = (userId, name, description, image, createdAt) => {
    return prisma.news.create({
        data: {
            userId: userId,
            name: name,
            description: description,
            image: image,
            createdAt: createdAt    
        }
    })
}

// Returning the latest 4 news
export const listLatestFourNews = () => {
    return prisma.news.findMany({
        select: {
            id: true,
            name: true,
            description: true,
            image: true
        },
        orderBy: {
            createdAt: 'desc'
        },
        take: 4
    })
}

// Deleting an news by id
export const deleteNewsById = (newsId) => {
    return prisma.news.delete({
        where: {
            id: newsId
        }
    })
}

// retrieving a news by id
export const retrieveNewById = (newsId) => {
    return prisma.news.findUnique({
        where: {
            id: newsId
        },
        select: {
            image: true
        }
    })
}

// updating a news
export const updateNews = (newsId, data) => {
    return prisma.news.update({
        where: {
            id: newsId
        },
        data: data
    })
}
