export interface user {
    email: string,
    password: string,
    name?: string,
    company?: string,
    role?: string,
    _org?: {
        name?: string;
        email?: string;
    },
    captcha?: string
}