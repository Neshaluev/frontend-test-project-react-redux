import {Menu, MenuItem} from '@mui/material';
import React from 'react';
import {NavLink} from 'react-router-dom';

import {useAction} from '../../store/hooks/useAction';
import {useTypedSelector} from '../../store/hooks/usetTypedSelector';
import {isUserAdmin} from '../../store/reducers/auth/selector';
import {selectCountBasketItems} from '../../store/reducers/basket/selector';
import styles from './Navbar.module.scss';

interface INavItem {
    path: string;
    onClick?: () => void;
    children: React.ReactNode;
    name?: string;
}

const NavItem = (props: INavItem) => {
    const {path, onClick, children} = props;

    return (
        <li>
            <NavLink
                onClick={onClick}
                className={({isActive}: any) =>
                    isActive ? styles.navbar_link_active : styles.navbar_link
                }
                to={path}
            >
                {children}
            </NavLink>
        </li>
    );
};

const Navbar = () => {
    const {isAuth} = useTypedSelector((state) => state.auth);
    const totalCountBasket = useTypedSelector((state) =>
        selectCountBasketItems(state),
    );
    const isAdmin = useTypedSelector((state) => isUserAdmin(state));
    const {logout} = useAction();

    // menu material ui
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    //
    const fnTotalCountBasket = () => totalCountBasket;

    return (
        <div className={styles.navigation}>
            <div className={styles.logo}>Navigate</div>
            <div className={styles.menu}>
                <ul className={styles.navbar}>
                    {isAuth && (
                        <>
                            <NavItem path="/" name="Products">
                                Products
                            </NavItem>
                            <NavItem path="/basket" name="Basket">
                                Basket ({fnTotalCountBasket()})
                            </NavItem>
                            <NavItem
                                path="/login"
                                name="Logout"
                                onClick={() => logout()}
                            >
                                Logout
                            </NavItem>
                        </>
                    )}
                    {!isAuth && (
                        <>
                            <NavItem path="/login" name="Login">
                                Login
                            </NavItem>
                            <NavItem path="/register" name="Register">
                                Register
                            </NavItem>
                        </>
                    )}

                    {isAdmin && (
                        <>
                            <button
                                onClick={handleClick}
                                style={{
                                    padding: '10px',
                                    cursor: 'pointer',
                                }}
                            >
                                Профиль
                            </button>
                            <Menu
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                disableScrollLock
                            >
                                <MenuItem onClick={handleClose}>
                                    <NavItem
                                        path={'/admin-panel'}
                                        name={'Администрирование'}
                                        onClick={handleClick}
                                    >
                                        Администрирование
                                    </NavItem>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <NavItem
                                        path={'/create-brand'}
                                        name={'Создание бренда'}
                                    >
                                        Создание бренда
                                    </NavItem>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <NavItem
                                        path={'/create-category'}
                                        name={'Создание категории'}
                                    >
                                        Создание категории
                                    </NavItem>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <NavItem
                                        path={'/create-product'}
                                        name={'Создание продукта'}
                                    >
                                        Создание продукта
                                    </NavItem>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <NavItem
                                        path={'/create-user'}
                                        name={'Создание пользователя'}
                                    >
                                        Создание Пользователя
                                    </NavItem>
                                </MenuItem>
                            </Menu>
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
