import React from 'react';

import Basket from '../page/Basket/Basket';
import CreateBrand from '../page/Brand/CreateBrand';
import EditBrand from '../page/Brand/EditBrand';
import CreateCategory from '../page/Category/CreateCategory';
import EditCategory from '../page/Category/EditCategory';
import Login from '../page/Login/Login';
import NotFound from '../page/NotFound/NotFound';
import CreateProduct from '../page/Product/CreateProduct';
import EditProduct from '../page/Product/EditProduct';
import Register from '../page/Register/Register';
import CreateUser from '../page/Users/CreateUser';
import EditUser from '../page/Users/EditUser';
import {PrivateRoute} from './PrivateRoute';

const ProductList = React.lazy(() => import('../page/ProductList/ProductList'));
const AdminPanel = React.lazy(() => import('../page/AdminPanel/AdminPanel'));

export const publicRoutes = [
    {
        path: '/',
        element: (
            <PrivateRoute>
                <React.Suspense fallback={<></>}>
                    <ProductList />
                </React.Suspense>
            </PrivateRoute>
        ),
        name: 'Product list',
    },
    {path: '/login', element: <Login />, name: 'Login'},
    {
        path: '/register',
        element: (
            <PrivateRoute>
                <Register />
            </PrivateRoute>
        ),
        name: 'Register',
    },
    {
        path: '/basket',
        element: (
            <PrivateRoute>
                <Basket />
            </PrivateRoute>
        ),
        name: 'Basket',
    },
    {path: '*', element: <NotFound />},
];

export const privateRoutes = [
    {
        path: '/admin-panel',
        element: (
            <React.Suspense fallback={<></>}>
                <AdminPanel />
            </React.Suspense>
        ),
        name: 'Admin Panel',
    },
    {path: '/create-brand', element: <CreateBrand />, name: 'Create brand'},
    {path: '/edit-brand/:id', element: <EditBrand />, name: 'Edit brand'},
    {
        path: '/create-category',
        element: <CreateCategory />,
        name: 'Create category',
    },
    {
        path: '/edit-category/:id',
        element: <EditCategory />,
        name: 'Edit Category',
    },
    {path: '/create-user', element: <CreateUser />, name: 'Create user'},
    {path: '/edit-user/:id', element: <EditUser />, name: 'Edit user'},
    {
        path: '/create-product',
        element: <CreateProduct />,
        name: 'Create product',
    },
    {path: '/edit-product/:id', element: <EditProduct />, name: 'Edit product'},
];
