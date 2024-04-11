export type User = {
    email: string;
    password: string;
}

export type LoginUser = {
    email: string;
    password: string;
}

export interface LoginAuthUser {
    email:string;
    accessToken: string;
    _id: string;
}

export interface RegisterAuthUser extends LoginAuthUser {
    _createdOn: number;
}
