import {yupResolver} from '@hookform/resolvers/yup';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import * as yup from 'yup';

import {IGender, IUser, IUserRole} from '../../../types';
import styles from './UserForm.module.scss';

interface UserFormProps {
    onSubmit: (...args: any) => void;
    user?: IUser;
    isLoading: boolean;
    deleteElement: any;
}

const schema = yup.object({
    username: yup.string().min(1).required(),
    password: yup.string().min(6).required(),
    email: yup.string().email().required(),
    passwordConfirmation: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

type UserFormData = {
    username: string;
    password: string;
    passwordConfirmation: string;
    email: string;
    gender: IGender;
    role: IUserRole;
};

const defaultState: UserFormData = {
    username: '',
    password: '',
    passwordConfirmation: '',
    email: '',
    gender: 'female',
    role: 'client',
};

const CreateUserForm = (props: UserFormProps) => {
    const {onSubmit, user, isLoading, deleteElement} = props;

    const {
        handleSubmit,
        control,
        setValue,
        formState: {errors},
    } = useForm<UserFormData>({
        defaultValues: defaultState,
        resolver: yupResolver(schema),
    });

    React.useEffect(() => {
        if (user) {
            setValue('username', user.username);
            setValue('email', user.email);
            if (user.gender) setValue('gender', user.gender);
        }
    }, [user]);

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.item}>
                <h2>Редактировать пользователя</h2>
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
                            inputProps={{'data-testid': 'input-title'}}
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
                            inputProps={{'data-testid': 'input-description'}}
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
                            type="password"
                            error={!!error}
                            helperText={error ? error.message : null}
                            fullWidth
                            {...field}
                            label="Пароль"
                            inputProps={{'data-testid': 'input-description'}}
                        />
                    )}
                />
            </div>
            <div className={styles.item}>
                <Controller
                    name="passwordConfirmation"
                    control={control}
                    render={({field, fieldState: {error}}) => (
                        <TextField
                            type="password"
                            error={!!error}
                            helperText={error ? error.message : null}
                            fullWidth
                            {...field}
                            label="Повторите пароль"
                            inputProps={{'data-testid': 'input-description'}}
                        />
                    )}
                />
            </div>
            <div className={styles.item}>
                <Controller
                    name="gender"
                    control={control}
                    render={({field, fieldState: {error}}) => (
                        <FormControl>
                            <FormLabel>Пол</FormLabel>
                            <RadioGroup {...field} defaultValue="female">
                                <FormControlLabel
                                    value="female"
                                    control={<Radio />}
                                    label="Женское"
                                />
                                <FormControlLabel
                                    value="male"
                                    control={<Radio />}
                                    label="Мужское"
                                />
                                <FormControlLabel
                                    value="other"
                                    control={<Radio />}
                                    label="Другое"
                                />
                            </RadioGroup>
                        </FormControl>
                    )}
                />
            </div>
            <div className={styles.item}>
                <Controller
                    name="role"
                    control={control}
                    render={({field, fieldState: {error}}) => (
                        <FormControl>
                            <FormLabel>Роль</FormLabel>
                            <RadioGroup {...field} defaultValue="female">
                                <FormControlLabel
                                    value="client"
                                    control={<Radio />}
                                    label="Client"
                                />
                                <FormControlLabel
                                    value="admin"
                                    control={<Radio />}
                                    label="Admin"
                                />
                            </RadioGroup>
                        </FormControl>
                    )}
                />
            </div>
            <div className={styles.buttons}>
                <Button
                    type="submit"
                    variant="outlined"
                    color="primary"
                    disabled={isLoading}
                >
                    Редактировать
                </Button>
                <Button
                    variant="outlined"
                    color="error"
                    disabled={isLoading}
                    onClick={deleteElement}
                >
                    Удалить
                </Button>
            </div>
        </form>
    );
};

export default CreateUserForm;
