import {formatObjData} from '../../utils/helpers';
import axios from '../axios';

export const productsApi = {
    getAllWithParams: async (paramsData: any) => {
        return await axios.get<any>('api/products/all', {
            params: {...paramsData},
        });
    },
    getAll: async () => {
        return await axios.get<any>('api/products');
    },
    create: async (data: any) => {
        const format = formatObjData(data);
        return await axios.post<any>(`api/products`, format);
    },
    update: async (data: any, id: string) => {
        const format = formatObjData(data);
        return await axios.patch<any>(`api/products/${id}`, format);
    },
    delete: async (id: string) => {
        return await axios.delete<any>(`api/products/${id}`);
    },
};
