import {createSelector} from 'reselect';

const selectCategories = (state: any) => state.categories.categories;
const selectID = (_: any, id: any) => id;

export const selectCategoriesById = createSelector<any, any>(
    selectCategories,
    selectID,
    (...params: any) => {
        const [array, id] = params;
        return array.find((item: any) => item._id === id);
    },
);
