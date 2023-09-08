import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";
import { Product as ProductType } from "@interfaces/currencies.interface";
import CartItem from "@components/Cart/Carttem";

export default function ProductsContainer() {
  const products = useSelector((state: RootState) => state.cart.products);

  return (
    <>
      {products.map((product: ProductType) => (
        <CartItem key={product.id} product={product} />
      ))}
    </>
  );
};
