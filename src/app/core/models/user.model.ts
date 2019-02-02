interface AppUser {
    id: number;
    firstName: string;
    lastName: string;
}

export class User implements AppUser {
    id: number;
    firstName: string;
    lastName: string;
}

export interface LoggedInUser {
    email: string;
    password: string;
    token: string;
}
