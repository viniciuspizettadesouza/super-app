import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";
import { Product } from "@interfaces/currencies.interface";
import CartItem from "@components/Cart/Carttem";
import Subtotal from "@components/Cart/Subtotal";

export default function Cart() {
    const { products } = useSelector((state: RootState) => state.cart);

    return (
        <div className="mx-auto max-w-5xl justify-between px-6 md:flex md:space-x-6 xl:px-0">
            <div className="flex flex-col">
                {products.map((product: Product) => (
                    <CartItem key={product.id} product={product} />
                ))}
            </div>

            <Subtotal />
        </div>
    );
};
