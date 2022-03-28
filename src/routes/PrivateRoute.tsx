import React from 'react';
import {Navigate} from 'react-router-dom';

import {useTypedSelector} from '../store/hooks/usetTypedSelector';

export function PrivateRoute({children}: any) {
    const {isAuth} = useTypedSelector((state) => state.auth);
    return isAuth ? children : <Navigate to="/login" />;
    // return children;
}
