import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import {DataGrid, GridActionsCellItem} from '@mui/x-data-grid';
import React from 'react';
import {useNavigate} from 'react-router-dom';

import {useAction} from '../../store/hooks/useAction';
import {useTypedSelector} from '../../store/hooks/usetTypedSelector';
import styles from './TableComponent.module.scss';

const UserTable = () => {
    const navigate = useNavigate();
    const {fetchUsers} = useAction();
    const {users} = useTypedSelector((state) => state.users);
    const columns: any = [
        {field: '_id', headerName: 'ID', with: 90},
        {
            field: 'username',
            headerName: 'username',
            flex: 1,
            editable: false,
        },
        {
            field: 'email',
            headerName: 'email',
            flex: 1,
            editable: false,
        },
        {
            field: 'role',
            headerName: 'Role',
            flex: 1,
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
        navigate(`/edit-user/${id}`);
    };

    const routingToCreateElement = () => {
        navigate(`/create-user`);
    };

    React.useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div>
            <div className={styles.title}>Users:</div>
            <div className={styles.table}>
                <DataGrid
                    getRowId={(row) => row._id}
                    rows={users}
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

export default UserTable;
