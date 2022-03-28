import axios from '../axios';

export const categorisApi = {
    getAll: async () => {
        return await axios.get<any>('api/categories');
    },
    create: async (data: any) => {
        return await axios.post<any>(`api/categories`, {...data});
    },
    update: async (data: any, id: string) => {
        return await axios.patch<any>(`api/categories/${id}`, {...data});
    },
    delete: async (id: string) => {
        return await axios.delete<any>(`api/categories/${id}`);
    },
};
