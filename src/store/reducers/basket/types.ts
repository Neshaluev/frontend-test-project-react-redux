import {IProduct} from '../../../types';

export type InitialState = {
    products: IProduct[];
};

export enum BasketActionEnum {
    SET_ITEM_TO_BASKET = 'BASKET/SET_ITEM_TO_BASKET',
    SET_ITEMS_TO_BASKET = 'BASKET/SET_ITEMS_TO_BASKET',
    REMOVE_ITEM_FROM_BASKET = 'BASKET/REMOVE_ITEM_FROM_BASKET',
    CLEAR_BASKET = 'BASKET/CLEAR_BASKET',
}
export interface SetItemToBasketAction {
    type: BasketActionEnum.SET_ITEM_TO_BASKET;
    payload: IProduct;
}
export interface SetItemsToBasketAction {
    type: BasketActionEnum.SET_ITEMS_TO_BASKET;
    payload: IProduct[];
}
export interface RemoveItemFromBasketAction {
    type: BasketActionEnum.REMOVE_ITEM_FROM_BASKET;
    payload: string;
}
export interface ClearBasketAction {
    type: BasketActionEnum.CLEAR_BASKET;
}

export type BasketAction =
    | SetItemToBasketAction
    | RemoveItemFromBasketAction
    | SetItemsToBasketAction
    | ClearBasketAction;
