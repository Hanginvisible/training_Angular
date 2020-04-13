export interface User {
    id: number;
    username: string;
    name: string;
    age: number;
    gender: string;
}
export interface ResponseApi<T> {
    payload: T[];
    total_count: number;
}