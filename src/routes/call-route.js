/**
 * @swagger
 * /calls/register/:
 *  post:
 *      summary: Register a call.
 *      description: Register a call by the admin.
 *      tags:
 *          - calls
 *      
 *      parameters:
 *          - in: headers
 *            name: authorization
 *            description: Bearer tokenOfAdmin
 * 
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                          url: 
 *                              type: string
 *                              default: "url of meeting"
 * 
 *                      required:
 *                          - name
 *                          - url
 *      
 *      responses:
 *          '201':
 *              description: Success
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  default: "Successfully Created."
 *          
 *          '400':
 *              description: Invalid Date or Missing Data
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  default: "Missing Data!"
 *                              code:
 *                                  type: String
 *                                  default: "P2000"
 *          
 *          '401':
 *              description: Unauthorized
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: String
 *                                  default: "Unauthorized!"
 *                              code:
 *                                  type: String
 *                                  default: "P2003"
 * 
 *          '403':
 *              description: The user is authenticated but it is not a superuser
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  default: "forbidden!"
 *                              code:
 *                                  type: String
 *                                  default: "P2015"
 * 
 *          '500':
 *              description: An error occurs on the server
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  default: "Server Error!"
 * 
 * /calls/:
 *  post:
 *      summary: Listing the calls in a period
 *      description: Listing the calls between two times
 *      tags:
 *          - calls
 *      
 *      parameters:
 *          - in: headers
 *            name: authorization
 *            description: Bearer tokenOfUser
 *      
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties: 
 *                          before: 
 *                              type: string
 *                              default: 2024-12-06 07:01:14
 *                          after:
 *                              type: string
 *                              default: 2024-12-06 07:01:17
 *                      required:
 *                          - before
 *                          - after
 *      
 *      responses:
 *          '200': 
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              properties:
 *                                  id:
 *                                      type: string
 *                                      default: "e8898538-8252-4a98-8072-c06a058eeb17"
 *                                  name:
 *                                      type: string
 *                                      default: "AI Topic"     
 *                                  time:
 *                                      type: string
 *                                      default: "2024-12-06T07:01:15.000Z"
 *                                  url: 
 *                                      type: string
 *                                      default: "https://meet.google.com/xfo-gkdv-wex"
 *          
 *          '400':
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  default: "Missing Data!"
 *                              code:
 *                                  type: String
 *                                  default: "P2000"
 *
 *               
 *          '401':
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: String
 *                                  default: "Unauthorized!"
 *                              code:
 *                                  type: String
 *                                  default: "P2003"        
 *   
 *          '500':
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  default: "Server Error!"
 * 
 * /calls/:id /:
 *  put:
 *      summary: Update a call
 *      description: Update a call by id by the admin.     
 *      tags:
 *          - calls
 *      
 *      parameters:
 *          - in: headers
 *            name: authorization
 *            description: Bearer tokenOfAdmin
 *      
 *      requestBody:
 *          required: false
 *      
 *      responses:
 *          '202':
 *              description: Success
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message: 
 *                                  type: String
 *                                  default: "Successfully updated."
 *                                        
 *          '404':
 *              description: The call to delete is not found
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: String
 *                                  default: "This call is not found!"
 *                              code:
 *                                  type: String
 *                                  default: "P2006"
 *          
 *          '401':
 *              description: Unauthorized
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: String
 *                                  default: "Unauthorized!"
 *                              code:
 *                                  type: String
 *                                  default: "P2003"
 *                         
 *          '403':
 *              description: The user is authenticated but it is not a superuser
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: String
 *                                  default: "forbidden!"
 *                              code:
 *                                  type: String
 *                                  default: "P2015"
 *                              
 *          '500':
 *              description: An error occurs on the server
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  default: "Server Error!"
 *          
 *              
 * /calls/:id/:
 *  delete:
 *      summary: Delete a call
 *      description: Delete a call by id by the admin
 *      tags:
 *          - calls
 *      
 *      parameters:
 *          - in: headers
 *            name: authorization
 *            description: Bearer tokenOfAdmin
 *      
 *      requestBody:
 *          required: false
 *      
 *      responses:
 *          '204':
 *              description: Success
 *                                        
 *          '404':
 *              description: The call to delete is not found
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: String
 *                                  default: "This call is not found!"
 *                              code:
 *                                  type: String
 *                                  default: "P2006"
 *          
 *          '401':
 *              description: Unauthorized
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: String
 *                                  default: "Unauthorized!"
 *                              code:
 *                                  type: String
 *                                  default: "P2003"
 *                         
 *          '403':
 *              description: The user is authenticated but it is not a superuser
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: String
 *                                  default: "forbidden!"
 *                              code:
 *                                  type: String
 *                                  default: "P2015"
 *                              
 *          '500':
 *              description: An error occurs on the server
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  default: "Server Error!"
      
 * tags:
 *  - name: calls
 *    description: The management of the calls.
 */
import * as views from "../controllers/call-controller.js"
import { isSuperuser, isAuthenticated } from "../middlewares/auth-middleware.js"

import express from "express"


// Creating a router
const router = express.Router()

// Setting the routes
export default router.post('/register/', isSuperuser, views.CreateCallAPIView)
                     .post('/', isAuthenticated, views.ListCallAPIView)
                     .put('/:id/', isSuperuser, views.UpdateCallAPIView)
                     .delete('/:id/', isSuperuser, views.DeleteCallAPIView)
