import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import React from 'react';

import {useFilterSidebar} from '../../hooks/useFilterSidebar';
import {useAction} from '../../store/hooks/useAction';
import {useTypedSelector} from '../../store/hooks/usetTypedSelector';
import Accordion from '../BaseComponent/Accardion/Accardion';
import Slider from '../BaseComponent/Slider/Slider';
import CheckboxBrandList from './CheckboxBrandList/CheckboxBrandList';
import styles from './Sidebar.module.scss';
import SidebarCategoris from './SidebarCategoris/SidebarCategoris';

interface ISidebar {
    getSidebarFilter: (...args: any) => void;
}

const Sidebar = (props: ISidebar) => {
    const {getSidebarFilter} = props;

    const {fetchBrand, fetchCategory} = useAction();
    const {
        categories: {categories},
        brands: {brands},
    } = useTypedSelector((state) => state);

    const [
        handleFilterBrand,
        handleFilterCategory,
        handleFilterStatus,
        handleFilterPrice,
        handleFilterGender,
        handleResetFilter,
        filter,
    ] = useFilterSidebar();

    React.useEffect(() => {
        fetchBrand();
        fetchCategory();
    }, []);

    React.useEffect(() => {
        getSidebarFilter(filter);
    }, [filter]);

    return (
        <div className={styles.sidebar}>
            <div className={styles.fixed}>
                <div className={styles.title}>Фильтрация</div>
                <div className={styles.item}>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <div className={styles.text}>Бренд</div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <CheckboxBrandList
                                checkedBrand={filter.brand}
                                brands={brands}
                                handleFilterBrand={handleFilterBrand}
                            />
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className={styles.item}>
                    <SidebarCategoris
                        categories={categories}
                        value={filter.category}
                        handleFilterCategory={handleFilterCategory}
                    />
                </div>

                <div className={styles.item}>
                    <Checkbox
                        name="status"
                        checked={filter.status}
                        onChange={handleFilterStatus}
                    />
                    <span>Вналичии</span>
                </div>

                <div className={styles.item}>
                    <div className={styles.text}>Цена от:</div>
                    <Slider
                        name="price"
                        value={filter.price}
                        valueLabelDisplay="auto"
                        step={50}
                        marks
                        max={1990}
                        onChange={handleFilterPrice}
                    />
                </div>

                <div className={styles.item}>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <div className={styles.text}>Тип</div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div>
                                <FormControl>
                                    <RadioGroup
                                        onChange={handleFilterGender}
                                        value={filter.gender}
                                        name="radio-buttons-group"
                                    >
                                        <FormControlLabel
                                            value="all"
                                            control={<Radio />}
                                            label="All"
                                        />
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
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className={styles.item} onClick={handleResetFilter}>
                    <Button>Сбросить</Button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
