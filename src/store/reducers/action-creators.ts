import {AlertActionCreator} from './alert/actions';
import {AuthActionCreators} from './auth/actions';
import {BasketActionCreator} from './basket/actions';
import {BrandActionCreator} from './brand/actions';
import {CategoriesActionCreator} from './category/actions';
import {ProductsActionCreator} from './product/actions';
import {UsersActionCreator} from './user/actions';

export const allActionCreators = {
    ...AuthActionCreators,
    ...BrandActionCreator,
    ...CategoriesActionCreator,
    ...UsersActionCreator,
    ...ProductsActionCreator,
    ...BasketActionCreator,
    ...AlertActionCreator,
};
