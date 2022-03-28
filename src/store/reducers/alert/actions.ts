import {usersApi} from '../../../core/api/UsersService';
import {IUser} from '../../../types';
import {AppDispatch} from '../..';
import {
    AlertActionEnum,
    ClearAlertAction,
    CreateAlertAction,
    IAlert,
} from './types';

export const AlertActionCreator = {
    createAlert: (payload: IAlert): CreateAlertAction => ({
        type: AlertActionEnum.CREATE_ALERT,
        payload,
    }),
    clearAlert: (): ClearAlertAction => ({
        type: AlertActionEnum.CLEAR_ALERT,
    }),
};
