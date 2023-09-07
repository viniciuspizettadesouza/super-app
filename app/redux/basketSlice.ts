import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Exchange, Product } from "@interfaces/currencies.interface";
import { BasketState, BasketItem } from "@interfaces/currencies.interface";

const initialState: BasketState = {
    currencies: null,
    selectedCurrency: { name: "USD", rate: 1 },
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
        setSelectedCurrency: (state, action: PayloadAction<Exchange>) => {
            state.selectedCurrency = action.payload;
        },
        setCurrencies: (state, action: PayloadAction<{ [key: string]: number } | null>) => {
            state.currencies = action.payload;
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
