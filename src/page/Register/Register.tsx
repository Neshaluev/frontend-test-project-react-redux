import React from 'react';
import {useNavigate} from 'react-router-dom';

import RegisterForm from '../../components/FormComponent/RegisterForm/RegisterForm';
import {useAction} from '../../store/hooks/useAction';
import styles from './Register.module.scss';

const Register = () => {
    const navigate = useNavigate();
    const {register} = useAction();

    return (
        <div className={styles.layouts}>
            <RegisterForm onSubmit={(data) => register(data, navigate)} />
        </div>
    );
};

export default Register;
