/**
 * @swagger
 * /tokens/:
 *  post:
 *      summary: Refresh the access token
 *      description: Creating an access token by providing the refresh token
 *      tags:
 *          - tokens
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties: 
 *                          refresh:
 *                              type: String
 *                              default: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImUxZjU2N2Q4LWI3MjEtNDdjNC1iN2I4LTUzNjcyMjVjOTM4MSIsImVtYWlsIjoibW9oYW1lZEBnbWFpbC5jb20iLCJuYW1lIjoibW9oYW1lZCBhd2VkaSIsInBhc3N3b3JkIjoiJDJiJDEwJEQyMU01QVJKd1RyNFI2N3Z5UDB6b3VoQ1o4d1JqNHpuTFN0bVI0VmZSVTBWTUsyeVNvRUZ5IiwiaXNTdXBlcnVzZXIiOmZhbHNlLCJpc0FjdGl2ZSI6ZmFsc2UsImlhdCI6MTcxMTU0MzA4MCwiZXhwIjoxNzExNTQzOTgwfQ.eL8-BJyPBTM5t4T4AmGvILRZKAvfeFmVUDP1tMDjZuA
 *                      required:
 *                          - refresh
 *      responses:
 *          '200': 
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              access: 
 *                                  type: String
 *                                  default: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImUxZjU2N2Q4LWI3MjEtNDdjNC1iN2I4LTUzNjcyMjVjOTM4MSIsImVtYWlsIjoibW9oYW1lZEBnbWFpbC5jb20iLCJuYW1lIjoibW9oYW1lZCBhd2VkaSIsInBhc3N3b3JkIjoiJDJiJDEwJEQyMU01QVJKd1RyNFI2N3Z5UDB6b3VoQ1o4d1JqNHpuTFN0bVI0VmZSVTBWTUsyeVNvRUZ5IiwiaXNTdXBlcnVzZXIiOmZhbHNlLCJpc0FjdGl2ZSI6ZmFsc2UsImlhdCI6MTcxMTU0MzA4MCwiZXhwIjoxNzExNTQzOTgwfQ.eL8-BJyPBTM5t4T4AmGvILRZKAvfeFmVUDP1tMDjZuA        
 *          '400':              
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: String
 *                                  default: Missing Data!
 *                              code:
 *                                  type: String
 *                                  default: P2000
 *          '401':
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message: 
 *                                  type: String
 *                                  default: Unauthorized!
 *                              code:
 *                                  type: String
 *                                  default: P2003
 * /tokens/verify/:
 *  post:
 *      summary: Token's validity
 *      description: Verify if the token is valid
 *      tags:
 *          - tokens
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          token:  
 *                              type: String
 *                              default: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImUxZjU2N2Q4LWI3MjEtNDdjNC1iN2I4LTUzNjcyMjVjOTM4MSIsImVtYWlsIjoibW9oYW1lZEBnbWFpbC5jb20iLCJuYW1lIjoibW9oYW1lZCBhd2VkaSIsInBhc3N3b3JkIjoiJDJiJDEwJEQyMU01QVJKd1RyNFI2N3Z5UDB6b3VoQ1o4d1JqNHpuTFN0bVI0VmZSVTBWTUsyeVNvRUZ5IiwiaXNTdXBlcnVzZXIiOmZhbHNlLCJpc0FjdGl2ZSI6ZmFsc2UsImlhdCI6MTcxMTU0MzA4MCwiZXhwIjoxNzExNTQzOTgwfQ.eL8-BJyPBTM5t4T4AmGvILRZKAvfeFmVUDP1tMDjZuA 
 *                      required:
 *                          - token
 *      responses:
 *          '200':
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: String
 *                                  default: The token is valid.
 *          '400':
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: String
 *                                  default: Missing Data!
 *                              code:
 *                                  type: String
 *                                  default: P2000
 *          '400 ': 
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: String
 *                                  default: Invalid Token!
 *                              code: 
 *                                  type: String
 *                                  default: P2005
 * tags:
 *      - name: tokens
 *        description: The management of the tokens
 *           
 */

import express from "express"

import * as tokens from "../controllers/token-controller.js"

// Creating an instance from Router
const router = express.Router()
            
// Setting the routes
export default router.post('/', tokens.refreshTokenAPIView)
                     .post('/verify/', tokens.verifyTokenAPIView)
