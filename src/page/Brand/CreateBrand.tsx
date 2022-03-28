import {IBrand} from '@src/types';
import React from 'react';
import {useNavigate} from 'react-router-dom';

import CreateBrandForm from '../../components/FormComponent/BrandForm/CreateBrandForm';
import {useAction} from '../../store/hooks/useAction';
import styles from './Brand.module.scss';

const CreateBrand = () => {
    const navigation = useNavigate();
    const {createBrand} = useAction();

    const handleCreateBrand = (data: IBrand) => {
        createBrand(data, navigation);
    };
    return (
        <div className={styles.layouts}>
            <CreateBrandForm onSubmit={handleCreateBrand} />
        </div>
    );
};

export default CreateBrand;
