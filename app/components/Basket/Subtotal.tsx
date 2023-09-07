import React, { useMemo } from "react";
import { BasketItem } from "@app/interfaces/currencies.interface";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

export default function Subtotal() {
    const { basket, selectedCurrency } = useSelector((state: RootState) => state.basket);

    const total: number = useMemo(() => {
        return basket.reduce((total: number, item: BasketItem) => total + item.price * item.quantity, 0);
    }, [basket]);

    const totalCurrency: string = useMemo(() => {
        return (total * selectedCurrency.rate).toFixed(2);
    }, [total, selectedCurrency.rate]);

    return (
        <div className="h-full rounded-lg border bg-white p-6 shadow-md md:w-1/3">
            <div className="mb-2 flex flex-col justify-between">
                <p className="text-gray-700">Subtotal</p>
                {basket.map((item: BasketItem) => (
                    <div key={item.id} className="flex justify-between">
                        <span>{item.name}</span>
                        <span>{item.quantity}x {item.price} = {(item.quantity * item.price).toFixed(2)} </span>
                    </div>
                ))}
            </div>
            <div className="flex justify-between">
                <p className="text-gray-700">Shipping</p>
                <p className="text-gray-700">Free</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
                <p className="bgptext-lg font-bold">Total</p>
                <div className="">
                    <p className="mb-1 text-lg font-bold">${total.toFixed(2)}</p>
                    <p className="text-sm text-gray-700">({selectedCurrency.name} {totalCurrency})</p>
                </div>
            </div>
            <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                Check out
            </button>
        </div>
    );
};
