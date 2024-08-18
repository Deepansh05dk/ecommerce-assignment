import { db } from '@/lib/db';
import { ProductType } from '@/types';

export async function fetchProducts(): Promise<ProductType[]> {
    try {
        const products = await db.product.findMany({
            select: {
                id: true,
                name: true,
                imageUrl: true,
                price: true,
                stock: true,
                minimumOrderQuantity: true
            }
        });
        return products;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}