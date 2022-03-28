import {Button, Chip, Rating} from '@mui/material';
import {IProduct} from '@src/types';
import cn from 'classnames';
import React from 'react';

import {useTypedSelector} from '../../store/hooks/usetTypedSelector';
import {selectCategoriesById} from '../../store/reducers/brand/selector';
import {formatLinkImg} from '../../utils/helpers';
import Image from '../BaseComponent/Image/Image';
import styles from './ProductCard.module.scss';

interface IProductCard {
    displayType: boolean;
    slotRenderButton: any;
    product: IProduct;
}

const ProductCard = (props: IProductCard) => {
    const {displayType, slotRenderButton, product} = props;
    const brand = useTypedSelector((state) =>
        //@ts-ignore
        selectCategoriesById(state, product.brand),
    );
    const classElem = displayType ? styles.card : styles.panel;

    return (
        <div className={classElem}>
            <Image
                src={formatLinkImg(product.image)}
                // src={'https://picsum.photos/900/900'}
                alt={product.title}
                className={styles.img}
            />
            <div className={styles.description}>
                <div className={styles.item}>
                    <h3>{product.title}</h3>
                </div>
                <div className={styles.item}>{product.description}</div>
                <div className={styles.item}> Брент: {brand?.title || ''}</div>
                <div className={styles.item}> Тип: {product.gender}</div>
                <div className={styles.controlCard}>
                    <div>
                        <b> {product.price} $</b>
                    </div>
                    <div>{slotRenderButton}</div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
