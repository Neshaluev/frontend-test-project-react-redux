import {AuthUserAction, AuthUserActionEnum, InitialState} from './types';

export const initialState: InitialState = {
    error: '',
    isLoading: false,
    isAuth: false,
    user: null,
};

export default function AuthUserReducer(
    state = initialState,
    action: AuthUserAction,
): InitialState {
    switch (action.type) {
        case AuthUserActionEnum.USER_REGISTER_REQUEST:
        case AuthUserActionEnum.USER_LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case AuthUserActionEnum.USER_REGISTER_SUCCESS:
        case AuthUserActionEnum.USER_LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isAuth: true,
                user: action.payload,
            };
        case AuthUserActionEnum.USER_REGISTER_ERROR:
        case AuthUserActionEnum.USER_LOGIN_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        case AuthUserActionEnum.USER_LOGOUT:
            window.localStorage.clear();
            return {
                ...state,
                error: '',
                isLoading: false,
                isAuth: false,
                user: null,
            };

        default:
            return state;
    }
}
