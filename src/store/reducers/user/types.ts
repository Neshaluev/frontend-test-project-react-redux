import {IUser} from '../../../types';

export type InitialState = {
    isLoading: boolean;
    users: IUser[];
    error: string;
};

export enum UsersActionEnum {
    FETCH_USERS_REQUEST = 'USERS/FETCH_USERS_REQUEST',
    FETCH_USERS_SUCCESS = 'USERS/FETCH_USERS_SUCCESS',

    CREATE_USERS_REQUEST = 'USERS/CREATE_USERS_REQUEST',
    CREATE_USERS_SUCCESS = 'USERS/CREATE_USERS_SUCCESS',

    UPDATE_USERS_REQUEST = 'USERS/UPDATE_USERS_REQUEST',
    UPDATE_USERS_SUCCESS = 'USERS/UPDATE_USERS_SUCCESS',

    DELETE_USERS_REQUEST = 'USERS/DELETE_USERS_REQUEST',
    DELETE_USERS_SUCCESS = 'USERS/DELETE_USERS_SUCCESS',

    USERS_ERROR = 'USERS/USERS_ERROR',

    SET_LOADING_USERS = 'USERS/SET_LOADING_USERS',
}
export interface FetchUsersRequestAction {
    type: UsersActionEnum.FETCH_USERS_REQUEST;
}
export interface FetchUsersSuccessAction {
    type: UsersActionEnum.FETCH_USERS_SUCCESS;
    payload: IUser[];
}
export interface CreateUsersRequestAction {
    type: UsersActionEnum.CREATE_USERS_REQUEST;
}
export interface CreateUsersSuccessAction {
    type: UsersActionEnum.CREATE_USERS_SUCCESS;
    payload: IUser;
}

export interface UpdateUsersRequestAction {
    type: UsersActionEnum.UPDATE_USERS_REQUEST;
}
export interface UpdateUsersSuccessAction {
    type: UsersActionEnum.UPDATE_USERS_SUCCESS;
    payload: IUser;
}
export interface DeleteUsersRequestAction {
    type: UsersActionEnum.DELETE_USERS_REQUEST;
}
export interface DeleteUsersSucceessAction {
    type: UsersActionEnum.DELETE_USERS_SUCCESS;
    payload: string;
}
export interface UsersErrorAction {
    type: UsersActionEnum.USERS_ERROR;
    payload: string;
}

export interface SetLoadingUsersAction {
    type: UsersActionEnum.SET_LOADING_USERS;
    payload: boolean;
}

export type UsersAction =
    | FetchUsersRequestAction
    | FetchUsersSuccessAction
    | UsersErrorAction
    | CreateUsersRequestAction
    | CreateUsersSuccessAction
    | UpdateUsersRequestAction
    | UpdateUsersSuccessAction
    | DeleteUsersRequestAction
    | DeleteUsersSucceessAction
    | SetLoadingUsersAction;
