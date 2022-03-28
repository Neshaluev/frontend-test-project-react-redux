import {ICategory} from '@src/types';
import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';

import EditCategoryForm from '../../components/FormComponent/CategoryForm/EditCategoryForm';
import FormDeleteElement from '../../components/FormComponent/FormDeleteElement/FormDeleteElement';
import Modal from '../../components/Modal/Modal';
import {useModal} from '../../hooks/useModal';
import {useAction} from '../../store/hooks/useAction';
import {useTypedSelector} from '../../store/hooks/usetTypedSelector';
import {selectCategoriesById} from '../../store/reducers/category/selector';
import styles from './Category.module.scss';

const EditCategory = () => {
    const navigation = useNavigate();
    const [openModal, open, close] = useModal();
    const {fetchCategory, updateCategory, deleteCategory} = useAction();

    const params = useParams();

    const {isLoading} = useTypedSelector((state) => state.categories);
    const category = useTypedSelector((state) =>
        //@ts-ignore
        selectCategoriesById(state, params.id),
    );

    React.useEffect(() => {
        if (!category) {
            fetchCategory();
        }
    }, []);

    const handleSubmit = (data: ICategory) => {
        if (params.id) updateCategory(data, params.id);
    };

    const handleDeleteElement = () => {
        if (params.id) deleteCategory(params.id, navigation);
    };
    return (
        <>
            <div className={styles.layouts}>
                <EditCategoryForm
                    onSubmit={handleSubmit}
                    category={category}
                    isLoading={isLoading}
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

export default EditCategory;
