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
    product?: any;
    isLoading: boolean;
    deleteElement: any;
}

// bug. categorн and producs don't have an error message
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
            name: 'brandCategory',
            message: 'error brand',
            test: (val) => val !== '',
        })
        .required(),
    price: yup.number().positive().moreThan(0).required(),
    image: yup
        .mixed()
        .nullable()
        .notRequired()
        .test('fileSize', 'File upload error.', (value) => {
            if (typeof value === 'string') return true;

            if (value) {
                return value.size <= FILE_SIZE;
            }
            return true;
        })
        .test('fileFormat', 'Unsupported Format', (value) => {
            if (typeof value === 'string') return true;

            if (value) {
                return SUPPORTED_FORMATS.includes(value.type);
            }
            return true;
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

const EditProductForm = (props: UserFormProps) => {
    const {onSubmit, categories, brands, isLoading, product, deleteElement} =
        props;

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

    const {
        handleSubmit,
        control,
        setValue,
        formState: {errors},
    } = useForm<UserFormData>({
        defaultValues: defaultState,
        resolver: yupResolver(schema),
    });

    console.log('errors', errors);

    React.useEffect(() => {
        if (product) {
            setValue('title', product.title);
            setValue('description', product.description);
            setValue('status', product.status);
            setValue('price', product.price);
            setValue('brand', product.brand);
            setValue('category', product.category);
            setValue('image', product.image);
        }
    }, [props]);

    const imgScr = product?.image || '';

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.item}>
                <h2>Редактировать Товар</h2>
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
                {!!categories.length && (
                    <Controller
                        name="category"
                        control={control}
                        render={({field, fieldState: {error}}) => (
                            <FormControl fullWidth>
                                <InputLabel>Категории:</InputLabel>
                                <Select
                                    {...field}
                                    error={!!error}
                                    label={`Категории:`}
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
                )}
            </div>

            <div className={styles.item}>
                {!!categories.length && (
                    <Controller
                        name="brand"
                        control={control}
                        render={({field, fieldState: {error}}) => (
                            <FormControl fullWidth>
                                <InputLabel>Бренд:</InputLabel>
                                <Select
                                    {...field}
                                    label={`Бренд:`}
                                    error={!!error}
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
                )}
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
                {/* <h4>Изображение продукта:</h4> */}
                <img
                    src={imgScr}
                    alt=""
                    style={{
                        width: '100px',
                        height: '100px',
                        display: 'block',
                        marginBottom: '20px',
                    }}
                />
                <FileInput
                    name="image"
                    onChangeImage={(e: any) =>
                        setValue('image', e.target.files[0])
                    }
                    error={errors?.image}
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

export default EditProductForm;
