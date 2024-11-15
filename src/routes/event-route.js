/**
 * @swagger
 * /events/register/:
 *  post:
 *      summary: Create an event.
 *      description: Create an event with a name and a date by the admin.
 *      tags:
 *          - events
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
 *                              type: String
 *                          date:
 *                              type: String
 *                              default: "2024-06-24"
 *                      required:
 *                          - name
 *                          - date
 * 
 *      responses:
 *          '201':
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: String
 *                                  default: "Successfully Created."       
 *          '400':
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: String
 *                                  default: "Missing Data! || Invalid Date!" 
 *                              code: 
 *                                  type: String
 *                                  default: "P2000 || P2017"
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
 *          '403':
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: String
 *                                  default: "Forbidden!"
 *                              code:
 *                                  type: String
 *                                  default: "P2015"
 *                          
 *          '500':
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message: 
 *                                  type: String
 *                                  default: "Server Error!"
 * 
 * /events/:id /:
 *  put:
 *      summary: Update an event.
 *      description: Update an event.
 *      tags:
 *          - events
 * 
 *      parameters:
 *          - in: headers
 *            name: authorization
 *            description: Bearer tokenOfAdmin
 *      
 *      requestBody:
 *          required: false
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: String
 *                          date:
 *                              type: date
 *                              default: "2002-07-03"
 * 
 *      responses:
 *          '202':
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: String
 *                                  default: "Successfully updated."       
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
 *                                  default: P2003
 * 
 *          '404':
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: String
 *                                  default: "This event is not found!"
 *                              code:
 *                                  type: String
 *                                  default: P2007
 *
 *          '403':
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: String
 *                                  default: "Forbidden!"
 *                              code: 
 *                                  type: String
 *                                  default: P2015
 * 
 *          '500':
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message: 
 *                                  type: String
 *                                  default: "Server Error!"
 * 
 * /events/:
 *  post:
 *      summary: Listing all the events in a period.
 *      description: Listing all the events in a period by providing the date's before and the date's after.
 *      tags:
 *          - events
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
 *                              type: String
 *                              default: "2024-06-30"
 *                          after:
 *                              type: String
 *                              default: "2024-06-30"
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
 *                              type: object
 *                              properties:
 *                                  id:
 *                                      type: String
 *                                      default: "6151195b-5544-452d-9dc1-ccfed36d9392"
 *                                  name:
 *                                      type: String
 *                                      default: "Concert de Zied Gharsa au Théâtre Municipal de Sfax"   
 *                                  date: 
 *                                      type: String
 *                                      default: "2024-07-29T00:00:00.000Z"    
 * 
 *          '400':
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: String
 *                                  default: "Missing data"
 *                              code:
 *                                  type: String
 *                                  default: P2000
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
 *                                  default: P2003
 * 
 *          '500':
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: String
 *                                  default: "Server Error!"
 * 
 * /events/:id/:
 *  delete:
 *      summary: Deleting an event.
 *      description: Deleting an event by providing the id as a parameter in the url by the admin.
 *      tags:
 *          - events
 *      
 *      requestBody:
 *          required: false
 *      
 *      responses:
 *          '204':
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: String    
 *                                  default: "Successfully Deleted."
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
 *                                  default: P2003
 * 
 *          '404':
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: String
 *                                  default: "This event is not found!"
 *                              code:
 *                                  type: String
 *                                  default: P2007
 *
 *          '403':
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: String
 *                                  default: "Forbidden!"
 *                              code: 
 *                                  type: String
 *                                  default: P2015
 * 
 *          '500':
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message: 
 *                                  type: String
 *                                  default: "Server Error!"
 * 
 * tags:
 *  - name: events
 *    description: The management of the events.
 */

import express from "express"

import { isSuperuser, isAuthenticated } from "../middlewares/auth-middleware.js"
import * as views from "../controllers/event-controller.js"

// Create the router for the views
const router = express.Router()

export default router.post('/register/', isSuperuser, views.CreateEventAPIView)
                     .post('/', isAuthenticated, views.ListEventAPIView)
                     .delete('/:id/', isSuperuser, views.DeleteEventAPIView)
                     .put('/:id/', isSuperuser, views.UpdateEventAPIView)
