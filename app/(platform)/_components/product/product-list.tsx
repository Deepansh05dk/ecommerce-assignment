'use client'

import { useState } from "react";

import { ProductType } from "@/types";
import NoResults from "./no-product-results";
import ProductCard from "./product-card";

interface ProductListProps {
  title: string;
  items: ProductType[];
}

const ProductList: React.FC<ProductListProps> = ({ title, items }) => {

  const [productItems, setProductItems] = useState(items)

  return (
    <div className="space-y-4">
      <h3 className="text-3xl text-center sm:text-left font-bold">{title}</h3>
      {items?.length === 0 && <NoResults />}
      <div className="grid p-10 sm:p-0 grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {productItems.map((item) =>
          item.stock > 0 ? <ProductCard key={item.id} data={item} /> : <></>
        )}
      </div>
    </div>
  );
};

export default ProductList;
