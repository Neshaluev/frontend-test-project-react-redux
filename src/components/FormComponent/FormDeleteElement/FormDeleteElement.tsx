import Button from '@mui/material/Button';
import React from 'react';

import styles from './FormDeleteElement.module.scss';

interface IFormDeleteElement {
    onClick: (...args: any) => void;
}

const FormDeleteElement = (props: IFormDeleteElement) => {
    const {onClick} = props;
    return (
        <div className={styles.conatiner}>
            <h5 className={styles.title}>
                Вы действительно хотите удалить элемент ?
            </h5>
            <Button
                className={styles.closeButton}
                variant="outlined"
                color="error"
                onClick={onClick}
            >
                Удалить
            </Button>
        </div>
    );
};

export default FormDeleteElement;
