"use client";
import React from "react";
import Cart from "@components/Cart/Cart";
import CurrencySelector from "@components/Cart/CurrencySelector";
import Header from "@components/Cart/Header";

export default function HomePage() {
    return (
        <div className="bg-gray-100 pb-10">
            <div className="mx-auto container">
                <div className="flex justify-between p-4 items-center">
                    <Header title="Shopping Cart" />

                    <CurrencySelector />
                </div>

                <Cart />
            </div>
        </div>
    );
};