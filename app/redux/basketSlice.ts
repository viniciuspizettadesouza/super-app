import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, SelectedCurrency, BasketState, BasketItem, CurrencyInfo } from "@interfaces/currencies.interface";
import { CurrencyData } from "@utils/currencyUtils";

const initialState: BasketState = {
    currencies: [{ id: "USD", rate: 1, symbol: '$', name: 'United States Dollar', }],
    selectedCurrency: { id: "USD", rate: 1, symbol: '$', name: 'United States Dollar', },
    products: [
        {
            id: "peas",
            name: "Peas",
            price: 0.95,
            image:
                "https://images.unsplash.com/photo-1592394533824-9440e5d68530",
        },
        {
            id: "eggs",
            name: "Eggs",
            price: 2.10,
            image:
                "https://images.unsplash.com/photo-1506976785307-8732e854ad03",
        },
        {
            id: "milk",
            name: "Milk",
            price: 1.30,
            image:
                "https://images.unsplash.com/photo-1550583724-b2692b85b150",
        },
        {
            id: "beans",
            name: "Beans",
            price: 0.73,
            image:
                "https://images.unsplash.com/photo-1613758235402-745466bb7efe",
        },
    ],
    basket: [],
};

const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        setSelectedCurrency: (state, action: PayloadAction<SelectedCurrency>) => {
            state.selectedCurrency = action.payload;
        },
        setCurrencies: (state, action: PayloadAction<{ [key: string]: number }>) => {
            const CurrencyDataAssertion = CurrencyData as {
                [key: string]: CurrencyInfo;
            };

            const formattedCurrencies = Object.keys(action.payload).map(
                (currencyCode) => {
                    const currencyId = currencyCode.substring(3);
                    const currencyInfo = CurrencyDataAssertion[currencyId];
                    return {
                        id: currencyId,
                        rate: action.payload[currencyCode],
                        ...currencyInfo,
                    };
                }
            );

            state.currencies = formattedCurrencies;
        },
        setProducts: (state, action: PayloadAction<Product[]>) => {
            state.products = action.payload;
        },
        addItemToBasket: (state, action: PayloadAction<Product>) => {
            const existingItem = state.basket?.find((item) => item.id === action.payload.id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                const newBasketItem: BasketItem = {
                    ...action.payload, quantity: 1,
                };
                state.basket.push(newBasketItem);
            }
        },
        decreaseItemInBasket: (state, action: PayloadAction<Product>) => {
            const existingItem = state.basket?.find((item) => item.id === action.payload.id
            );
            if (existingItem && existingItem.quantity > 0) {
                existingItem.quantity -= 1;
            }
        },
        removeItemFromBasket: (state, action: PayloadAction<Product>) => {
            const indexToRemove = state.basket.findIndex((item) => item.id === action.payload.id);

            if (indexToRemove !== -1) {
                state.basket.splice(indexToRemove, 1);
            }
        },
    },
});

export const {
    setSelectedCurrency,
    setCurrencies,
    setProducts,
    addItemToBasket,
    decreaseItemInBasket,
    removeItemFromBasket
} = basketSlice.actions;

export default basketSlice.reducer;
