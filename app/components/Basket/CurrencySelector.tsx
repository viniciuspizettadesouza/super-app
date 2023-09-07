'use client';
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@app/redux/store";
import { fetchCurrencies } from "@app/api";
import { setCurrencies, setSelectedCurrency } from "@app/redux/basketSlice";

function getLast3Digits(inputString: string): string {
    return inputString.substring(inputString.length - 3);
}

export default function CurrencyConverter() {
    const { currencies, selectedCurrency } = useSelector((state: RootState) => state.basket);

    const dispatch = useDispatch();
    useEffect(() => {
        if (!currencies) {
            fetchCurrencies().then((data) => {
                dispatch(setCurrencies(data));
            });
        }
    }, [currencies, dispatch]);

    const handleCurrencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCode = event.target.value;
        const selectedRate = currencies ? currencies[selectedCode] : 1;
        console.log(selectedRate);

        const last3Digits = getLast3Digits(selectedCode);
        dispatch(setSelectedCurrency({ ...selectedCurrency, rate: selectedRate, name: last3Digits }));
    };

    return (
        <div>
            <select
                onChange={handleCurrencyChange}
                value={selectedCurrency.name || ""}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg shadow-sm"
            >
                <option value="">
                    Select Currency
                </option>
                {currencies &&
                    Object.keys(currencies).map((code) => (
                        <option key={code} value={code}>
                            {getLast3Digits(code)}
                        </option>
                    ))}
            </select>

            {selectedCurrency.name && (
                <p>
                    Selected Currency: {selectedCurrency.name}
                </p>
            )}
        </div>
    );
}
