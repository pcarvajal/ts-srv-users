import { body } from "express-validator";

import { UserCustomValidators } from "./custom/UserCustomValidators";

const userCustomValidators: UserCustomValidators = new UserCustomValidators();

export const schema = [
	body("name").isString().isLength({ min: 1 }),
	body("lastname").isString().isLength({ min: 1 }),
	body("lastname2").isString().isLength({ min: 1 }),
	body("email")
		.isEmail()
		.custom((value) => userCustomValidators.isValidEmailUser(value)),
	body("phone")
		.isString()
		.isLength({ min: 9 })
		.custom((value) => userCustomValidators.isValidPhoneUser(value)),
];
export { schema as createUserSchema };
