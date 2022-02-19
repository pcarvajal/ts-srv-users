import express from "express";

import { UserController } from "../../controllers/UserController";
import { ExpressValidatorRequest } from "../middlewares/ExpressValidatorRequest";
import { createUserSchema } from "../validators/user/createUserValidator";

const router = express.Router();
export class UserRoutes {
	private userController: UserController;

	constructor() {
		this.userController = new UserController();
	}
	get routes(): express.Router {
		const controller = this.userController;

		/**
		 * @swagger
		 * tags:
		 *   name: Users
		 *   description: User endpoint
		 */

		/**
		 * @swagger
		 * components:
		 *   schemas:
		 *     Users:
		 *       type: object
		 *       properties:
		 *         name:
		 *           type: string
		 *           description: Name of user
		 *         lastname:
		 *           type: string
		 *           description: Lastname of user
		 *         lastname2:
		 *           type: string
		 *           description: Second lastname of user
		 *         email:
		 *           type: string
		 *           description: Email of user
		 *         phone:
		 *           type: string
		 *           description: Phone of User
		 *       required:
		 *          - name
		 *          - lastname
		 *          - lastname2
		 *          - email
		 *          - phone
		 *       example:
		 *         name: Jhon
		 *         lastname: Doe
		 *         lastname2: Doe 
		 *         email: jhondoe@email.com
		 *         phone: "999999999"
		 *     Error:
		 *       type: object
		 *       properties:
		 *         code:
		 *           type: number
		 *           description: Error code
		 *         error:
		 *           type: string
		 *           description: Error
		 *         description:
		 *           type: object
		 *           description: Error trace
		 *       example:
		 *         code: -1
		 *         error: Validation Error
		 *         description : Email must be valid!
         */


		/**
		 *	@swagger
		 * 	/users:
		 *    post:
		 *      tags: [Users]
		 *      requestBody:
	     *        required: true
		 *        content:
		 *          application/json:
		 *            schema:
		 *              $ref: '#/components/schemas/Users'
		 *      summary: Create user
		 *      responses:
		 *        201: 
		 *          description: User created.
		 *          content:
		 *            application/json:
		 *              schema:
		 *                type: array
		 *                items:
		 *                  $ref: '#/components/schemas/Users'
		 *        400:
		 *          description: Validation error
		 *          content:
		 *            application/json:
		 *              schema:
		 *                type: array
		 *                items:
		 *                  $ref: '#/components/schemas/Error'
		 *        500:
		 *          description: Server error
		 *          content:
		 *            application/json:
		 *              schema:
		 *                type: array
		 *                items:
		 *                  $ref: '#/components/schemas/Error'
		 */
		router.post(
			"/users", 
			createUserSchema,
			ExpressValidatorRequest.validateRequest,
			controller.createUser
		);

		return router;
	}
}
