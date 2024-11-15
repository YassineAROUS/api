/**
 * @swagger
 * /users/?page=1:
 *     get:
 *          summary: Listing the users by pagination.
 *          description: Paginating the list of users, if page is not provided in the url page = 1 will be the default parameter, every request will return 30 objects by providing page in the url as a parameter in the query.
 *          tags:
 *              - users
 *
 *          requestBody:
 *              required: false
 *
 *          parameters:
 *              - in: headers
 *                name: authorization
 *                description: Bearer adminToken
 *
 *          responses:
 *              '200':
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  data:
 *                                      type: array
 *                                      items:
 *                                          properties:
 *                                              id:
 *                                                  type: string
 *                                              name:
 *                                                  type: string
 *                                              email:
 *                                                  type: string
 *                                              birthday:
 *                                                  type: string
 *                                              isActive:
 *                                                  type: boolean
 *                                                  default: false
 *                                              isSuperuser:
 *                                                  type: boolean
 *                                                  default: false
 *                                              created_at:
 *                                                  type: string
 *                                  pagination:
 *                                      type: object
 *                                      properties:
 *                                          records:
 *                                              type: integer
 *                                              default: 100
 *                                          currentPage:
 *                                              type: integer
 *                                              default: 1
 *                                          totalPages:
 *                                              type: integer
 *                                              default: 4
 *
 *              '500':
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  message:
 *                                      type: String
 *                                      default: Server Error!
 * /users/:id/:
 *  get:
 *      summary: Retrieving the informations of the user by providing the id by the admin.
 *      description: Retrieving the informations of the user by providing the id by the admin.
 *      tags:
 *          - users
 *
 *      parameters:
 *          - in: headers
 *            name: authorization
 *            description: Bearer adminToken
 *
 *      requestBody:
 *          required: false
 *
 *      responses:
 *          '200':
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              id:
 *                                  type: string
 *                              email:
 *                                  type: string
 *                              name:
 *                                  type: string
 *                              gender:
 *                                  type: string
 *                                  default: Female
 *                              isSuperuser:
 *                                  type: boolean
 *                                  default: false
 *                              createdAt:
 *                                  type: date time
 *
 *          '404':
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: String
 *                                  default: User is not found!
 *                              code:
 *                                  type: String
 *                                  default: P2004
 *
 *          '403':
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: String
 *                                  default: Forbidden!
 *                              code:
 *                                  type: String
 *                                  default: P2015
 *
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
 *
 *          '500':
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  default: Server Error!
 *
 * /users/me/:
 *  get:
 *      summary: Retrieving the informations of the current authenticated user.
 *      description: Retrieving the informations of the current authenticated user.
 *      tags:
 *          - users
 *
 *      parameters:
 *          - in: headers
 *            name: authorization
 *            description: Bearer userToken
 *
 *      requestBody:
 *          required: false
 *
 *      responses:
 *          '200':
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              id:
 *                                  type: string
 *                              email:
 *                                  type: string
 *                              name:
 *                                  type: string
 *                              gender:
 *                                  type: string
 *                                  default: Male
 *                              isSuperuser:
 *                                  type: boolean
 *                                  default: false
 *                              createdAt:
 *                                  type: date time
 *
 *          '404':
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: String
 *                                  default: User is not found!
 *                              code:
 *                                  type: String
 *                                  default: P2004
 *          '403':
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: String
 *                                  default: Forbidden!
 *                              code:
 *                                  type: String
 *                                  default: P2015
 *
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
 *
 *          '500':
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  default: Server Error!
 *
 * /users/me /:
 *  delete:
 *      summary: Deleting the account of the authenticated user.
 *      description: Deleting the account of the authenticated user.
 *      tags:
 *          - users
 *
 *      parameters:
 *          - in: headers
 *            name: authorization
 *            description: Bearer userToken
 *
 *      requestBody:
 *          required: false
 *
 *      responses:
 *          '204':
 *             description: success
 *
 *          '404':
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: String
 *                                  default: User is not found!
 *                              code:
 *                                  type: String
 *                                  default: P2004
 *
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
 *
 *          '500':
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  default: Server Error!
 *
 * /users/activate/:
 *   post:
 *       summary: Activate an account
 *       description: The admin activate the account of the user
 *       tags:
 *           - users
 *
 *       parameters:
 *           - in: header
 *             name: authorization
 *             description: Bearer adminToken
 *
 *       requestBody:
 *           required: true
 *           content:
 *               application/json:
 *                   schema:
 *                       type: object
 *                       properties:
 *                           userId:
 *                               type: String
 *                       required:
 *                           - userId
 *
 *       responses:
 *           '200':
 *               content:
 *                   application/json:
 *                       schema:
 *                           type: object
 *                           properties:
 *                               message:
 *                                   type: object
 *                                   default: Successfully Updated.
 *
 *           '400':
 *               content:
 *                   application/json:
 *                       schema:
 *                           type: object
 *                           properties:
 *                               message:
 *                                   type: String
 *                                   default: Missing Data!
 *                               code:
 *                                   type: String
 *                                   default: P2000
 *
 *           '404':
 *               content:
 *                   application/json:
 *                       schema:
 *                           type: object
 *                           properties:
 *                               message:
 *                                   type: String
 *                                   default: User is not found!
 *                               code:
 *                                   type: String
 *                                   default: P2004
 *           '403':
 *               content:
 *                   application/json:
 *                       schema:
 *                           type: object
 *                           properties:
 *                               message:
 *                                   type: String
 *                                   default: Forbidden!
 *                               code:
 *                                   type: String
 *                                   default: P2015
 *
 *           '401':
 *               content:
 *                   application/json:
 *                       schema:
 *                           type: object
 *                           properties:
 *                               message:
 *                                   type: String
 *                                   default: Unauthorized!
 *                               code:
 *                                   type: String
 *                                   default: P2003
 *           '500':
 *               content:
 *                   application/json:
 *                       schema:
 *                           type: object
 *                           properties:
 *                               message:
 *                                   type: String
 *                                   default: Server Error!
 *
 *
 * tags:
 *  - name: users
 *    description: The management of the accounts of the users
 */

import * as userController from "../controllers/user-controller.js";
import {
  isAuthenticated,
  isOwner,
  isSuperuser,
} from "../middlewares/auth-middleware.js";
import { Router } from "express";

// Creating an instance from the router
const router = Router();

// routing the views
router.get("/", isSuperuser, userController.listUserAPIView);
router.get(
  "/me/",
  isAuthenticated,
  userController.RetrieveAuthenticatedUserAPIView
);
router.get("/:id/", isSuperuser, userController.RetrieveUserAPIView);

router.delete(
  "/me/",
  isAuthenticated,
  userController.DeleteAuthenticatedUserAPIView
);
router.delete("/:id/", isSuperuser, userController.DeleteUserAPIView);

router.post("/activate/", isSuperuser, userController.ActivateAccountAPIView);

router.patch("/update/", isAuthenticated, userController.UpdateUserNameAPIView);

export default router;

