/**
 * @swagger
 * /news/register/:
 *  post:
 *      summary: Create a news.
 *      description: Create an news with a name, a description, an image and a date by the admin.
 *      tags:
 *          - news
 *      
 *      parameters:
 *          - in: headers
 *            name: authorization
 *            description: Bearer tokenOfAdmin
 *      
 *      requestBody:
 *          required: true
 *          content:
 *              form/data:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name: 
 *                              type: String
 *                          description:
 *                              type: String
 *                          image:
 *                              type: Image
 *                      required:
 *                          - name
 *                          - description
 *                          - image
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
 * /news/:id /:
 *  put:
 *      summary: Update a news.
 *      description: Update the news.
 *      tags:
 *          - news
 *      
 *      parameters:
 *          - in: headers
 *            name: authorization
 *            description: Bearer tokenOfAdmin
 *      
 *      requestBody:
 *          required: true
 *          content:
 *              form/data:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name: 
 *                              type: String
 *                          description:
 *                              type: String
 *                          image:
 *                              type: Image
 *                              default: Image
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
 *          '404':
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: String
 *                                  default: "This news is not found!"
 *                              code:
 *                                  type: String
 *                                  default: "P2014"
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
 * /news/:
 *  get:
 *      summary: Listing the fourth latest news.
 *      description: Listing the fourth latest news.
 *      tags:
 *          - news
 * 
 *      parameters:
 *          - in: headers
 *            name: authorization
 *            description: Bearer tokenOfUser
 * 
 *      requestBody:
 *          required: false
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
 *                                  description:
 *                                      type: String
 *                                      default: "Concert de Zied Gharsa au Théâtre Municipal de Sfax" 
 *                                  image:
 *                                      type: string
 *                                      default: "path" 
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
 * /news/:id/:
 *  delete:
 *      summary: Deleting a news.
 *      description: Deleting news by providing the id as a parameter in the url by the admin.
 *      tags:
 *          - news
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
 *              description: success
 *          
 *          '404':
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: String
 *                                  default: "This news is not found!"
 *                              code:
 *                                  type: String
 *                                  default: "P2014"
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
 *  - name: news
 *    description: The management of the news.
 */

import express from "express"

import * as views from "../controllers/news-controller.js"
import { newsImageUpload } from "../middlewares/image-storage-middleware.js"
import { isAuthenticated, isSuperuser } from "../middlewares/auth-middleware.js"

// setting the routes
const router = express.Router()

export default router.post('/register/', isSuperuser, newsImageUpload.single('image'), views.CreateNewsAPIView)
                     .get('/', isAuthenticated, views.ListNewsAPIView)
                     .delete('/:id/', isSuperuser, views.DeleteNewsAPIView)
                     .put('/:id/', isSuperuser, newsImageUpload.single('image'), views.UpdateNewsAPIView)
