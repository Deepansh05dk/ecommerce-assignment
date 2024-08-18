import Container from "@/components/ui/container";
import Billboard from "./_components/billboard";
import ProductList from "./_components/product/product-list";
import { Product } from "@/types";
import { fetchProducts } from "@/actions/get-products";


export default async function HomePage() {
  const products: Product[] = await fetchProducts()
  return (
    <Container>
      <div className="pb-10 space-y-10">
        <Billboard />
        <div className="flex flex-col px-4 gap-y-8 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
}

