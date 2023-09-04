'use client';
import React, { createContext, useContext, useState } from "react";
import { Product } from "@interfaces/currencies.interface";

const BasketContext = createContext<any>(null);

export const useBasketContext = () => {
  return useContext(BasketContext);
};

interface BasketProviderProps {
  children: React.ReactNode;
}

export const BasketProvider: React.FC<BasketProviderProps> = ({ children }) => {
  const [currencies, setCurrencies] = useState<{ [key: string]: number } | null>(null);
  const [selectedCurrency, setSelectedCurrency] = useState<string>("USD");
  const [products, setProducts] = useState<Product[]>([
    {
      id: "peas",
      name: "Peas",
      priceGBP: 0.95,
      image:
        "https://images.unsplash.com/photo-1592394533824-9440e5d68530?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    },
    {
      id: "eggs",
      name: "Eggs",
      priceGBP: 2.10,
      image:
        "https://images.unsplash.com/photo-1506976785307-8732e854ad03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWdnc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    },
    {
      id: "milk",
      name: "Milk",
      priceGBP: 1.30,
      image:
        "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWlsa3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    },
    {
      id: "beans",
      name: "Beans",
      priceGBP: 0.73,
      image:
        "https://images.unsplash.com/photo-1613758235402-745466bb7efe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmVhbnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
    },
  ]);

  const [basket, setBasket] = useState<{ product: Product; quantity: number }[]>([]);

  const basketContextValues = {
    selectedCurrency,
    setSelectedCurrency,
    currencies,
    setCurrencies,
    products,
    setProducts,
    basket,
    setBasket,
  };

  return (
    <BasketContext.Provider value={basketContextValues}>
      {children}
    </BasketContext.Provider>
  );
};
