import {createSelector} from 'reselect';

const selectProducts = (state: any) => state.products.products;
const selectID = (_: any, id: any) => id;

export const selectCategoriesById = createSelector<any, any>(
    selectProducts,
    selectID,
    (...params: any) => {
        const [array, id] = params;
        return array.find((item: any) => item._id === id);
    },
);
