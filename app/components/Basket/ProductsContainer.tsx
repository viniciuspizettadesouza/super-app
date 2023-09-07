import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@app/redux/store";
import { Product as ProductType } from "@app/interfaces/currencies.interface";
import BasketItem from "@components/Basket/BasketItem";

export default function ProductsContainer() {
  const products = useSelector((state: RootState) => state.basket.products);

  return (
    <>
      {products.map((product: ProductType) => (
        <BasketItem key={product.id} product={product} />
      ))}
    </>
  );
};
