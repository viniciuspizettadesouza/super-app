"use client";
import React from "react";
import { BasketProvider } from "@contexts/BasketContext";
import Basket from "@components/Basket/Basket";
import CurrencySelector from "@/app/components/Basket/CurrencySelector";
import ProductsContainer from "@components/Basket/ProductsContainer";

const HomePage: React.FC = () => {
    return (
        <BasketProvider>
            <div className="bg-gray-100">
                <div className="mx-auto container">
                    <div className="flex justify-between p-4">
                        <h1 className="text-3xl font-semibold">Shopping Cart</h1>
                        <CurrencySelector />
                    </div>

                    <ProductsContainer />

                    <h1 className="text-3xl font-semibold">Your Cart</h1>
                    <Basket />
                </div>
            </div>
        </BasketProvider>
    );
};

export default HomePage;
