export interface User {
    id: string;
    username: string;
    email: string;
    password: string;
    accessToken?: string;
    refreshToken?: string;
    role?: Role;
    createdAt?: Date;
    updatedAt?: Date;
}

enum Role {
    ADMIN = "ADMIN",
    USER = "USER",
}
