'use client';
import React, { useEffect } from "react";
import { useBasketContext } from "@contexts/BasketContext";
import { fetchCurrencies } from "@app/api";

function getLast3Digits(inputString: string): string {
    return inputString.substring(inputString.length - 3);
}

const CurrencyConverter: React.FC = () => {
    const { currencies, selectedCurrency, setCurrencies, setSelectedCurrency } = useBasketContext();

    useEffect(() => {
        if (!currencies) {
            fetchCurrencies().then((data) => {
                setCurrencies(data);
            });
        }
    }, [currencies, setCurrencies]);

    const handleCurrencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCode = event.target.value;
        const selectedRate = currencies[selectedCode];

        const last3Digits = getLast3Digits(selectedCode);
        setSelectedCurrency({ ...selectedCurrency, rate: selectedRate, name: last3Digits });
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

            {selectedCurrency.name && currencies && (
                <p>
                    Selected Currency: {selectedCurrency.name}
                </p>
            )}
        </div>
    );
};

export default CurrencyConverter;
