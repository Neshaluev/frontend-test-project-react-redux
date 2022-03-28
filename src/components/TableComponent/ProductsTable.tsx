import EditIcon from '@mui/icons-material/Edit';
import {Checkbox} from '@mui/material';
import Button from '@mui/material/Button';
import {DataGrid, GridActionsCellItem} from '@mui/x-data-grid';
import React from 'react';
import {useNavigate} from 'react-router-dom';

import {useAction} from '../../store/hooks/useAction';
import {useTypedSelector} from '../../store/hooks/usetTypedSelector';
import {fnGetById} from '../../utils/helpers';
import styles from './TableComponent.module.scss';

const ProductsTable = () => {
    const {fetchProducts} = useAction();

    const {
        categories: {categories},
        brands: {brands},
        products: {products},
    } = useTypedSelector((state) => state);

    const navigate = useNavigate();

    const columns: any = [
        {field: '_id', headerName: 'ID', with: 90},
        {
            field: 'image',
            headerName: 'Image',
            width: 80,
            editable: true,
            renderCell: (params: any) => (
                <img
                    style={{
                        width: '50px',
                        display: 'flex',
                        height: '50px',
                        borderRadius: '50%',
                    }}
                    // src={params.value}
                    src={'https://picsum.photos/seed/picsum/900/900'}
                />
            ),
        },
        {
            field: 'title',
            headerName: 'Title',
            width: 120,
            editable: false,
        },

        {
            field: 'category',
            headerName: 'Category',
            wdith: 120,
            editable: false,
            valueGetter: (params: any) => {
                const categoryField = fnGetById(
                    categories,
                    params.row.category,
                );
                return `${categoryField?.title || 'default value'}`;
            },
        },
        {
            field: 'brand',
            headerName: 'Brand',
            width: 120,
            editable: false,
            valueGetter: (params: any) => {
                const brandsField = fnGetById(brands, params.row.brand);
                return `${brandsField?.title || 'default value'}`;
            },
        },
        {
            field: 'description',
            headerName: 'Description',
            flex: 1,
            editable: false,
        },

        {
            field: 'date',
            headerName: 'Date',
            width: 120,
            editable: false,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 120,
            type: 'num',
            editable: false,
            valueGetter: (params: any) => {
                return `${params.value} $`;
            },
        },
        {
            field: 'status',
            headerName: 'В наличии',
            width: 120,
            editable: false,
            renderCell: (params: any) => {
                return <Checkbox defaultChecked={params.row.status} disabled />;
            },
        },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 90,
            cellClassName: 'actions',
            editable: false,
            getActions: ({id}: any) => {
                return [
                    <GridActionsCellItem
                        icon={<EditIcon />}
                        label="Edit"
                        className="textPrimary"
                        onClick={() => handleEditClick(id)}
                        color="inherit"
                    />,
                ];
            },
        },
    ];

    const handleEditClick = (id: any) => {
        navigate(`/edit-product/${id}`);
    };

    const routingToCreateElement = () => {
        navigate(`/create-product`);
    };

    React.useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div>
            <div className={styles.title}>Products:</div>
            <div className={styles.table}>
                <DataGrid
                    getRowId={(row) => row._id}
                    rows={products}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    disableSelectionOnClick
                />
            </div>
            <div>
                <Button onClick={routingToCreateElement} variant="outlined">
                    Добавить
                </Button>
            </div>
        </div>
    );
};

export default ProductsTable;
