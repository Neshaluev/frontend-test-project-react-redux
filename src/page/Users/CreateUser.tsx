import {IUser} from '@src/types';
import React from 'react';
import {useNavigate} from 'react-router-dom';

import CreateUserForm from '../../components/FormComponent/UserForm/CreateUserForm';
import {useAction} from '../../store/hooks/useAction';
import styles from './User.module.scss';

const CreateUser = () => {
    const navigation = useNavigate();
    const {createUsers} = useAction();

    const handleCreateUser = (data: IUser) => {
        createUsers(data, navigation);
    };

    return (
        <div className={styles.layouts}>
            <CreateUserForm onSubmit={handleCreateUser} />
        </div>
    );
};

export default CreateUser;
