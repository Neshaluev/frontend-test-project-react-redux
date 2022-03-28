import {IUser} from '../../../types';

export type AlertColor = 'success' | 'info' | 'warning' | 'error';

export type IAlert = {
    id?: string;
    message: string;
    type: AlertColor;
};

export type InitialState = {
    visible: boolean;
    alert: IAlert | null;
};

export enum AlertActionEnum {
    CREATE_ALERT = 'ALERT/CREATE_ALERT',
    CLEAR_ALERT = 'ALERT/CLEAR_ALERT',
}
export interface CreateAlertAction {
    type: AlertActionEnum.CREATE_ALERT;
    payload: IAlert;
}
export interface ClearAlertAction {
    type: AlertActionEnum.CLEAR_ALERT;
}

export type AlertAction = CreateAlertAction | ClearAlertAction;
