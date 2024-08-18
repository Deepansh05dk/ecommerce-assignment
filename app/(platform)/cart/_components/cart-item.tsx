"use client";

import Image from "next/image";

import { X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button";

import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { CartItemType } from "@/types";

interface CartItemProps {
  data: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const cart = useCart();

  const allowedQty = Math.min(data.stock, data.minimumOrderQuantity)

  const onRemove = () => {
    cart.removeItem(data.id);
  };

  const handleQtyUpdate = (value: number) => {
    cart.updateItem(data.id, value)
  }

  return (
    <li className="flex py-6 border-b">
      <div className="relative w-32 h-32 overflow-hidden rounded-md sm:h-48 sm:w-48">
        <Image
          fill
          src={data.imageUrl || ""}
          alt=""
          className="object-cover object-center"
        />
      </div>
      <div className="relative flex flex-col justify-between flex-1 ml-4 sm:ml-6">
        <div className="relative flex flex-col space-y-4 pr-9 sm:grid sm:grid-cols-4 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className="text-lg font-normal text-neutral-500">{data.name}</p>
          </div>
          <Currency value={data.price} />
          <div className="flex space-x-5">
            <Select onValueChange={(value) => handleQtyUpdate(Number(value))}>
              <SelectTrigger className="w-[100px]" >
                <SelectValue placeholder={data.quantity} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Quantity</SelectLabel>
                  {
                    Array(allowedQty).fill(null).map((_, index) => {
                      return <SelectItem key={index} value={String(index + 1)}>{index + 1}</SelectItem>
                    })
                  }
                </SelectGroup>
              </SelectContent>
            </Select>
            <Button onClick={onRemove}><X size={15} /></Button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
