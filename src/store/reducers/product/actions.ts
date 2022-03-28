import {productsApi} from '../../../core/api/ProductsService';
import {IProduct} from '../../../types';
import {AppDispatch} from '../..';
import {
    CreateProductsRequestAction,
    CreateProductsSuccessAction,
    DeleteProductsRequestAction,
    DeleteProductsSucceessAction,
    FetchProductsRequestAction,
    FetchProductsSuccessAction,
    ProductsActionEnum,
    ProductsErrorAction,
    UpdateProductsRequestAction,
    UpdateProductsSuccessAction,
} from './types';

export const ProductsActionCreator = {
    fetchProductsRequest: (): FetchProductsRequestAction => ({
        type: ProductsActionEnum.FETCH_PRODUCTS_REQUEST,
    }),
    fetchProductsSuccess: (
        payload: IProduct[],
    ): FetchProductsSuccessAction => ({
        type: ProductsActionEnum.FETCH_PRODUCTS_SUCCESS,
        payload,
    }),
    createProductsRequest: (): CreateProductsRequestAction => ({
        type: ProductsActionEnum.CREATE_PRODUCTS_REQUEST,
    }),
    createProductsSuccess: (
        payload: IProduct,
    ): CreateProductsSuccessAction => ({
        type: ProductsActionEnum.CREATE_PRODUCTS_SUCCESS,
        payload,
    }),
    updateProductsRequest: (): UpdateProductsRequestAction => ({
        type: ProductsActionEnum.UPDATE_PRODUCTS_REQUEST,
    }),
    updateProductsSuccess: (
        payload: IProduct,
    ): UpdateProductsSuccessAction => ({
        type: ProductsActionEnum.UPDATE_PRODUCTS_SUCCESS,
        payload,
    }),
    deleteProductsRequest: (): DeleteProductsRequestAction => ({
        type: ProductsActionEnum.DELETE_PRODUCTS_REQUEST,
    }),
    deleteProductsSuccess: (payload: string): DeleteProductsSucceessAction => ({
        type: ProductsActionEnum.DELETE_PRODUCTS_SUCCESS,
        payload,
    }),
    brandsError: (payload: string): ProductsErrorAction => ({
        type: ProductsActionEnum.PRODUCTS_ERROR,
        payload,
    }),
    fetchProductsWithParams: (params: any) => async (dispatch: AppDispatch) => {
        try {
            dispatch(ProductsActionCreator.fetchProductsRequest());
            const {data} = await productsApi.getAllWithParams(params);
            console.log('fetch products --->', data);
            // setTimeout(() => {
            //   dispatch(ProductsActionCreator.fetchProductsSuccess(data.products));
            // }, 1500);
            dispatch(ProductsActionCreator.fetchProductsSuccess(data.products));
        } catch (error) {
            dispatch(ProductsActionCreator.brandsError('error products...'));
        }
    },
    fetchProducts: () => async (dispatch: AppDispatch) => {
        try {
            dispatch(ProductsActionCreator.fetchProductsRequest());
            const {data} = await productsApi.getAll();
            console.log('fetch products --->', data);
            dispatch(ProductsActionCreator.fetchProductsSuccess(data.products));
        } catch (error) {
            dispatch(ProductsActionCreator.brandsError('error products...'));
        }
    },
    createProducts: (data: any) => async (dispatch: AppDispatch) => {
        try {
            dispatch(ProductsActionCreator.createProductsRequest());
            const res = await productsApi.create(data);
            dispatch(ProductsActionCreator.createProductsSuccess(res.data));
        } catch (error) {
            dispatch(ProductsActionCreator.brandsError('error products...'));
        }
    },
    updateProducts:
        (data: any, id: string) => async (dispatch: AppDispatch) => {
            try {
                dispatch(ProductsActionCreator.updateProductsRequest());
                const res = await productsApi.update(data, id);
                dispatch(ProductsActionCreator.updateProductsSuccess(res.data));
            } catch (error) {
                dispatch(
                    ProductsActionCreator.brandsError('error products...'),
                );
            }
        },
    deleteProducts: (id: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(ProductsActionCreator.deleteProductsRequest());
            const res = await productsApi.delete(id);
            dispatch(ProductsActionCreator.deleteProductsSuccess(id));
        } catch (error) {
            dispatch(ProductsActionCreator.brandsError('error products...'));
        }
    },
};
