import CloseIcon from '@mui/icons-material/Close';
import MuiModal from '@mui/material/Modal';
import React from 'react';

import styles from './Modal.module.scss';

interface IModal {
    children: React.ReactNode;
    openModal: any;
    onClose: any;
}

export default function Modal(props: IModal) {
    const {children, openModal, onClose} = props;

    return (
        <div>
            <MuiModal open={openModal} onClose={onClose}>
                <div className={styles.wrapper}>
                    <div className={styles.close} onClick={onClose}>
                        <CloseIcon />
                    </div>
                    {children}
                </div>
            </MuiModal>
        </div>
    );
}
