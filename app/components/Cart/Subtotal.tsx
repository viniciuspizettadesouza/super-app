import React, { useMemo } from "react";
import { CartItem } from "@app/interfaces/currencies.interface";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";

export default function Subtotal() {
    const { cart, selectedCurrency } = useSelector((state: RootState) => state.cart);

    const total: number = useMemo(() => {
        return cart.reduce((total: number, item: CartItem) => total + item.price * item.quantity, 0);
    }, [cart]);

    const totalCurrency: string = useMemo(() => {
        return (total * selectedCurrency.rate).toFixed(2);
    }, [total, selectedCurrency.rate]);

    return (
        <div className="h-full rounded-lg border bg-white p-6 shadow-md md:w-1/2">
            <div className="mb-2 flex flex-col justify-between">
                <p className="text-gray-700">Subtotal</p>
                {cart.map((item: CartItem) => (
                    <div key={item.id} className="flex justify-between">
                        <span>{item.name}</span>
                        <span>
                            {item.quantity}x{" "}
                            {selectedCurrency.symbol}{(item.price * selectedCurrency.rate).toFixed(2)} ={" "}
                            {selectedCurrency.symbol}{(item.quantity * item.price * selectedCurrency.rate).toFixed(2)}
                        </span>
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
                    <p className="mb-1 text-lg font-bold">{selectedCurrency.id} {totalCurrency}</p>
                    <p className="text-sm text-gray-700">(USD ${total.toFixed(2)})</p>
                </div>
            </div>
            <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                Check out
            </button>
        </div>
    );
};
