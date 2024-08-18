"use client";

import { Button } from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import { Input } from "@/components/ui/input"

import useCart from "@/hooks/use-cart";
import { useState } from "react";

import { toast } from "react-hot-toast";

interface Discount {
  code: string;
  description: string;
  discountType: "percentage" | "value";
  value: number
}

const discounts: Discount[] = [
  {
    code: "APPLY10",
    description: "To get 10 % off",
    discountType: "percentage",
    value: 10
  }, {
    code: "APPLY100",
    description: "To get ₹100 off",
    discountType: "value",
    value: 100
  }
]



const Summary = () => {
  const items = useCart((state) => state.items);
  const [discountCode, setDiscountCode] = useState<String>("")
  const [discount, setDiscount] = useState<Discount | null>(null)

  const totalPrice = items.reduce(
    (total, item) => total + Number(item.price),
    0
  );
  let discountedPrice = totalPrice

  if (discount) {
    if (discount.discountType === "percentage") {
      discountedPrice = totalPrice - (totalPrice * discount.value) / 100
    }
    else {
      discountedPrice = totalPrice - discount.value
    }
  }

  const onCheckout = () => {
    if (items.length !== 0) {
      toast.success("Successfully order placed")
    }
  }

  const handleDiscount = () => {
    const currentDiscount = discounts.find((discount) => discount.code === discountCode) || null
    if (!currentDiscount) {
      toast.error("Discount coupon not valid")
    }
    toast.success("Discount applied successfully")
    setDiscount(currentDiscount)
  }

  return (
    <div className="px-4 py-6 mt-16 rounded-lg bg-gray-50 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="text-base font-medium text-gray-400">Subtotal</div>
          <Currency value={totalPrice} />
        </div>
        <div className="flex w-full justify-between items-center space-x-2">
          <div className="flex space-x-2 ">
            <Input type="text" onChange={(e) => setDiscountCode(e.target.value)} placeholder="APPLY10 (To get 10% off)" />
            <Button onClick={handleDiscount} type="submit">Apply</Button>
          </div>
          {discount && <Currency value={-(totalPrice - discountedPrice)} />}
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="text-base font-medium text-gray-400">Total price (including discounts)</div>
          <Currency value={discountedPrice} />
        </div>
      </div>
      <Button
        disabled={items.length === 0}
        className="w-full mt-6"
        onClick={onCheckout}
      >
        Checkout
      </Button>
    </div>
  );
};

export default Summary;

