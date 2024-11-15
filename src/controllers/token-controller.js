import jwt from 'jsonwebtoken'

import { generateAccessToken, verifyToken } from '../utils/token-utils.js'
import * as messages from '../config/constants.js'

// Refreshing the access token using the refresh token
export const refreshTokenAPIView = (req, res) => {
    const data = req.body
    
    // checking if the token is provided in the request
    if (!data?.refresh)
        return res.status(400).json(messages.missingData)
    
    try {
        const decoded = verifyToken(data.refresh)

        // Setting an access token 
        const access = generateAccessToken(decoded)
        
        return res.status(200).json({access: access})

    } catch (TokenExpiredError) {
        return res.status(401).json(messages.unauthorized)
    }
}

// Verifying the validity of the token
export const verifyTokenAPIView = async (req, res) => {
    const data = req.body

    // checking if the token is provided in the request
    if (!data?.token)
        return res.status(400).json(messages.missingData)
        
    try {
        verifyToken(data.token, process.env.SECRET_KEY)
        
        return res.status(200).json(messages.validToken)

    } catch (TokenExpiredError) {
        return res.status(400).json(messages.invalidToken)
    }
}
