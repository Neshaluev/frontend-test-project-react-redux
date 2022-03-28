import debounce from 'lodash.debounce';
import React from 'react';

import {filtredArrById} from '../utils/helpers';

export const useFilterSidebar = () => {
    const defualtState = {
        brand: [],
        category: '',
        status: true,
        price: 0,
        gender: 'all',
    };

    const [filter, setFilter] = React.useState<any>({...defualtState});

    const handleFilterBrand = (value: any) => {
        if (!filter.brand.includes(value)) {
            setFilter({...filter, brand: [...filter.brand, value]});
        } else {
            setFilter({...filter, brand: filtredArrById(filter.brand, value)});
        }
    };

    const handleFilterCategory = (value: string) => {
        setFilter({...filter, category: value});
    };

    const handleFilterStatus = (value: any) => {
        setFilter({...filter, status: value.target.checked});
    };

    const handleFilterGender = (value: any) => {
        setFilter({...filter, gender: value.target.value});
    };

    const handleResetFilter = () => {
        setFilter(defualtState);
    };

    const handleFilterPrice = (value: any) =>
        setFilter({...filter, price: value.target.value});

    return [
        handleFilterBrand,
        handleFilterCategory,
        handleFilterStatus,
        handleFilterPrice,
        handleFilterGender,
        handleResetFilter,
        filter,
    ];
};
