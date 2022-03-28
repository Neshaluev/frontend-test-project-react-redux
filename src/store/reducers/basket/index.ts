import {IProduct} from '../../../types';
import {localStorage} from '../../../utils/localStorage';
import {BasketAction, BasketActionEnum, InitialState} from './types';

export const initialState: InitialState = {
    products: [],
};

const filterProductsById = (state: IProduct[], id: string): IProduct[] =>
    state.filter((item: IProduct) => item._id !== id);

export default function BasketReducer(
    state = initialState,
    action: BasketAction,
): InitialState {
    switch (action.type) {
        case BasketActionEnum.SET_ITEMS_TO_BASKET:
            return {
                products: action.payload,
            };
        case BasketActionEnum.CLEAR_BASKET:
            localStorage.removeItem('basket');
            return {
                products: [],
            };
        case BasketActionEnum.SET_ITEM_TO_BASKET:
            localStorage.setItemToBasket(action.payload);
            return {
                products: [...state.products, action.payload],
            };
        case BasketActionEnum.REMOVE_ITEM_FROM_BASKET:
            localStorage.removeItemFromBasket(action.payload);
            return {
                products: filterProductsById(state.products, action.payload),
            };
        default:
            return state;
    }
}
