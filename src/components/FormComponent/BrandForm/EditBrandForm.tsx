import {yupResolver} from '@hookform/resolvers/yup';
import DatePicker from '@mui/lab/DatePicker';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import * as yup from 'yup';

import {IBrand} from '../../../types';
import styles from './BrandForm.module.scss';

interface LognFormProps {
    onSubmit: (...args: any) => void;
    brand?: any;
    isLoading: boolean;
    deleteElement: any;
}

type LoginFormData = {
    title: string;
    description: string;
    date: Date;
};

const schema = yup.object({
    title: yup.string().min(1).required(),
    description: yup.string().min(6).required(),
    date: yup.date().nullable().typeError('Invalid Date'),
});

const defaultState: LoginFormData = {
    title: '',
    description: '',
    date: new Date(),
};

const MyForm = (props: LognFormProps) => {
    const {onSubmit, brand, isLoading, deleteElement} = props;

    const {
        handleSubmit,
        setValue,
        control,
        formState: {errors},
    } = useForm<LoginFormData>({
        defaultValues: defaultState,
        resolver: yupResolver(schema),
    });

    React.useEffect(() => {
        if (brand) {
            setValue('title', brand.title);
            setValue('description', brand.description);
            setValue('date', brand.date);
        }
    }, [brand]);

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.item}>
                <h2>Редактировать категорию</h2>
            </div>
            <div className={styles.item}>
                <Controller
                    name="title"
                    control={control}
                    render={({field, fieldState: {error}}) => (
                        <TextField
                            error={!!error}
                            helperText={error ? error.message : null}
                            fullWidth
                            {...field}
                            label="Название категории"
                            inputProps={{'data-testid': 'input-title'}}
                        />
                    )}
                />
            </div>
            <div className={styles.item}>
                <Controller
                    name="description"
                    control={control}
                    render={({field, fieldState: {error}}) => (
                        <TextField
                            error={!!error}
                            helperText={error ? error.message : null}
                            fullWidth
                            {...field}
                            label="Описания категории"
                            inputProps={{'data-testid': 'input-description'}}
                        />
                    )}
                />
            </div>
            <div className={styles.item}>
                <Controller
                    name="date"
                    control={control}
                    render={({field, fieldState: {error}}) => (
                        <DatePicker
                            {...field}
                            label="Выберете время"
                            renderInput={(params) => (
                                <TextField
                                    error={!!errors.date}
                                    helperText={errors.date?.message}
                                    {...params}
                                />
                            )}
                        />
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

export default MyForm;
