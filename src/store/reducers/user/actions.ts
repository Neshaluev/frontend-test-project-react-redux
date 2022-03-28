import {usersApi} from '../../../core/api/UsersService';
import {IUser} from '../../../types';
import {defaultMessages} from '../../../utils/messages';
import {AppDispatch} from '../..';
import {AlertActionCreator} from '../alert/actions';
import {
    CreateUsersRequestAction,
    CreateUsersSuccessAction,
    DeleteUsersRequestAction,
    DeleteUsersSucceessAction,
    FetchUsersRequestAction,
    FetchUsersSuccessAction,
    UpdateUsersRequestAction,
    UpdateUsersSuccessAction,
    UsersActionEnum,
    UsersErrorAction,
} from './types';

export const UsersActionCreator = {
    fetchUsersRequest: (): FetchUsersRequestAction => ({
        type: UsersActionEnum.FETCH_USERS_REQUEST,
    }),
    fetchUsersSuccess: (payload: IUser[]): FetchUsersSuccessAction => ({
        type: UsersActionEnum.FETCH_USERS_SUCCESS,
        payload,
    }),
    createUsersRequest: (): CreateUsersRequestAction => ({
        type: UsersActionEnum.CREATE_USERS_REQUEST,
    }),
    createUsersSuccess: (payload: IUser): CreateUsersSuccessAction => ({
        type: UsersActionEnum.CREATE_USERS_SUCCESS,
        payload,
    }),
    updateUsersRequest: (): UpdateUsersRequestAction => ({
        type: UsersActionEnum.UPDATE_USERS_REQUEST,
    }),
    updateUsersSuccess: (payload: IUser): UpdateUsersSuccessAction => ({
        type: UsersActionEnum.UPDATE_USERS_SUCCESS,
        payload,
    }),
    deleteUsersRequest: (): DeleteUsersRequestAction => ({
        type: UsersActionEnum.DELETE_USERS_REQUEST,
    }),
    deleteUsersSuccess: (payload: string): DeleteUsersSucceessAction => ({
        type: UsersActionEnum.DELETE_USERS_SUCCESS,
        payload,
    }),
    brandsError: (payload: string): UsersErrorAction => ({
        type: UsersActionEnum.USERS_ERROR,
        payload,
    }),
    fetchUsers: () => async (dispatch: AppDispatch) => {
        try {
            dispatch(UsersActionCreator.fetchUsersRequest());
            const {data} = await usersApi.getAll();
            dispatch(UsersActionCreator.fetchUsersSuccess(data.users));
        } catch (error) {
            dispatch(UsersActionCreator.brandsError('error users...'));
            dispatch(
                AlertActionCreator.createAlert({
                    type: 'error',
                    message: defaultMessages.loading.error('пользователей'),
                }),
            );
        }
    },
    createUsers:
        (data: IUser, navigation: any) => async (dispatch: AppDispatch) => {
            try {
                dispatch(UsersActionCreator.createUsersRequest());
                const res = await usersApi.create(data);
                dispatch(UsersActionCreator.createUsersSuccess(res.data));
                dispatch(
                    AlertActionCreator.createAlert({
                        type: 'success',
                        message: defaultMessages.all.success,
                    }),
                );
                navigation('/admin-panel');
            } catch (error) {
                dispatch(UsersActionCreator.brandsError('error users...'));
                dispatch(
                    AlertActionCreator.createAlert({
                        type: 'error',
                        message: defaultMessages.all.error,
                    }),
                );
            }
        },
    updateUsers: (data: IUser, id: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(UsersActionCreator.updateUsersRequest());
            const res = await usersApi.update(data, id);
            dispatch(UsersActionCreator.updateUsersSuccess(res.data));
            dispatch(
                AlertActionCreator.createAlert({
                    type: 'success',
                    message: defaultMessages.all.success,
                }),
            );
        } catch (error) {
            dispatch(UsersActionCreator.brandsError('error users...'));
            dispatch(
                AlertActionCreator.createAlert({
                    type: 'error',
                    message: defaultMessages.all.error,
                }),
            );
        }
    },
    deleteUsers:
        (id: string, navigation: any) => async (dispatch: AppDispatch) => {
            try {
                dispatch(UsersActionCreator.deleteUsersRequest());
                const res = await usersApi.delete(id);
                dispatch(UsersActionCreator.deleteUsersSuccess(id));
                dispatch(
                    AlertActionCreator.createAlert({
                        type: 'success',
                        message: defaultMessages.all.success,
                    }),
                );
                navigation('/admin-panel');
            } catch (error) {
                dispatch(UsersActionCreator.brandsError('error users...'));
                dispatch(
                    AlertActionCreator.createAlert({
                        type: 'error',
                        message: defaultMessages.all.error,
                    }),
                );
            }
        },
};
