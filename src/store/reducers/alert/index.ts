import {AlertAction, AlertActionEnum, InitialState} from './types';

export const initialState: InitialState = {
    visible: false,
    alert: null,
};

export default function BrandReducer(
    state = initialState,
    action: AlertAction,
): InitialState {
    switch (action.type) {
        case AlertActionEnum.CREATE_ALERT:
            return {
                ...state,
                visible: true,
                alert: action.payload,
            };
        case AlertActionEnum.CLEAR_ALERT:
            return {
                ...state,
                visible: false,
                alert: null,
            };
        default:
            return state;
    }
}
