import {IProduct} from '@src/types';
import React from 'react';
import {useParams} from 'react-router-dom';

import FormDeleteElement from '../../components/FormComponent/FormDeleteElement/FormDeleteElement';
import EditProductForm from '../../components/FormComponent/ProductForm/EditProductForm';
import Modal from '../../components/Modal/Modal';
import {useModal} from '../../hooks/useModal';
import {useAction} from '../../store/hooks/useAction';
import {useTypedSelector} from '../../store/hooks/usetTypedSelector';
import {selectCategoriesById} from '../../store/reducers/product/selector';
import styles from './Product.module.scss';

const EditUser = () => {
    const [openModal, open, close] = useModal();
    const params = useParams();

    const {
        fetchBrand,
        updateProducts,
        deleteProducts,
        fetchCategory,
        fetchProducts,
    } = useAction();

    const {
        categories: {categories},
        brands: {brands},
    } = useTypedSelector((state) => state);

    const product = useTypedSelector((state) => {
        //@ts-ignore
        const product = selectCategoriesById(state, params.id);
        return product;
    });

    React.useEffect(() => {
        fetchBrand();
        fetchCategory();
        fetchProducts();
    }, []);

    const isLoaded = !product && !categories && !brands;

    const handleEditProduct = (value: IProduct) => {
        if (params.id) updateProducts(value, params.id);
    };
    const handleDeleteElement = () => {
        if (params.id) deleteProducts(params.id);
    };

    return (
        <>
            <div className={styles.layouts}>
                <EditProductForm
                    onSubmit={handleEditProduct}
                    product={product}
                    categories={categories}
                    brands={brands}
                    isLoading={isLoaded}
                    //@ts-ignore
                    deleteElement={() => open()}
                />
            </div>
            <Modal openModal={openModal} onClose={close}>
                <FormDeleteElement onClick={() => handleDeleteElement()} />
            </Modal>
        </>
    );
};

export default EditUser;
