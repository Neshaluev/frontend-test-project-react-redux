import React from 'react';
import {Route, Routes} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Snackbar from './components/Snackbar/Snackbar';
import {privateRoutes, publicRoutes} from './routes/routes';
import {useAction} from './store/hooks/useAction';
import {useTypedSelector} from './store/hooks/usetTypedSelector';
import {isUserAdmin} from './store/reducers/auth/selector';
import {localStorage} from './utils/localStorage';

function App() {
    const {addItemsToBasket} = useAction();

    const isAdmin = useTypedSelector((state) => isUserAdmin(state));

    const handleLoadingBasket = () => {
        const basketItems = localStorage.getItemsToBasket();
        if (basketItems) addItemsToBasket(basketItems);
    };

    React.useEffect(() => {
        handleLoadingBasket();
        // loading auth
    }, []);

    // const isAdmin = isAuth && user?.role === "admin";

    console.log('isAdmin', isAdmin);
    return (
        <>
            <Snackbar />
            <Navbar />
            <Routes>
                {publicRoutes.map((Item: any) => (
                    <Route
                        key={Item.path}
                        path={Item.path}
                        element={Item.element}
                    />
                ))}
                {isAdmin &&
                    privateRoutes.map((Item: any) => (
                        <Route
                            key={Item.path}
                            path={Item.path}
                            element={Item.element}
                        />
                    ))}
            </Routes>
        </>
    );
}

export default App;
