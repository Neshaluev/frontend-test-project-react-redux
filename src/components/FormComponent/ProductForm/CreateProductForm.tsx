import {yupResolver} from '@hookform/resolvers/yup';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import * as yup from 'yup';

import {IGender} from '../../../types';
import {FILE_SIZE, SUPPORTED_FORMATS} from '../../../utils/constans';
import FileInput from '../../BaseComponent/FileInput/FileInput';
import styles from './ProductForm.module.scss';

interface UserFormProps {
    onSubmit: (...args: any) => void;
    categories?: any;
    brands?: any;
}

// bug. category and brand no error message
const schema = yup.object({
    title: yup.string().min(1).required(),
    description: yup.string().min(1).required(),
    category: yup
        .string()
        .test({
            name: 'validCategory',
            message: 'error category',
            test: (val) => val !== '',
        })
        .required(),
    brand: yup
        .string()
        .test({
            name: 'validCategory',
            message: 'error brand',
            test: (val) => val !== '',
        })
        .required(),
    price: yup.number().positive().moreThan(0).required(),
    image: yup
        .mixed()
        .nullable()
        .test('fileSize', 'File upload error.', (value) => {
            return value && value.size <= FILE_SIZE;
        })
        .test('fileFormat', 'Unsupported Format', (value) => {
            return value && SUPPORTED_FORMATS.includes(value.type);
        }),
});

type UserFormData = {
    title: string;
    description: string;
    gender: IGender;
    price: number;
    status: boolean;
    category: string;
    brand: string;
    image: any;
};

const defaultState: UserFormData = {
    title: '',
    description: '',
    gender: 'female',
    category: '',
    price: 0,
    status: true,
    brand: '',
    image: '',
};

const CreateProductForm = (props: UserFormProps) => {
    const {onSubmit, categories, brands} = props;

    const {
        handleSubmit,
        control,
        setValue,
        formState: {errors},
    } = useForm<UserFormData>({
        defaultValues: defaultState,
        resolver: yupResolver(schema),
    });

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.item}>
                <h2>Создать Товар</h2>
            </div>
            <div className={styles.item}>
                <Controller
                    name="title"
                    control={control}
                    render={({field, fieldState: {error}}) => {
                        console.log('error', error);
                        return (
                            <TextField
                                error={!!error}
                                helperText={error ? error.message : null}
                                fullWidth
                                {...field}
                                label="Название Товара"
                                inputProps={{'data-testid': 'input-title'}}
                            />
                        );
                    }}
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
                            label="Описание товара"
                            inputProps={{'data-testid': 'input-description'}}
                        />
                    )}
                />
            </div>
            <div className={styles.item}>
                <Controller
                    name="price"
                    control={control}
                    render={({field, fieldState: {error}}) => (
                        <TextField
                            type="number"
                            error={!!error}
                            helperText={error ? error.message : null}
                            fullWidth
                            {...field}
                            label="Цена"
                            inputProps={{'data-testid': 'input-description'}}
                        />
                    )}
                />
            </div>

            <div className={styles.item}>
                <Controller
                    name="category"
                    control={control}
                    render={({field, fieldState: {error}}) => (
                        <FormControl fullWidth>
                            <InputLabel>Категории</InputLabel>
                            <Select
                                {...field}
                                error={!!error}
                                label="Категории"
                                inputProps={{
                                    MenuProps: {disableScrollLock: true},
                                }}
                            >
                                {categories?.map((category: any) => (
                                    <MenuItem
                                        key={category._id}
                                        value={category._id}
                                    >
                                        {category.title}
                                    </MenuItem>
                                ))}
                            </Select>
                            {error && (
                                <span
                                    style={{
                                        fontSize: '13px',
                                        color: '#d32f2f',
                                        paddingLeft: '10px',
                                    }}
                                >
                                    Выберите категорию
                                </span>
                            )}
                        </FormControl>
                    )}
                />
            </div>

            <div className={styles.item}>
                <Controller
                    name="brand"
                    control={control}
                    render={({field, fieldState: {error}}) => (
                        <FormControl fullWidth>
                            <InputLabel>Бренд</InputLabel>
                            <Select
                                {...field}
                                error={!!error}
                                label="Бренд"
                                inputProps={{
                                    MenuProps: {disableScrollLock: true},
                                }}
                            >
                                {brands?.map((brands: any) => (
                                    <MenuItem
                                        key={brands._id}
                                        value={brands._id}
                                    >
                                        {brands.title}
                                    </MenuItem>
                                ))}
                            </Select>
                            {error && (
                                <span
                                    style={{
                                        fontSize: '13px',
                                        color: '#d32f2f',
                                        paddingLeft: '10px',
                                    }}
                                >
                                    Выберите бернд
                                </span>
                            )}
                        </FormControl>
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
                <FileInput
                    name="image"
                    onChangeImage={(e: any) =>
                        setValue('image', e.target.files[0])
                    }
                    error={errors.image}
                />
            </div>

            <div className={styles.item}>
                <Controller
                    name="status"
                    control={control}
                    render={({field, fieldState: {error}}) => (
                        <Checkbox
                            {...field}
                            style={{
                                padding: '0',
                                paddingRight: '10px',
                            }}
                            checked={field.value}
                        />
                    )}
                />
                <span>В наличии</span>
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

export default CreateProductForm;
