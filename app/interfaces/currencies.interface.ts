export interface Currency {
    code: string;
    name: string;
    rate: number;
    timestamp: number;
    quotes: {
        [currencyCode: string]: number;
    }
}

export interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
}

export interface BasketItem extends Product {
    quantity: number;
}

export interface Exchange {
    name: string;
    rate: number;
}

export interface BasketState {
    currencies: { [key: string]: number } | null;
    selectedCurrency: Exchange;
    products: Product[];
    basket: BasketItem[];
}