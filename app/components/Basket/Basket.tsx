import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@app/redux/store";
import { Product } from "@app/interfaces/currencies.interface";
import BasketItem from "@components/Basket/BasketItem";
import Subtotal from "@components/Basket/Subtotal";

export default function Basket() {
    const { products } = useSelector((state: RootState) => state.basket);

    return (
        <div className="mx-auto max-w-5xl justify-between px-6 md:flex md:space-x-6 xl:px-0">
            <div className="flex flex-col">
                {products.map((product: Product) => (
                    <BasketItem key={product.id} product={product} />
                ))}
            </div>

            <Subtotal />
        </div>
    );
};
