import {brandsApi} from '../../../core/api/BrandsService';
import {IBrand} from '../../../types';
import {defaultMessages} from '../../../utils/messages';
import {AppDispatch} from '../..';
import {AlertActionCreator} from '../alert/actions';
import {
    BrandErrorAction,
    BrandsActionEnum,
    CreateBrandRequestAction,
    CreateBrandSuccessAction,
    DeleteBrandRequestAction,
    DeleteBrandSucceessAction,
    FetchBrandRequestAction,
    FetchBrandSuccessAction,
    UpdateBrandRequestAction,
    UpdateBrandSuccessAction,
} from './types';

export const BrandActionCreator = {
    fetchBrandRequest: (): FetchBrandRequestAction => ({
        type: BrandsActionEnum.FETCH_BRANDS_REQUEST,
    }),
    fetchBrandSuccess: (payload: IBrand[]): FetchBrandSuccessAction => ({
        type: BrandsActionEnum.FETCH_BRANDS_SUCCESS,
        payload,
    }),
    createBrandRequest: (): CreateBrandRequestAction => ({
        type: BrandsActionEnum.CREATE_BRAND_REQUEST,
    }),
    createBrandSuccess: (payload: IBrand): CreateBrandSuccessAction => ({
        type: BrandsActionEnum.CREATE_BRAND_SUCCESS,
        payload,
    }),
    updateBrandRequest: (): UpdateBrandRequestAction => ({
        type: BrandsActionEnum.UPDATE_BRAND_REQUEST,
    }),
    updateBrandSuccess: (payload: IBrand): UpdateBrandSuccessAction => ({
        type: BrandsActionEnum.UPDATE_BRAND_SUCCESS,
        payload,
    }),
    deleteBrandRequest: (): DeleteBrandRequestAction => ({
        type: BrandsActionEnum.DELETE_BRAND_REQUEST,
    }),
    deleteBrandSuccess: (payload: string): DeleteBrandSucceessAction => ({
        type: BrandsActionEnum.DELETE_BRAND_SUCCESS,
        payload,
    }),
    brandsError: (payload: string): BrandErrorAction => ({
        type: BrandsActionEnum.BRANDS_ERROR,
        payload,
    }),
    fetchBrand: () => async (dispatch: AppDispatch) => {
        try {
            dispatch(BrandActionCreator.fetchBrandRequest());
            const {data} = await brandsApi.getAll();
            dispatch(BrandActionCreator.fetchBrandSuccess(data.brands));
        } catch (error) {
            dispatch(BrandActionCreator.brandsError('error brands...'));
        }
    },
    createBrand:
        (data: IBrand, navigation: any) => async (dispatch: AppDispatch) => {
            try {
                dispatch(BrandActionCreator.createBrandRequest());
                const res = await brandsApi.create(data);
                dispatch(
                    AlertActionCreator.createAlert({
                        type: 'success',
                        message: defaultMessages.all.success,
                    }),
                );
                dispatch(BrandActionCreator.createBrandSuccess(res.data));
                navigation('/admin-panel');
            } catch (error) {
                dispatch(BrandActionCreator.brandsError('error brands...'));
                dispatch(
                    AlertActionCreator.createAlert({
                        type: 'error',
                        message: defaultMessages.all.error,
                    }),
                );
            }
        },
    updateBrand:
        (data: IBrand, id: string) => async (dispatch: AppDispatch) => {
            try {
                dispatch(BrandActionCreator.updateBrandRequest());
                const res = await brandsApi.update(data, id);
                dispatch(BrandActionCreator.updateBrandSuccess(res.data));
                dispatch(
                    AlertActionCreator.createAlert({
                        type: 'success',
                        message: defaultMessages.all.success,
                    }),
                );
            } catch (error) {
                dispatch(BrandActionCreator.brandsError('error brands...'));
                dispatch(
                    AlertActionCreator.createAlert({
                        type: 'error',
                        message: defaultMessages.all.error,
                    }),
                );
            }
        },
    deleteBrand:
        (id: string, navigation: any) => async (dispatch: AppDispatch) => {
            try {
                dispatch(BrandActionCreator.deleteBrandRequest());
                const res = await brandsApi.delete(id);
                dispatch(BrandActionCreator.deleteBrandSuccess(id));
                dispatch(
                    AlertActionCreator.createAlert({
                        type: 'success',
                        message: defaultMessages.all.success,
                    }),
                );
                navigation('/admin-panel');
            } catch (error) {
                dispatch(BrandActionCreator.brandsError('error brands...'));
                dispatch(
                    AlertActionCreator.createAlert({
                        type: 'error',
                        message: defaultMessages.all.error,
                    }),
                );
            }
        },
};
