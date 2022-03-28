import {IBrand} from '../../../types';

export type InitialState = {
    isLoading: boolean;
    brands: IBrand[];
    brand: null;
    error: string;
};

export enum BrandsActionEnum {
    FETCH_BRANDS_REQUEST = 'BRANDS/FETCH_BRANDS_REQUEST',
    FETCH_BRANDS_SUCCESS = 'BRANDS/FETCH_BRANDS_SUCCESS',

    CREATE_BRAND_REQUEST = 'BRANDS/CREATE_BRAND_REQUEST',
    CREATE_BRAND_SUCCESS = 'BRANDS/CREATE_BRAND_SUCCESS',

    UPDATE_BRAND_REQUEST = 'BRANDS/UPDATE_BRAND_REQUEST',
    UPDATE_BRAND_SUCCESS = 'BRANDS/UPDATE_BRAND_SUCCESS',

    DELETE_BRAND_REQUEST = 'BRANDS/DELETE_BRAND_REQUEST',
    DELETE_BRAND_SUCCESS = 'BRANDS/DELETE_BRAND_SUCCESS',

    BRANDS_ERROR = 'BRANDS/BRANDS_ERROR',

    SET_LOADING_BRANDS = 'BRANDS/SET_LOADING_BRANDS',
}
export interface FetchBrandRequestAction {
    type: BrandsActionEnum.FETCH_BRANDS_REQUEST;
}
export interface FetchBrandSuccessAction {
    type: BrandsActionEnum.FETCH_BRANDS_SUCCESS;
    payload: IBrand[];
}
export interface CreateBrandRequestAction {
    type: BrandsActionEnum.CREATE_BRAND_REQUEST;
}
export interface CreateBrandSuccessAction {
    type: BrandsActionEnum.CREATE_BRAND_SUCCESS;
    payload: IBrand;
}

export interface UpdateBrandRequestAction {
    type: BrandsActionEnum.UPDATE_BRAND_REQUEST;
}
export interface UpdateBrandSuccessAction {
    type: BrandsActionEnum.UPDATE_BRAND_SUCCESS;
    payload: IBrand;
}
export interface DeleteBrandRequestAction {
    type: BrandsActionEnum.DELETE_BRAND_REQUEST;
}
export interface DeleteBrandSucceessAction {
    type: BrandsActionEnum.DELETE_BRAND_SUCCESS;
    payload: string;
}
export interface BrandErrorAction {
    type: BrandsActionEnum.BRANDS_ERROR;
    payload: string;
}

export interface SetLoadingBrandBrandAction {
    type: BrandsActionEnum.SET_LOADING_BRANDS;
    payload: boolean;
}

export type BrandAction =
    | FetchBrandRequestAction
    | FetchBrandSuccessAction
    | BrandErrorAction
    | CreateBrandRequestAction
    | CreateBrandSuccessAction
    | UpdateBrandRequestAction
    | UpdateBrandSuccessAction
    | DeleteBrandRequestAction
    | DeleteBrandSucceessAction
    | SetLoadingBrandBrandAction;
