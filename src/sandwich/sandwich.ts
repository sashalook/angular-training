export type Sauce = 'bbq' | 'soy' | 'yogurt';
export type Ingredient = { name: string, fresh: boolean};

export interface Sandwich{
    id?: number;    //? means variable is optional
    name: string;
    sauce: Sauce;
    ingredients: Ingredient;
    grilled: boolean;
    price: number;
}