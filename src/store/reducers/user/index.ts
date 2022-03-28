import {IUser} from '../../../types';
import {InitialState, UsersAction, UsersActionEnum} from './types';

export const initialState: InitialState = {
    error: '',
    isLoading: false,
    users: [],
};

const filterBrandById = (state: IUser[], id: string): IUser[] =>
    state.filter((item) => item.id !== id);

const updateBrandById = (state: IUser[], users: IUser): IUser[] =>
    state.map((item) => (item.id === users.id ? users : item));

export default function BrandReducer(
    state = initialState,
    action: UsersAction,
): InitialState {
    switch (action.type) {
        case UsersActionEnum.FETCH_USERS_REQUEST:
            return {
                ...state,
                error: '',
                isLoading: true,
                users: [],
            };
        case UsersActionEnum.FETCH_USERS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                users: action.payload,
            };
        case UsersActionEnum.USERS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case UsersActionEnum.CREATE_USERS_REQUEST:
        case UsersActionEnum.UPDATE_USERS_REQUEST:
        case UsersActionEnum.DELETE_USERS_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case UsersActionEnum.SET_LOADING_USERS:
            return {
                ...state,
                isLoading: action.payload,
            };
        case UsersActionEnum.CREATE_USERS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                users: [...state.users, action.payload],
            };
        case UsersActionEnum.DELETE_USERS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                users: filterBrandById(state.users, action.payload),
            };
        case UsersActionEnum.UPDATE_USERS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                users: updateBrandById(state.users, action.payload),
            };
        default:
            return state;
    }
}
