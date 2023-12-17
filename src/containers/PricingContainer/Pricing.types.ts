export interface PricingItem {
    id:          number;
    title:       string;
    description: string;
    price:       string;
    mostPopular: boolean;
    included:    Included[];
}

export interface Included {
    id:    number;
    value: string;
    bold?: boolean;
}
