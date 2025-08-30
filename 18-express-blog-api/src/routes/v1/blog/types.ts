export interface IBlog {
    id: number;
    name: string;
    status: string;
}

export interface IBlogPayload {
    title: string;
    content: string;
}