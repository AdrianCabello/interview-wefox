export interface Post {
    id?: number;
    title: string;
    content: string;
    lat: number;
    long: number;
    image_url: string;
    create_at?: string;
    updated_at?: string;
}