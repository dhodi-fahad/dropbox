import { Response, Request, NextFunction } from "express";
import Joi, { ValidationResult } from "joi";

export const userSchema = Joi.object({
    id: Joi.number().integer().required(),
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required().min(8)
})


export const validateUser = (
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
    // Validate user data
    const result: ValidationResult = userSchema.validate(
        req.body,
        {abortEarly: false} // Return all errors
        )

    // If there are errors
    // return 422 (Unprocessable Entity)
    if (result.error) {
        return res.status(422).json({
        message: 'Invalid request data',
        errors: result.error.details.map(err => err.message)
        });
    }

    // Pass user data to the next middleware
    next();
};