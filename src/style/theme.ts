import {createTheme} from '@mui/material';

export const theme = createTheme({
    palette: {
        primary: {
            // main: "#f44336",
            main: '#03a9f4',
            // main: "#039be5",
        },
        // secondary: {
        //   main: "#637bfe",
        // },
    },
    shape: {
        borderRadius: 0,
    },
    // spacing: 20,
    components: {
        MuiSelect: {
            styleOverrides: {
                standard: {
                    boxShadow: 'none',
                    borderRadius: '0px',
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                elevation1: {
                    boxShadow: 'none',
                },
                root: {
                    // ele
                },
                rounded: {
                    border: '1px solid gray',
                    boxShadow: 'none',
                },
            },
        },
        MuiCheckbox: {
            defaultProps: {
                disableRipple: true,
                // size: "small",
            },
        },
        MuiRadio: {
            defaultProps: {
                disableRipple: true,
            },
        },
        MuiButton: {
            defaultProps: {
                disableRipple: true,
                // size: "small",
                // variant: "contained",
                // color: "primary",
            },
            //     styleOverrides: {
            //       root: {
            //         textTransform: "none",
            //         padding: "10px",
            //         maxWidth: "100px",
            //       },
            //       fullWidth: {
            //         maxWidth: "100px",
            //       },
            // "&:active": {
            //   boxShadow: 'none'
            // }
            //     },
            //   },

            //     styleOverrides: {
            //       root: {
            //         borderRadius: "50%",
            //         //   cursor: "move",
            //       },
            //     },
        },

        // MuiSlider: {
        //   defaultProps: {
        //     disableSwap: true,
        //   },
        //   styleOverrides: {
        //     active: {
        //       boxShadow: "none",
        //     },
        //     markActive: {
        //       boxShadow: "none",
        //     },
        //   },
        // },
    },
});
