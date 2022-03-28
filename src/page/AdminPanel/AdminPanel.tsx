import React from 'react';

import BrandTable from '../../components/TableComponent/BrandTable';
import CategoriesTable from '../../components/TableComponent/CategoriesTable';
import ProductsTable from '../../components/TableComponent/ProductsTable';
import UserTable from '../../components/TableComponent/UserTable';
import styles from './AdminPanel.module.scss';

const AdminPanel = () => {
    return (
        <>
            <div className={styles.panel}>
                <div className={styles.content}>
                    <div className={styles.name__page}>AdminPanel</div>
                    <div className={styles.section}>
                        <CategoriesTable />
                    </div>
                    <div className={styles.section}>
                        <BrandTable />
                    </div>

                    <div className={styles.section}>
                        <ProductsTable />
                    </div>

                    <div className={styles.section}>
                        <UserTable />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminPanel;
