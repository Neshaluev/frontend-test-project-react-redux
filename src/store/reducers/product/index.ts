import {IProduct} from '../../../types';
import {InitialState, ProductsAction, ProductsActionEnum} from './types';

export const initialState: InitialState = {
    error: '',
    isLoading: false,
    products: [],
};

const filterBrandById = (state: IProduct[], id: string): IProduct[] =>
    state.filter((item) => item.id !== id);

const updateBrandById = (state: IProduct[], products: IProduct): IProduct[] =>
    state.map((item) => (item.id === products.id ? products : item));

export default function ProductsReducer(
    state = initialState,
    action: ProductsAction,
): InitialState {
    switch (action.type) {
        case ProductsActionEnum.FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                error: '',
                isLoading: true,
                products: [],
            };
        case ProductsActionEnum.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                products: action.payload,
            };
        case ProductsActionEnum.PRODUCTS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case ProductsActionEnum.CREATE_PRODUCTS_REQUEST:
        case ProductsActionEnum.UPDATE_PRODUCTS_REQUEST:
        case ProductsActionEnum.DELETE_PRODUCTS_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case ProductsActionEnum.SET_LOADING_PRODUCTS:
            return {
                ...state,
                isLoading: action.payload,
            };
        case ProductsActionEnum.CREATE_PRODUCTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                products: [...state.products, action.payload],
            };
        case ProductsActionEnum.DELETE_PRODUCTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                products: filterBrandById(state.products, action.payload),
            };
        case ProductsActionEnum.UPDATE_PRODUCTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                products: updateBrandById(state.products, action.payload),
            };
        default:
            return state;
    }
}
