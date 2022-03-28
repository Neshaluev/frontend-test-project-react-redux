import {createSelector} from 'reselect';

const selectBakset = (state: any) => state.basket.products;
const selectID = (_: any, id: any) => id;

export const selectCountBasketItems = createSelector<any, any>(
    selectBakset,
    (state: any) => state.length,
);
export const countCostBasket = createSelector<any, any>(
    selectBakset,
    (state: any) =>
        state.reduce((prev: any, next: any) => (prev += next.price), 0),
);
