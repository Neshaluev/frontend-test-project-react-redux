import GridViewIcon from '@mui/icons-material/GridView';
import HorizontalSplitIcon from '@mui/icons-material/HorizontalSplit';
import {Button} from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import {IProduct} from '@src/types';
import debounce from 'lodash.debounce';
import isequal from 'lodash.isequal';
import React from 'react';

import ProductCard from '../../components//ProductCard/ProductCard';
import Sidebar from '../../components/Sidebar/Sidebar';
import {useAction} from '../../store/hooks/useAction';
import {useTypedSelector} from '../../store/hooks/usetTypedSelector';
import styles from './ProductList.module.scss';

interface IFilterProduct {
    brand: any[];
    category: string;
    status: boolean;
    price: number;
    gender: string;
}

const ProductList = () => {
    const [filterData, setFilterData] = React.useState<IFilterProduct>({
        brand: [],
        category: '',
        status: true,
        price: 0,
        gender: 'all',
    });
    const {fetchProductsWithParams, addItemToBasket} = useAction();
    const {products, isLoading} = useTypedSelector((state) => state.products);

    React.useEffect(() => {
        fetchProductsWithParams(filterData);
    }, [filterData]);

    const [displayType, setDisplayType] = React.useState(true);

    const classDispaly = displayType ? styles.products : styles.panel;

    const getSidebarFilterFn = (filter: IFilterProduct) => {
        if (!isequal(filter, filterData)) {
            setFilterData(filter);
        }
    };

    const getSidebarFilter = React.useMemo(
        () => debounce(getSidebarFilterFn, 1000),
        [],
    );

    const handleAddItemToBasket = (value: IProduct) => {
        addItemToBasket(value);
    };

    const priceButton = (product: IProduct) => (
        <Button
            variant="outlined"
            onClick={() => handleAddItemToBasket(product)}
        >
            В Коризну
        </Button>
    );

    return (
        <div className={styles.layouts}>
            <Sidebar getSidebarFilter={getSidebarFilter} />
            <div className={styles.container}>
                <div className={styles.content}>
                    {isLoading && (
                        <div className={styles.loader}>
                            <LinearProgress />
                        </div>
                    )}
                    {!isLoading && (
                        <>
                            <div className={styles.settings}>
                                <h3>Settings</h3>
                                <div className={styles.view}>
                                    <div>
                                        <HorizontalSplitIcon
                                            className={styles.iconButton}
                                            onClick={() =>
                                                setDisplayType(false)
                                            }
                                        />
                                    </div>
                                    <div>
                                        <GridViewIcon
                                            className={styles.iconButton}
                                            onClick={() => setDisplayType(true)}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className={classDispaly}>
                                {products.map((item, idx) => (
                                    <ProductCard
                                        key={idx}
                                        product={item}
                                        slotRenderButton={priceButton(item)}
                                        displayType={displayType}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductList;
