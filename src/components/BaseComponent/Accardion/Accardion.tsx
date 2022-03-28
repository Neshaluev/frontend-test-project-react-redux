import MuiAccordion, {AccordionProps} from '@mui/material/Accordion';
import {styled} from '@mui/material/styles';
import React from 'react';

export const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({theme}) => ({
    border: `1px solid rgba(0, 0, 0, 0.54)`,
    backgroundColor: '#f5f5f5',
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:hover': {
        borderColor: 'black',
    },
    '&:before': {
        display: 'none',
    },
}));

export default Accordion;
