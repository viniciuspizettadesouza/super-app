import React from "react";
import { useBasketContext } from "@contexts/BasketContext";
import { Product as ProductType } from "@/app/interfaces/currencies.interface";
import BasketItem from "@components/Basket/BasketItem";

const ProductsContainer: React.FC = () => {
  const { products } = useBasketContext();

  return (
    <>
        {products.map((product: ProductType) => (
          <BasketItem key={product.id} product={product} />
        ))}
    </>
  );
};

export default ProductsContainer;