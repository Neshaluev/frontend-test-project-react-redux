import {IBrand} from '@src/types';
import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';

import EditBrandForm from '../../components/FormComponent/BrandForm/EditBrandForm';
import FormDeleteElement from '../../components/FormComponent/FormDeleteElement/FormDeleteElement';
import Modal from '../../components/Modal/Modal';
import {useModal} from '../../hooks/useModal';
import {useAction} from '../../store/hooks/useAction';
import {useTypedSelector} from '../../store/hooks/usetTypedSelector';
import {selectCategoriesById} from '../../store/reducers/brand/selector';
import styles from './Brand.module.scss';

const EditBrand = () => {
    const navigation = useNavigate();
    const [openModal, open, close] = useModal();

    const params = useParams();

    const {fetchBrand, updateBrand, deleteBrand} = useAction();
    const {isLoading} = useTypedSelector((state) => state.brands);

    const brand = useTypedSelector((state) =>
        //@ts-ignore
        selectCategoriesById(state, params.id),
    );

    React.useEffect(() => {
        if (!brand) {
            fetchBrand();
        }
    }, [isLoading]);

    const handleSubmit = (data: IBrand) => {
        if (params.id) updateBrand(data, params.id);
    };

    const handleDeleteElement = () => {
        if (params.id) deleteBrand(params.id, navigation);
    };

    return (
        <>
            <div className={styles.layouts}>
                <EditBrandForm
                    onSubmit={handleSubmit}
                    brand={brand}
                    isLoading={isLoading}
                    deleteElement={open}
                />
            </div>
            <Modal openModal={openModal} onClose={close}>
                <FormDeleteElement onClick={() => handleDeleteElement()} />
            </Modal>
        </>
    );
};

export default EditBrand;
