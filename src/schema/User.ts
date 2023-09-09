import {object, string, TypeOf} from 'zod';

export const registerUserSchema = object({
    body: object({
        username: string({
            required_error: 'Username is required'
        }),
        email: string({
            required_error: 'Email is required'
        }).email('Email is not valid'),
        password: string({
            required_error: 'Password is required'
        }).min(8, 'Password must be at least 8 characters long'),
    })
});

export const loginUserSchema = object({
    body: object({
        email: string({
            required_error: 'Email is required'
        }).email('Email is not valid'),
        password: string({
            required_error: 'Password is required'
        }).min(8, 'Password must be at least 8 characters long'),
    })
})

export type SignUpUserInput = TypeOf<typeof registerUserSchema>['body'];
export type SignInUserInput = TypeOf<typeof loginUserSchema>['body'];