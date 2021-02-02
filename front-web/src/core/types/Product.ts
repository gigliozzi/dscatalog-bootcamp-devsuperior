export type ProductsResponse = {
    content: Product[];
    totalPages: number;
}

export type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    date: string;
    categories: Category[];
}

export type Category = {
    id: number;
    name: string;
}