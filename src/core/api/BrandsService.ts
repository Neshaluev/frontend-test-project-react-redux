import axios from '../axios';

export const brandsApi = {
    getAll: async () => {
        return await axios.get<any>('/api/brands');
    },
    create: async (data: any) => {
        return await axios.post<any>(`/api/brands`, {...data});
    },
    update: async (data: any, id: string) => {
        return await axios.patch<any>(`/api/brands/${id}`, {...data});
    },
    delete: async (id: string) => {
        return await axios.delete<any>(`/api/brands/${id}`);
    },
};
