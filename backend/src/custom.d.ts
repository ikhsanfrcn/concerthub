import "express"

export type UserPayload = {
    id: string;
    role: string
}

declare global {
    namespace Express {
        export interface Request {
            user?: UserPayload
        }
    }
}