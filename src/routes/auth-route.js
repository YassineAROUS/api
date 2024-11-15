/**
 * @swagger
 * /auths/register/:
 *   post:
 *       summary: Account's Creation
 *       description: Create an account for the user
 *       tags:
 *           - auths
 *       requestBody:
 *           required: true
 *           content:
 *               application/json:
 *                   schema:
 *                       type: object
 *                       properties:
 *                           email:
 *                               type: String
 *                           password:
 *                               type: String
 *                           gender:
 *                               type: String
 *                               default: "Male || Female"
 *                           name:
 *                               type: String
 *                       required:
 *                           - email
 *                           - name
 *                           - password
 *                           - gender
 *
 *       responses:
 *           '200':
 *               description: Success
 *               content:
 *                   application/json:
 *                       schema:
 *                           type: object
 *                           properties:
 *                               message:
 *                                   type: String
 *                                   default: Successfully Created.
 *           '400':
 *               description: The data is missed
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
 *           '400 ':
 *               description: The form of this email is invalid
 *               content:
 *                   application/json:
 *                       schema:
 *                           type: object
 *                           properties:
 *                               message:
 *                                   type: String
 *                                   default: Invalid Email!
 *                               code:
 *                                   type: String
 *                                   default: P2002
 *           '400  ':
 *               description: This email already exists
 *               content:
 *                   application/json:
 *                       schema:
 *                           type: object
 *                           properties:
 *                               message:
 *                                   type: String
 *                                   default: This email already exists!
 *                               code:
 *                                   type: String
 *                                   default: P2001
 *           ' 400':
 *               description: The name provided is too long
 *               content:
 *                   application/json:
 *                       schema:
 *                           type: object
 *                           properties:
 *                               message:
 *                                   type: String
 *                                   default: The name provided is too long!
 *                               code:
 *                                   type: String
 *                                   default: P2008
 *           '500':
 *               description: An error occured in the server
 *               content:
 *                   application/json:
 *                       schema:
 *                           type: object
 *                           properties:
 *                               message:
 *                                   type: String
 *                                   default: Server Error!
 * /auths/login/:
 *   post:
 *       summary: User Login
 *       description: Loggin the user
 *       tags:
 *           - auths
 *       requestBody:
 *           required: true
 *           content:
 *               application/json:
 *                   schema:
 *                       type: object
 *                       properties:
 *                           email:
 *                               type: String
 *                           password:
 *                               type: String
 *                       required:
 *                           - email
 *                           - password
 *       responses:
 *           '200':
 *               description: Success
 *               content:
 *                   application/json:
 *                       schema:
 *                           type: object
 *                           properties:
 *                               access:
 *                                   type: String
 *                                   default: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImUxZjU2N2Q4LWI3MjEtNDdjNC1iN2I4LTUzNjcyMjVjOTM4MSIsImVtYWlsIjoibW9oYW1lZEBnbWFpbC5jb20iLCJuYW1lIjoibW9oYW1lZCBhd2VkaSIsInBhc3N3b3JkIjoiJDJiJDEwJEQyMU01QVJKd1RyNFI2N3Z5UDB6b3VoQ1o4d1JqNHpuTFN0bVI0VmZSVTBWTUsyeVNvRUZ5IiwiaXNTdXBlcnVzZXIiOmZhbHNlLCJpc0FjdGl2ZSI6ZmFsc2UsImlhdCI6MTcxMTU0MzA4MCwiZXhwIjoxNzExNTQzOTgwfQ.eL8-BJyPBTM5t4T4AmGvILRZKAvfeFmVUDP1tMDjZuA
 *                               refresh:
 *                                   type: String
 *                                   default: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImUxZjU2N2Q4LWI3MjEtNDdjNC1iN2I4LTUzNjcyMjVjOTM4MSIsImVtYWlsIjoibW9oYW1lZEBnbWFpbC5jb20iLCJuYW1lIjoibW9oYW1lZCBhd2VkaSIsInBhc3N3b3JkIjoiJDJiJDEwJEQyMU01QVJKd1RyNFI2N3Z5UDB6b3VoQ1o4d1JqNHpuTFN0bVI0VmZSVTBWTUsyeVNvRUZ5IiwiaXNTdXBlcnVzZXIiOmZhbHNlLCJpc0FjdGl2ZSI6ZmFsc2UsImlhdCI6MTcxMTU0MzA4MCwiZXhwIjoxNzExNTQzOTgwfQ.eL8-BJyPBTM5t4T4AmGvILRZKAvfeFmVUDP1tMDjZuA
 *
 *           '400':
 *               description: The data is missed
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
 *           '400 ':
 *               description: This account is still deactivated
 *               content:
 *                   application/json:
 *                       schema:
 *                           type: object
 *                           properties:
 *                               message:
 *                                   type: String
 *                                   default: The account is still inactive!
 *                               code:
 *                                   type: String
 *                                   default: P2009
 *           '404':
 *               description: This user is not found
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
 *           '401':
 *               description: This user is unauthorized
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
 *               description: An error occured in the server
 *               content:
 *                   application/json:
 *                       schema:
 *                           type: object
 *                           properties:
 *                               message:
 *                                   type: String
 *                                   default: Server Error!
 *
 * tags:
 *   - name: auths
 *     description: The management of the creation of the account and the authentication
 */
import express from "express";

import * as userController from "../controllers/auth-controller.js";

const route = express.Router();

// Routing the urls
export default route
  .post("/register/", userController.CreateUserAPIView)
  .post("/login/", userController.LoginUserAPIView);

