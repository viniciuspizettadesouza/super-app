export type Currency = {
    code: string;
    name: string;
    rate: number;
    timestamp: number;
    quotes: {
        [currencyCode: string]: number;
    };
};

export type Product = {
    id: string;
    name: string;
    price: number;
    image: string;
};

export type BasketItem = Product & {
    quantity: number;
};

export type SelectedCurrency = {
    id: string;
    rate: number;
    symbol: string;
    name: string;
};

export type BasketState = {
    currencies: SelectedCurrency[];
    selectedCurrency: SelectedCurrency;
    products: Product[];
    basket: BasketItem[];
};

export type CurrencyInfo = {
    symbol: string;
    name: string;
};
