import {IBrand} from '../../../types';
import {BrandAction, BrandsActionEnum, InitialState} from './types';

export const initialState: InitialState = {
    error: '',
    isLoading: false,
    brands: [],
    brand: null,
};

const filterBrandById = (state: IBrand[], id: string): IBrand[] =>
    state.filter((item) => item.id !== id);

const updateBrandById = (state: IBrand[], brand: IBrand): IBrand[] =>
    state.map((item) => (item.id === brand.id ? brand : item));

export default function BrandReducer(
    state = initialState,
    action: BrandAction,
): InitialState {
    switch (action.type) {
        case BrandsActionEnum.FETCH_BRANDS_REQUEST:
            return {
                ...state,
                error: '',
                isLoading: true,
                brands: [],
                brand: null,
            };
        case BrandsActionEnum.FETCH_BRANDS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                brands: action.payload,
            };
        case BrandsActionEnum.BRANDS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case BrandsActionEnum.CREATE_BRAND_REQUEST:
        case BrandsActionEnum.UPDATE_BRAND_REQUEST:
        case BrandsActionEnum.DELETE_BRAND_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case BrandsActionEnum.SET_LOADING_BRANDS:
            return {
                ...state,
                isLoading: action.payload,
            };
        case BrandsActionEnum.CREATE_BRAND_SUCCESS:
            return {
                ...state,
                isLoading: false,
                brands: [...state.brands, action.payload],
            };
        case BrandsActionEnum.DELETE_BRAND_SUCCESS:
            return {
                ...state,
                isLoading: false,
                brands: filterBrandById(state.brands, action.payload),
            };
        case BrandsActionEnum.UPDATE_BRAND_SUCCESS:
            return {
                ...state,
                isLoading: false,
                brands: updateBrandById(state.brands, action.payload),
            };
        default:
            return state;
    }
}
