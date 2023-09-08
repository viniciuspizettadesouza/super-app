"use client";
import React from "react";
import Link from "next/link";
import CurrencySelector from "@components/Cart/CurrencySelector";
import ProductsContainer from "@components/Cart/ProductsContainer";

export default function HomePage() {
    return (
        <div className="bg-gray-100 pb-10">
            <div className="mx-auto container">
                <div className="flex justify-between p-4 items-center">
                    <h1 className="text-3xl font-semibold">Shopping Cart</h1>

                    <div className="flex gap-6">
                        <CurrencySelector />

                        <Link href="/cart/checkout">
                            <span className="block w-fit px-4 py-2 mt-2 rounded-md bg-blue-500 font-medium text-blue-50 hover:bg-blue-600">
                                Cart
                            </span>
                        </Link>
                    </div>
                </div>

                <ProductsContainer />
            </div>
        </div>
    );
};
