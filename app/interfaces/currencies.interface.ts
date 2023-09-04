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
    priceGBP: number;
    image: string;
}

export interface BasketItem extends Product {
    quantity: number;
}