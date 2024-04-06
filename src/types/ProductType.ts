export interface ProductType {
    category: string;
    description:string;
    id:number;
    image:string;
    price: number;
    rating: Rating;
    title: string;
    amount?: number
    data?: []
}

interface Rating {
    rate: number;
    count: number;
}