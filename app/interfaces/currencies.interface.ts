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

export interface SelectedCurrency {
    id: string;
    rate: number;
    symbol: string;
    name: string;
}

export interface BasketState {
    currencies: SelectedCurrency[];
    selectedCurrency: SelectedCurrency;
    products: Product[];
    basket: BasketItem[];
}
