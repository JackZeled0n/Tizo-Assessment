export interface IUser {
    id: number;
    role: "admin" | "user";
    username: string;
    password: string;
}