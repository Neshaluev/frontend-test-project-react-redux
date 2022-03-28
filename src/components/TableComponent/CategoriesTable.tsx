import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import {DataGrid, GridActionsCellItem} from '@mui/x-data-grid';
import React from 'react';
import {useNavigate} from 'react-router-dom';

import {useAction} from '../../store/hooks/useAction';
import {useTypedSelector} from '../../store/hooks/usetTypedSelector';
import styles from './TableComponent.module.scss';

const CategoriesTable = () => {
    const navigate = useNavigate();
    const {fetchCategory} = useAction();
    const {categories, isLoading} = useTypedSelector(
        (state) => state.categories,
    );

    const columns: any = [
        {field: '_id', headerName: 'ID', with: 90},
        {
            field: 'title',
            headerName: 'Title',
            width: 250,
            editable: false,
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
        navigate(`/edit-category/${id}`);
    };

    const routingToCreateElement = () => {
        navigate(`/create-category`);
    };

    React.useEffect(() => {
        fetchCategory();
    }, []);

    return (
        <div>
            <div className={styles.title}>Categoris:</div>
            <div className={styles.table}>
                <DataGrid
                    getRowId={(row) => row._id}
                    rows={categories}
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

export default CategoriesTable;
