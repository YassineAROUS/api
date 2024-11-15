import { PrismaClient } from '@prisma/client'

// Creating an instance from prisma client
export const prisma = new PrismaClient()

// Closing prisma 
export const closePrisma = () => {
    prisma.$disconnect()
}
