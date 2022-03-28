import {ICategory} from '@src/types';
import React from 'react';
import {useNavigate} from 'react-router-dom';

import CreateCategoryForm from '../../components/FormComponent/CategoryForm/CreateCategoryForm';
import {useAction} from '../../store/hooks/useAction';
import styles from './Category.module.scss';

const CreateCategory = () => {
    const navigation = useNavigate();
    const {createCategory} = useAction();

    const handleCreateCategory = (data: ICategory) => {
        createCategory(data, navigation);
    };

    return (
        <div className={styles.layouts}>
            <CreateCategoryForm onSubmit={handleCreateCategory} />
        </div>
    );
};

export default CreateCategory;
