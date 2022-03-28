import {Button} from '@mui/material';
import React from 'react';

import ProductCard from '../../components/ProductCard/ProductCard';
import {useAction} from '../../store/hooks/useAction';
import {useTypedSelector} from '../../store/hooks/usetTypedSelector';
import {
    countCostBasket,
    selectCountBasketItems,
} from '../../store/reducers/basket/selector';
import styles from './Basket.module.scss';

const Basket = () => {
    const {removeItemFromBasket, clearBasket} = useAction();
    const {products} = useTypedSelector((state) => state.basket);
    const countProducts = useTypedSelector((state) =>
        selectCountBasketItems(state),
    );
    const totalPrice = useTypedSelector((state) => countCostBasket(state));

    const handleRemoveItemFromBasket = (id: string) => {
        removeItemFromBasket(id);
    };

    const handleClearBasket = () => {
        clearBasket();
    };

    const deleteButton = (id: string) => (
        <Button color={'error'} onClick={() => handleRemoveItemFromBasket(id)}>
            Удалить
        </Button>
    );

    return (
        <div className={styles.layouts}>
            <div className={styles.basket}>
                <h2>Basket</h2>
                <div className={styles.sum}>
                    <span>Товаров: {countProducts}</span>
                    <span>Полная сумма: {totalPrice}$</span>
                </div>
                <div className={styles.content}>
                    {products.map((item: any, idx) => (
                        <ProductCard
                            product={item}
                            key={idx}
                            displayType={false}
                            slotRenderButton={deleteButton(item._id)}
                        />
                    ))}
                </div>
                <div className={styles.buttons}>
                    <Button variant="outlined" onClick={handleClearBasket}>
                        Очисить корзину
                    </Button>
                    <Button variant="contained">Оплатить</Button>
                </div>
            </div>
        </div>
    );
};

export default Basket;
