"use client";
import { MouseEventHandler } from "react";
import Image from "next/image";

import { ShoppingCart } from "lucide-react";

import Currency from "@/components/ui/currency";
import { ProductType } from "@/types";
import { Button } from "@/components/ui/button";
import useCart from "@/hooks/use-cart";

interface ProductCard {
    data: ProductType;
}

const ProductCard: React.FC<ProductCard> = ({ data }) => {
    const cart = useCart();

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();
        cart.addItem({ ...data, quantity: 1 });
    };

    return (
        <div
            className="p-3 space-y-4 bg-white border group rounded-xl flex flex-col "
        >
            {/* Images and Actions */}
            <div className="relative bg-gray-100 aspect-square rounded-xl">
                <Image
                    fill
                    src={data.imageUrl ? data.imageUrl : ""}
                    alt="product-image"
                    className="object-cover rounded-md "
                />
                <div className="absolute w-full px-6 transition opacity-0 group-hover:opacity-100 bottom-5">
                    <div className="flex justify-center gap-x-6">
                        <Button
                            onClick={onAddToCart}
                        >
                            <ShoppingCart size={20} className="text-white" />
                        </Button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col flex-1 space-y-2">
                {/* Description */}
                <div className="flex-1">
                    <p className="text-sm font-light">{data?.name}</p>
                </div>
                {/* Price */}
                <div className="flex items-center justify-between">
                    <Currency value={data?.price} />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;