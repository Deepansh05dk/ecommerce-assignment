export interface ProductType {
    id: number;
    name: string;
    price: string;
    imageUrl: string;
    minimumOrderQuantity: number;
    stock: number;
}


export interface CartItemType extends ProductType {
    quantity: number;
}