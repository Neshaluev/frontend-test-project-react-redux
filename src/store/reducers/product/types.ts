import {IProduct} from '../../../types';

export type InitialState = {
    isLoading: boolean;
    products: IProduct[];
    error: string;
};

export enum ProductsActionEnum {
    FETCH_PRODUCTS_REQUEST = 'PRODUCTS/FETCH_PRODUCTS_REQUEST',
    FETCH_PRODUCTS_SUCCESS = 'PRODUCTS/FETCH_PRODUCTS_SUCCESS',

    CREATE_PRODUCTS_REQUEST = 'PRODUCTS/CREATE_PRODUCTS_REQUEST',
    CREATE_PRODUCTS_SUCCESS = 'PRODUCTS/CREATE_PRODUCTS_SUCCESS',

    UPDATE_PRODUCTS_REQUEST = 'PRODUCTS/UPDATE_PRODUCTS_REQUEST',
    UPDATE_PRODUCTS_SUCCESS = 'PRODUCTS/UPDATE_PRODUCTS_SUCCESS',

    DELETE_PRODUCTS_REQUEST = 'PRODUCTS/DELETE_PRODUCTS_REQUEST',
    DELETE_PRODUCTS_SUCCESS = 'PRODUCTS/DELETE_PRODUCTS_SUCCESS',

    PRODUCTS_ERROR = 'PRODUCTS/PRODUCTS_ERROR',

    SET_LOADING_PRODUCTS = 'PRODUCTS/SET_LOADING_PRODUCTS',
}
export interface FetchProductsRequestAction {
    type: ProductsActionEnum.FETCH_PRODUCTS_REQUEST;
}
export interface FetchProductsSuccessAction {
    type: ProductsActionEnum.FETCH_PRODUCTS_SUCCESS;
    payload: IProduct[];
}
export interface CreateProductsRequestAction {
    type: ProductsActionEnum.CREATE_PRODUCTS_REQUEST;
}
export interface CreateProductsSuccessAction {
    type: ProductsActionEnum.CREATE_PRODUCTS_SUCCESS;
    payload: IProduct;
}

export interface UpdateProductsRequestAction {
    type: ProductsActionEnum.UPDATE_PRODUCTS_REQUEST;
}
export interface UpdateProductsSuccessAction {
    type: ProductsActionEnum.UPDATE_PRODUCTS_SUCCESS;
    payload: IProduct;
}
export interface DeleteProductsRequestAction {
    type: ProductsActionEnum.DELETE_PRODUCTS_REQUEST;
}
export interface DeleteProductsSucceessAction {
    type: ProductsActionEnum.DELETE_PRODUCTS_SUCCESS;
    payload: string;
}
export interface ProductsErrorAction {
    type: ProductsActionEnum.PRODUCTS_ERROR;
    payload: string;
}

export interface SetLoadingProductsAction {
    type: ProductsActionEnum.SET_LOADING_PRODUCTS;
    payload: boolean;
}

export type ProductsAction =
    | FetchProductsRequestAction
    | FetchProductsSuccessAction
    | ProductsErrorAction
    | CreateProductsRequestAction
    | CreateProductsSuccessAction
    | UpdateProductsRequestAction
    | UpdateProductsSuccessAction
    | DeleteProductsRequestAction
    | DeleteProductsSucceessAction
    | SetLoadingProductsAction;
