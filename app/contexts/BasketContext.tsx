'use client';
import React, { createContext, useContext, useState } from "react";
import { Product, Exchange } from "@interfaces/currencies.interface";

const BasketContext = createContext<any>(null);

export const useBasketContext = () => {
  return useContext(BasketContext);
};

interface BasketProviderProps {
  children: React.ReactNode;
}

export default function BasketProvider({ children }: BasketProviderProps) {
  const [currencies, setCurrencies] = useState<{ [key: string]: number } | null>(null);
  const [selectedCurrency, setSelectedCurrency] = useState<Exchange>({ name: "USD", rate: 1 });
  const [products, setProducts] = useState<Product[]>([
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
