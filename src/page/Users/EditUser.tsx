import {IUser} from '@src/types';
import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';

import FormDeleteElement from '../../components/FormComponent/FormDeleteElement/FormDeleteElement';
import EditUserForm from '../../components/FormComponent/UserForm/EditUserForm';
import Modal from '../../components/Modal/Modal';
import {useModal} from '../../hooks/useModal';
import {useAction} from '../../store/hooks/useAction';
import {useTypedSelector} from '../../store/hooks/usetTypedSelector';
import {selectCategoriesById} from '../../store/reducers/user/selector';
import styles from './User.module.scss';

const EditUser = () => {
    const navigation = useNavigate();
    const [openModal, open, close] = useModal();

    const params = useParams();

    const {isLoading} = useTypedSelector((state) => state.users);
    const {fetchUsers, updateUsers, deleteUsers} = useAction();

    const user = useTypedSelector((state) =>
        //@ts-ignore
        selectCategoriesById(state, params.id),
    );

    const handleSubmit = (data: IUser) => {
        if (params.id) updateUsers(data, params.id);
    };
    const handleDeleteElement = () => {
        if (params.id) deleteUsers(params.id, navigation);
    };

    React.useEffect(() => {
        if (!user) {
            fetchUsers();
        }
    }, [isLoading]);

    return (
        <>
            <div className={styles.layouts}>
                <EditUserForm
                    onSubmit={handleSubmit}
                    user={user}
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

export default EditUser;
