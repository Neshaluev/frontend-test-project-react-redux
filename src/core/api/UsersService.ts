import axios from '../axios';

export const usersApi = {
    getAll: async () => {
        return await axios.get<any>('api/auth');
    },
    create: async (data: any) => {
        return await axios.post<any>(`api/auth/register`, {...data});
    },
    update: async (data: any, id: string) => {
        return await axios.patch<any>(`api/auth/${id}`, {...data});
    },
    delete: async (id: string) => {
        return await axios.delete<any>(`api/auth/${id}`);
    },
};
