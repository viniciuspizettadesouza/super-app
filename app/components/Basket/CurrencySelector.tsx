'use client';
import React, { useEffect } from "react";
import { useBasketContext } from "@contexts/BasketContext";
import { fetchCurrencies } from "@app/api";

const CurrencyConverter: React.FC = () => {
    const { currencies, selectedCurrency, setCurrencies, setSelectedCurrency } = useBasketContext();

    useEffect(() => {
        if (!currencies) {
            fetchCurrencies().then((data) => {
                console.log(data);
                setCurrencies(data);
            });
        }
    }, [currencies, setCurrencies]);

    const handleCurrencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCode = event.target.value;
        setSelectedCurrency(selectedCode);
    };

    return (
        <div>
            <select
                onChange={handleCurrencyChange}
                value={selectedCurrency || ""}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg shadow-sm"
            >
                <option value="" disabled>
                    Select Currency
                </option>
                {currencies &&
                    Object.keys(currencies).map((code) => (
                        <option key={code} value={code}>
                            {code}
                        </option>
                    ))}
            </select>

            {selectedCurrency && currencies && (
                <p>
                    Selected Currency: {selectedCurrency}
                </p>
            )}
        </div>
    );
};

export default CurrencyConverter;
