import React from 'react';
import {useNavigate} from 'react-router-dom';

import LoginForm from '../../components/FormComponent/LoginForm/LoginForm';
import {useAction} from '../../store/hooks/useAction';
import styles from './Login.module.scss';

const Login = () => {
    const navigate = useNavigate();
    const {login} = useAction();
    return (
        <div className={styles.layouts}>
            <LoginForm onSubmit={(data: any) => login(data, navigate)} />
        </div>
    );
};

export default Login;
