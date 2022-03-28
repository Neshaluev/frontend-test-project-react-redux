import {yupResolver} from '@hookform/resolvers/yup';
import DatePicker from '@mui/lab/DatePicker';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import * as yup from 'yup';

import styles from './CategoryForm.module.scss';

interface LognFormProps {
    onSubmit: (...args: any) => void;
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

const CreateBrandForm = (props: LognFormProps) => {
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
                <h2>Создать Категорию</h2>
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
                            label="Название бренда"
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
                            label="Описания бренда"
                            inputProps={{'data-testid': 'input-description'}}
                        />
                    )}
                />
            </div>
            <div className={styles.item}>
                <Controller
                    name="date"
                    control={control}
                    render={({field}) => (
                        <DatePicker
                            {...field}
                            label="Выберете время"
                            renderInput={(params) => <TextField {...params} />}
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
                    Создать
                </Button>
            </div>
        </form>
    );
};

export default CreateBrandForm;
