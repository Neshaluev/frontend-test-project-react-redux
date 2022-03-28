import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {ICategory} from '@src/types';
import React from 'react';

import styles from './SidebarCategoris.module.scss';

interface ISidebarCategoris {
    categories: ICategory[];
    value: string;
    handleFilterCategory: (...args: any) => void;
}

const SidebarCategoris = (props: ISidebarCategoris) => {
    const {categories, value, handleFilterCategory} = props;

    const handleChangeCategory = (e: any) => {
        handleFilterCategory(e.target.value);
    };

    return (
        <>
            <div className={styles.text}>Категории:</div>
            <FormControl fullWidth>
                <Select
                    value={value}
                    onChange={handleChangeCategory}
                    inputProps={{MenuProps: {disableScrollLock: true}}}
                >
                    {categories.map((item) => (
                        <MenuItem key={item._id} value={item._id}>
                            {item.title}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </>
    );
};
export default SidebarCategoris;
