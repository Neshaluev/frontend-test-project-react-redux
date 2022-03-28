import {IBrand} from '../../../types';
import {CategoriesActionEnum, CategoryAction, InitialState} from './types';

export const initialState: InitialState = {
    error: '',
    isLoading: false,
    categories: [],
};

const filterBrandById = (state: IBrand[], id: string): IBrand[] =>
    state.filter((item) => item.id !== id);

const updateBrandById = (state: IBrand[], brand: IBrand): IBrand[] =>
    state.map((item) => (item.id === brand.id ? brand : item));

export default function CategoriesReducer(
    state = initialState,
    action: CategoryAction,
): InitialState {
    switch (action.type) {
        case CategoriesActionEnum.FETCH_CATEGORIES_REQUEST:
            return {
                ...state,
                error: '',
                isLoading: true,
                categories: [],
            };
        case CategoriesActionEnum.FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                categories: action.payload,
            };
        case CategoriesActionEnum.CATEGORIES_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case CategoriesActionEnum.CREATE_CATEGORY_REQUEST:
        case CategoriesActionEnum.UPDATE_CATEGORY_REQUEST:
        case CategoriesActionEnum.DELETE_CATEGORY_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case CategoriesActionEnum.SET_LOADING_CATEGORIES:
            return {
                ...state,
                isLoading: action.payload,
            };
        case CategoriesActionEnum.CREATE_CATEGORY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                categories: [...state.categories, action.payload],
            };
        case CategoriesActionEnum.DELETE_CATEGORY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                categories: filterBrandById(state.categories, action.payload),
            };
        case CategoriesActionEnum.UPDATE_CATEGORY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                categories: updateBrandById(state.categories, action.payload),
            };
        default:
            return state;
    }
}
