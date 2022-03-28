import {categorisApi} from '../../../core/api/CategoriesService';
import {IBrand, ICategory} from '../../../types';
import {defaultMessages} from '../../../utils/messages';
import {AppDispatch} from '../..';
import {AlertActionCreator} from '../alert/actions';
import {
    CategoriesActionEnum,
    CategoryErrorAction,
    CreateCategoryRequestAction,
    CreateCategorySuccessAction,
    DeleteCategoryRequestAction,
    DeleteCategorySucceessAction,
    FetchCategoryRequestAction,
    FetchCategorySuccessAction,
    UpdateCategoryRequestAction,
    UpdateCategorySuccessAction,
} from './types';

export const CategoriesActionCreator = {
    fetchCategoriesRequest: (): FetchCategoryRequestAction => ({
        type: CategoriesActionEnum.FETCH_CATEGORIES_REQUEST,
    }),
    fetchCategoriesSuccess: (
        payload: ICategory[],
    ): FetchCategorySuccessAction => ({
        type: CategoriesActionEnum.FETCH_CATEGORIES_SUCCESS,
        payload,
    }),
    createCategoriesRequest: (): CreateCategoryRequestAction => ({
        type: CategoriesActionEnum.CREATE_CATEGORY_REQUEST,
    }),
    createCategoriesSuccess: (
        payload: ICategory,
    ): CreateCategorySuccessAction => ({
        type: CategoriesActionEnum.CREATE_CATEGORY_SUCCESS,
        payload,
    }),
    updateBrandRequest: (): UpdateCategoryRequestAction => ({
        type: CategoriesActionEnum.UPDATE_CATEGORY_REQUEST,
    }),
    updateBrandSuccess: (payload: ICategory): UpdateCategorySuccessAction => ({
        type: CategoriesActionEnum.UPDATE_CATEGORY_SUCCESS,
        payload,
    }),
    deleteCategoriesRequest: (): DeleteCategoryRequestAction => ({
        type: CategoriesActionEnum.DELETE_CATEGORY_REQUEST,
    }),
    deleteCategoriesSuccess: (
        payload: string,
    ): DeleteCategorySucceessAction => ({
        type: CategoriesActionEnum.DELETE_CATEGORY_SUCCESS,
        payload,
    }),
    categoriesError: (payload: string): CategoryErrorAction => ({
        type: CategoriesActionEnum.CATEGORIES_ERROR,
        payload,
    }),
    fetchCategory: () => async (dispatch: AppDispatch) => {
        try {
            dispatch(CategoriesActionCreator.fetchCategoriesRequest());
            const {data} = await categorisApi.getAll();
            dispatch(
                CategoriesActionCreator.fetchCategoriesSuccess(data.categories),
            );
        } catch (error) {
            dispatch(
                CategoriesActionCreator.categoriesError('error category...'),
            );
            dispatch(
                AlertActionCreator.createAlert({
                    type: 'error',
                    message: defaultMessages.loading.error('категорий'),
                }),
            );
        }
    },
    createCategory:
        (data: IBrand, navigation: any) => async (dispatch: AppDispatch) => {
            try {
                dispatch(CategoriesActionCreator.createCategoriesRequest());
                const res = await categorisApi.create(data);
                dispatch(
                    CategoriesActionCreator.createCategoriesSuccess(res.data),
                );
                dispatch(
                    AlertActionCreator.createAlert({
                        type: 'success',
                        message: defaultMessages.all.success,
                    }),
                );
                navigation('/admin-panel');
            } catch (error) {
                dispatch(
                    CategoriesActionCreator.categoriesError(
                        'error category...',
                    ),
                );
                dispatch(
                    AlertActionCreator.createAlert({
                        type: 'error',
                        message: defaultMessages.all.error,
                    }),
                );
            }
        },
    updateCategory:
        (data: IBrand, id: string) => async (dispatch: AppDispatch) => {
            try {
                dispatch(CategoriesActionCreator.updateBrandRequest());
                const res = await categorisApi.update(data, id);
                dispatch(CategoriesActionCreator.updateBrandSuccess(res.data));
                dispatch(
                    AlertActionCreator.createAlert({
                        type: 'success',
                        message: defaultMessages.all.success,
                    }),
                );
            } catch (error) {
                dispatch(
                    CategoriesActionCreator.categoriesError(
                        'error category...',
                    ),
                );
                dispatch(
                    AlertActionCreator.createAlert({
                        type: 'error',
                        message: defaultMessages.all.error,
                    }),
                );
            }
        },
    deleteCategory:
        (id: string, navigation: any) => async (dispatch: AppDispatch) => {
            try {
                dispatch(CategoriesActionCreator.deleteCategoriesRequest());
                const res = await categorisApi.delete(id);
                dispatch(CategoriesActionCreator.deleteCategoriesSuccess(id));
                dispatch(
                    AlertActionCreator.createAlert({
                        type: 'success',
                        message: defaultMessages.all.success,
                    }),
                );
                navigation('/admin-panel');
            } catch (error) {
                dispatch(
                    CategoriesActionCreator.categoriesError(
                        'error category...',
                    ),
                );
                dispatch(
                    AlertActionCreator.createAlert({
                        type: 'error',
                        message: defaultMessages.all.error,
                    }),
                );
            }
        },
};
