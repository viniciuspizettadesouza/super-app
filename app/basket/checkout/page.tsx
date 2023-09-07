"use client";
import React from "react";
import Basket from "@components/Basket/Basket";
import CurrencySelector from "@app/components/Basket/CurrencySelector";

export default function HomePage() {
    return (
        <div className="bg-gray-100 pb-10">
            <div className="mx-auto container">
                <div className="flex justify-between p-4 items-center">
                    <h1 className="text-3xl font-semibold">Your Cart</h1>

                    <CurrencySelector />
                </div>

                <Basket />
            </div>
        </div>
    );
};