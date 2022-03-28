import {ICategory} from '../../../types';

export type InitialState = {
    isLoading: boolean;
    categories: ICategory[];
    error: string;
};

export enum CategoriesActionEnum {
    FETCH_CATEGORIES_REQUEST = 'CATEGORIES/FETCH_CATEGORIES_REQUEST',
    FETCH_CATEGORIES_SUCCESS = 'CATEGORIES/FETCH_CATEGORIES_SUCCESS',

    CREATE_CATEGORY_REQUEST = 'CATEGORIES/CREATE_CATEGORY_REQUEST',
    CREATE_CATEGORY_SUCCESS = 'CATEGORIES/CREATE_CATEGORY_SUCCESS',

    UPDATE_CATEGORY_REQUEST = 'CATEGORIES/UPDATE_CATEGORY_REQUEST',
    UPDATE_CATEGORY_SUCCESS = 'CATEGORIES/UPDATE_CATEGORY_SUCCESS',

    DELETE_CATEGORY_REQUEST = 'CATEGORIES/DELETE_CATEGORY_REQUEST',
    DELETE_CATEGORY_SUCCESS = 'CATEGORIES/DELETE_CATEGORY_SUCCESS',

    CATEGORIES_ERROR = 'CATEGORIES/CATEGORIES_ERROR',

    SET_LOADING_CATEGORIES = 'CATEGORIES/SET_LOADING_CATEGORIES',
}
export interface FetchCategoryRequestAction {
    type: CategoriesActionEnum.FETCH_CATEGORIES_REQUEST;
}
export interface FetchCategorySuccessAction {
    type: CategoriesActionEnum.FETCH_CATEGORIES_SUCCESS;
    payload: ICategory[];
}
export interface CreateCategoryRequestAction {
    type: CategoriesActionEnum.CREATE_CATEGORY_REQUEST;
}
export interface CreateCategorySuccessAction {
    type: CategoriesActionEnum.CREATE_CATEGORY_SUCCESS;
    payload: ICategory;
}

export interface UpdateCategoryRequestAction {
    type: CategoriesActionEnum.UPDATE_CATEGORY_REQUEST;
}
export interface UpdateCategorySuccessAction {
    type: CategoriesActionEnum.UPDATE_CATEGORY_SUCCESS;
    payload: ICategory;
}
export interface DeleteCategoryRequestAction {
    type: CategoriesActionEnum.DELETE_CATEGORY_REQUEST;
}
export interface DeleteCategorySucceessAction {
    type: CategoriesActionEnum.DELETE_CATEGORY_SUCCESS;
    payload: string;
}
export interface CategoryErrorAction {
    type: CategoriesActionEnum.CATEGORIES_ERROR;
    payload: string;
}

export interface SetLoadingCategoryAction {
    type: CategoriesActionEnum.SET_LOADING_CATEGORIES;
    payload: boolean;
}

export type CategoryAction =
    | FetchCategoryRequestAction
    | FetchCategorySuccessAction
    | CategoryErrorAction
    | CreateCategoryRequestAction
    | CreateCategorySuccessAction
    | UpdateCategoryRequestAction
    | UpdateCategorySuccessAction
    | DeleteCategoryRequestAction
    | DeleteCategorySucceessAction
    | SetLoadingCategoryAction;
