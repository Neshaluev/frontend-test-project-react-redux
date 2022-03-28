import {LoginFormData} from '@src/components/FormComponent/LoginForm/LoginForm';
import {NavigateFunction} from 'react-router-dom';

import {authApi} from '../../../core/api/AuthService';
import {IUser} from '../../../types';
import {localStorage} from '../../../utils/localStorage';
import {defaultMessages} from '../../../utils/messages';
import {AppDispatch} from '../..';
import {AlertActionCreator} from '../alert/actions';
import {
    AuthUserActionEnum,
    UserLoginErrorAction,
    UserLoginRequestAction,
    UserLoginSuccessAction,
    UserLogoutAction,
    UserRegisterErrorAction,
    UserRegisterRequestAction,
    UserRegisterSuccessAction,
} from './types';

export const AuthActionCreators = {
    userRegisterRequest: (): UserRegisterRequestAction => ({
        type: AuthUserActionEnum.USER_REGISTER_REQUEST,
    }),
    userRegisterSuccess: (payload: IUser): UserRegisterSuccessAction => ({
        type: AuthUserActionEnum.USER_REGISTER_SUCCESS,
        payload,
    }),
    userRegisterError: (payload: string): UserRegisterErrorAction => ({
        type: AuthUserActionEnum.USER_REGISTER_ERROR,
        payload,
    }),
    userLoginRequest: (): UserLoginRequestAction => ({
        type: AuthUserActionEnum.USER_LOGIN_REQUEST,
    }),
    userLoginSuccess: (payload: IUser): UserLoginSuccessAction => ({
        type: AuthUserActionEnum.USER_LOGIN_SUCCESS,
        payload,
    }),
    userLoginError: (payload: string): UserLoginErrorAction => ({
        type: AuthUserActionEnum.USER_LOGIN_ERROR,
        payload,
    }),
    logout: (): UserLogoutAction => ({
        type: AuthUserActionEnum.USER_LOGOUT,
    }),
    login:
        (data: LoginFormData, navigate: NavigateFunction) =>
        async (dispatch: AppDispatch) => {
            try {
                dispatch(AuthActionCreators.userLoginRequest());
                const res = await authApi.login(data);
                localStorage.setItem('token', res.data.token);
                dispatch(AuthActionCreators.userLoginSuccess(res.data.data));
                dispatch(
                    AlertActionCreator.createAlert({
                        type: 'success',
                        message: defaultMessages.login.success,
                    }),
                );
                navigate('/');
            } catch (error) {
                console.error('error login', error);
                dispatch(
                    AlertActionCreator.createAlert({
                        type: 'error',
                        message: defaultMessages.login.error,
                    }),
                );
            }
        },
    register:
        (data: IUser, navigate: NavigateFunction) =>
        async (dispatch: AppDispatch) => {
            try {
                dispatch(AuthActionCreators.userRegisterRequest());
                const res = await authApi.register(data);
                dispatch(AuthActionCreators.userLoginSuccess(res.data));
                dispatch(
                    AlertActionCreator.createAlert({
                        type: 'success',
                        message: defaultMessages.register.success,
                    }),
                );
                navigate('/login');
            } catch (error) {
                dispatch(
                    AuthActionCreators.userLoginError('Error register...'),
                );
                dispatch(
                    AlertActionCreator.createAlert({
                        type: 'error',
                        message: defaultMessages.register.error,
                    }),
                );
            }
        },
};
