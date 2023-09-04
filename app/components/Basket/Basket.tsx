import React from "react";
import { Product } from "@/app/interfaces/currencies.interface";
import { useBasketContext } from "@contexts/BasketContext";
import BasketItem from "@components/Basket/BasketItem";
import Subtotal from "@components/Basket/Subtotal";

const Basket: React.FC = () => {
    const { products } = useBasketContext();

    return (
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div className="flex flex-col">
                {products.map((product: Product) => (
                    <BasketItem key={product.id} product={product} />
                ))}
            </div>

            <Subtotal />
        </div>
    );
};

export default Basket;
