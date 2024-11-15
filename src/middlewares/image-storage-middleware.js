import multer from "multer"

// Setting the process of the storage for the images of the news and the images of the users
const newsStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '/app/images/news/')
    },
    filename: (req, file, cb) => {  
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + '.png')
    }
})

const usersStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '/app/images/users/')
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + '.png')
    }
})

// Setting the middleware of the storage of the images of the news and the users
export const userImageUpload = multer({storage: usersStorage})
export const newsImageUpload = multer({storage: newsStorage})
