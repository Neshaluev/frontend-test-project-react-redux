import {yupResolver} from '@hookform/resolvers/yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import * as yup from 'yup';

import styles from './RegisterForm.module.scss';

interface RegisterFormProps {
    onSubmit: (...args: any) => void;
}

type RegisterFormData = {
    email: string;
    username: string;
    password: string;
    passwordConfirmed: string;
};

const schema = yup.object({
    username: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
    passwordConfirmed: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required(),
});

const defaultState: RegisterFormData = {
    username: '',
    email: '',
    password: '',
    passwordConfirmed: '',
};

const MyForm = (props: RegisterFormProps) => {
    const {onSubmit} = props;

    const {handleSubmit, control} = useForm<RegisterFormData>({
        defaultValues: defaultState,
        resolver: yupResolver(schema),
    });

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.item}>
                <h2>Регистрация</h2>
            </div>
            <div className={styles.item}>
                <Controller
                    name="username"
                    control={control}
                    render={({field, fieldState: {error}}) => (
                        <TextField
                            error={!!error}
                            helperText={error ? error.message : null}
                            fullWidth
                            {...field}
                            label="Имя пользователя"
                            inputProps={{'data-testid': 'input-username'}}
                        />
                    )}
                />
            </div>
            <div className={styles.item}>
                <Controller
                    name="email"
                    control={control}
                    render={({field, fieldState: {error}}) => (
                        <TextField
                            type="email"
                            error={!!error}
                            helperText={error ? error.message : null}
                            fullWidth
                            {...field}
                            label="Email"
                            inputProps={{'data-testid': 'input-username'}}
                        />
                    )}
                />
            </div>
            <div className={styles.item}>
                <Controller
                    name="password"
                    control={control}
                    render={({field, fieldState: {error}}) => (
                        <TextField
                            error={!!error}
                            helperText={error ? error.message : null}
                            fullWidth
                            type="Password"
                            {...field}
                            label="Пароль"
                            inputProps={{'data-testid': 'input-password'}}
                        />
                    )}
                />
            </div>
            <div className={styles.item}>
                <Controller
                    name="passwordConfirmed"
                    control={control}
                    render={({field, fieldState: {error}}) => (
                        <TextField
                            error={!!error}
                            helperText={error ? error.message : null}
                            fullWidth
                            type="password"
                            {...field}
                            label="Потверждение пароля"
                            inputProps={{'data-testid': 'input-password'}}
                        />
                    )}
                />
            </div>
            <div className={styles.item}>
                <Button
                    type="submit"
                    variant="outlined"
                    color="primary"
                    disabled={false}
                >
                    Отправить
                </Button>
            </div>
        </form>
    );
};

export default MyForm;
