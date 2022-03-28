import Checkbox from '@mui/material/Checkbox';
import {IBrand} from '@src/types';
import React from 'react';

interface CheckboxBrandList {
    brands: IBrand[];
    handleFilterBrand: (...args: any) => void;
    checkedBrand: any[];
}

const CheckboxBrandList = (props: CheckboxBrandList) => {
    const {brands, handleFilterBrand, checkedBrand} = props;
    const handlePickBrand = (value: any) => {
        handleFilterBrand(value);
    };
    return (
        <div>
            {brands.map((item: any) => {
                const isChecked = checkedBrand.includes(item._id);

                return (
                    <div key={item._id}>
                        <Checkbox
                            checked={isChecked}
                            onClick={() => handlePickBrand(item._id)}
                        />
                        <span>{item.title}</span>
                    </div>
                );
            })}
        </div>
    );
};

export default CheckboxBrandList;
