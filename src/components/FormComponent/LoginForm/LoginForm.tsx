import {yupResolver} from '@hookform/resolvers/yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import * as yup from 'yup';

import styles from './LoginForm.module.scss';

interface LognFormProps {
    onSubmit: (...args: any) => void;
}

export type LoginFormData = {
    email: string;
    password: string;
};

const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
});

const defaultState: LoginFormData = {
    email: '',
    password: '',
};

const MyForm = (props: LognFormProps) => {
    const {onSubmit} = props;

    const {
        handleSubmit,
        control,
        formState: {errors},
    } = useForm<LoginFormData>({
        defaultValues: defaultState,
        resolver: yupResolver(schema),
    });

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.item}>
                <h2>Логин</h2>
            </div>
            <div className={styles.item}>
                <Controller
                    name="email"
                    control={control}
                    render={({field, fieldState: {error}}) => (
                        <TextField
                            error={!!error}
                            helperText={error ? error.message : null}
                            fullWidth
                            {...field}
                            label="Email"
                            inputProps={{'data-testid': 'input-email'}}
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
                <Button
                    type="submit"
                    variant="outlined"
                    color="primary"
                    disabled={false}
                >
                    SEND
                </Button>
            </div>
        </form>
    );
};

export default MyForm;
