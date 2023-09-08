import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@app/redux/store";
import { fetchCurrencies } from "@app/api";
import { setCurrencies, setSelectedCurrency } from "@app/redux/basketSlice";

export default function CurrencyConverter() {
    const { currencies, selectedCurrency } = useSelector((state: RootState) => state.basket);

    console.log(currencies, selectedCurrency)

    const dispatch = useDispatch();
    useEffect(() => {
        if (currencies.length <= 1) {
            fetchCurrencies().then((data) => {
                dispatch(setCurrencies(data));
            });
        }
    }, [currencies, dispatch]);

    const handleCurrencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCode = event.target.value;
        const currency = currencies.find((currency) => currency.id === selectedCode);

        if (currency) {
            const selectedRate = currency.rate;
            const currencyCode = currency.id;

            dispatch(setSelectedCurrency({ ...currency, rate: selectedRate, id: currencyCode }));
        }
    };

    return (
        <div>
            <select
                onChange={handleCurrencyChange}
                value={selectedCurrency.id || ""}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg shadow-sm"
            >
                <option value={"USD" || ""}>
                    {`USD - $ United States Dollar`}
                </option>

                {currencies.map((currency) => (
                    <option key={currency.id} value={currency.id}>
                        {`${currency.id} - ${currency.symbol} ${currency.name}`}
                    </option>
                ))}
            </select>
        </div>
    );
}
