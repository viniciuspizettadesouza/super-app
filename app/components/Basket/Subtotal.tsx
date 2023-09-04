import React, { useMemo } from "react";
import { useBasketContext } from "@contexts/BasketContext";
import { BasketItem } from "@/app/interfaces/currencies.interface";

const Subtotal: React.FC = () => {
    const { products, basket, selectedCurrency } = useBasketContext();
    const exchangeRate = 1.5;

    console.log(products, basket)

    const totalGBP: number = useMemo(() => {
        return basket.reduce((total: number, item: BasketItem) => total + item.priceGBP * item.quantity, 0);
    }, [basket]);

    const totalCurrency: string = useMemo(() => {
        return (totalGBP * exchangeRate).toFixed(2);
    }, [totalGBP]);

    return (
        <div className="h-full rounded-lg border bg-white p-6 shadow-md md:w-1/3">
            <div className="mb-2 flex flex-col justify-between">
                <p className="text-gray-700">Subtotal</p>
                {basket.map((item: BasketItem) => (
                    <div key={item.id} className="flex justify-between">
                        <span>{item.name}</span>
                        <span>{item.quantity}x {item.priceGBP} = {(item.quantity * item.priceGBP).toFixed(2)} </span>
                    </div>
                ))}
            </div>
            <div className="flex justify-between">
                <p className="text-gray-700">Shipping</p>
                <p className="text-gray-700">Free</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
                <p className="text-lg font-bold">Total</p>
                <div className="">
                    <p className="mb-1 text-lg font-bold">£{totalGBP.toFixed(2)}</p>
                    <p className="text-sm text-gray-700">({selectedCurrency} {totalCurrency})</p>
                </div>
            </div>
            <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                Check out
            </button>
        </div>
    );
};

export default Subtotal;
