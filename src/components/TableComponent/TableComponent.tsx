import Button from '@mui/material/Button';
import {DataGrid} from '@mui/x-data-grid';
import React from 'react';

import styles from './TableComponent.module.scss';

const TableComponent = (props: any) => {
    const {open, rows, columns, title} = props;
    return (
        <div>
            <div className={styles.title}>{title}:</div>
            <div className={styles.table}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    disableSelectionOnClick
                />
            </div>
            <div>
                <Button onClick={open} variant="outlined">
                    Добавить
                </Button>
            </div>
        </div>
    );
};

export default TableComponent;
