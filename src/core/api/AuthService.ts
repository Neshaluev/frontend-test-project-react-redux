import {LoginFormData} from '@src/components/FormComponent/LoginForm/LoginForm';

import {IUser} from '../../types';
import axios from '../axios';

export const authApi = {
    login: async (data: LoginFormData) => {
        return await axios.post<any>('/api/auth/login', {...data});
    },
    register: async (data: any) => {
        return await axios.post<IUser>('/api/auth/register', {...data});
    },
};
