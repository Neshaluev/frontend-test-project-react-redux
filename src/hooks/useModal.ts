import React from 'react';

export const useModal = () => {
    const [openModal, setOpenModal] = React.useState(false);

    const open = () => setOpenModal(true);
    const close = () => setOpenModal(false);

    return [openModal, open, close];
};
