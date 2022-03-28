import {IProduct} from '@src/types';
import React from 'react';

import CreateProductForm from '../../components/FormComponent/ProductForm/CreateProductForm';
import {useAction} from '../../store/hooks/useAction';
import {useTypedSelector} from '../../store/hooks/usetTypedSelector';
import styles from './Product.module.scss';

const CreateProduct = () => {
    const {fetchBrand, createProducts, fetchCategory} = useAction();

    const {
        categories: {categories},
        brands: {brands},
    } = useTypedSelector((state) => state);

    React.useEffect(() => {
        fetchCategory();
        fetchBrand();
    }, []);

    const handleCreateProduct = (value: IProduct) => {
        createProducts(value);
    };

    return (
        <div className={styles.layouts}>
            <CreateProductForm
                onSubmit={handleCreateProduct}
                categories={categories}
                brands={brands}
            />
        </div>
    );
};

export default CreateProduct;
