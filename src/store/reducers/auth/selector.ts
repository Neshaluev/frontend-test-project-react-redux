import {createSelector} from 'reselect';

const selectAuth = (state: any) => state.auth;

export const isUserAdmin = createSelector<any, any>(
    selectAuth,
    (state: any) => state.isAuth === true && state.user.role === 'admin',
);
