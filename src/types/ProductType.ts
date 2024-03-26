export interface ProductType {
    category: string;
    description:string;
    id:number;
    image:string;
    price: number;
    rating: Rating;
    title: string;
    amount?: number
}

interface Rating {
    rate: number;
    count: number;
}