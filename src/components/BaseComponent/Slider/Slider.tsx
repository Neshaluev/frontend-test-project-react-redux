import MuiSlider, {SliderProps} from '@mui/material/Slider';
import {styled} from '@mui/material/styles';
import React from 'react';

const Slider = styled(MuiSlider)<SliderProps>(({theme}) => ({
    '& .MuiSlider-thumb': {
        [`&:hover, &.Mui-focusVisible`]: {
            boxShadow: `none`,
        },
        [`&.Mui-active`]: {
            boxShadow: `none`,
        },
    },
}));

export default Slider;
