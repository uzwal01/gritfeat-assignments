export interface IBlog {
    id: number;
    title: string;
    content: string;
    createdAt: string;
}

export interface IBlogPayload {
    title: string;
    content: string;
}