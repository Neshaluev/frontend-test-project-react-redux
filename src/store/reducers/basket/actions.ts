import {IProduct} from '../../../types';
import {
    BasketActionEnum,
    ClearBasketAction,
    RemoveItemFromBasketAction,
    SetItemToBasketAction,
    SetItemsToBasketAction,
} from './types';

export const BasketActionCreator = {
    addItemToBasket: (payload: IProduct): SetItemToBasketAction => ({
        type: BasketActionEnum.SET_ITEM_TO_BASKET,
        payload,
    }),
    addItemsToBasket: (payload: IProduct[]): SetItemsToBasketAction => ({
        type: BasketActionEnum.SET_ITEMS_TO_BASKET,
        payload,
    }),
    removeItemFromBasket: (payload: string): RemoveItemFromBasketAction => ({
        type: BasketActionEnum.REMOVE_ITEM_FROM_BASKET,
        payload,
    }),
    clearBasket: (): ClearBasketAction => ({
        type: BasketActionEnum.CLEAR_BASKET,
    }),
};
