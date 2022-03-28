import {IUser} from '../../../types';

export type InitialState = {
    isLoading: boolean;
    user: IUser | null;
    isAuth: boolean;
    error: string;
};

export enum AuthUserActionEnum {
    USER_REGISTER_REQUEST = 'AUTH/USER_REGISTER',
    USER_REGISTER_SUCCESS = 'AUTH/USER_REGISTER_SUCCESS',
    USER_REGISTER_ERROR = 'AUTH/USER_REGISTER_ERROR',
    USER_LOGIN_REQUEST = 'AUTH/USER_LOGIN_REQUEST',
    USER_LOGIN_SUCCESS = 'AUTH/USER_LOGIN_SUCCESS',
    USER_LOGIN_ERROR = 'AUTH/USER_LOGIN_ERROR',
    USER_LOGOUT = 'AUTH/USER_LOGOUT',
}
export interface UserRegisterRequestAction {
    type: AuthUserActionEnum.USER_REGISTER_REQUEST;
}
export interface UserRegisterSuccessAction {
    type: AuthUserActionEnum.USER_REGISTER_SUCCESS;
    payload: IUser;
}
export interface UserRegisterErrorAction {
    type: AuthUserActionEnum.USER_REGISTER_ERROR;
    payload: string;
}
export interface UserLoginRequestAction {
    type: AuthUserActionEnum.USER_LOGIN_REQUEST;
}
export interface UserLoginSuccessAction {
    type: AuthUserActionEnum.USER_LOGIN_SUCCESS;
    payload: IUser;
}
export interface UserLoginErrorAction {
    type: AuthUserActionEnum.USER_LOGIN_ERROR;
    payload: string;
}
export interface UserLogoutAction {
    type: AuthUserActionEnum.USER_LOGOUT;
}

export type AuthUserAction =
    | UserRegisterRequestAction
    | UserRegisterSuccessAction
    | UserRegisterErrorAction
    | UserLoginRequestAction
    | UserLoginSuccessAction
    | UserLoginErrorAction
    | UserLogoutAction;
