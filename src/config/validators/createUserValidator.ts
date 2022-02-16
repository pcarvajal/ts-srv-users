import { body } from 'express-validator';

export const schema = [
    body('name')
        .isString()
        .isLength({ min:1 }),
    body('lastname')
        .isString()
        .isLength({ min:1 }),
    body('lastname2')
        .isString()
        .isLength({ min:1 }),
    body('email')
        .isEmail(),
    body('phone')
        .isString()
        .isLength({ min:9 })
]
export {schema as createUserSchema}