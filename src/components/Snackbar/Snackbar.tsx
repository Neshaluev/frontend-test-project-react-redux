import Alert from '@mui/material/Alert';
import Fade from '@mui/material/Fade';
import Snackbar from '@mui/material/Snackbar';
import * as React from 'react';

import {useAction} from '../../store/hooks/useAction';
import {useTypedSelector} from '../../store/hooks/usetTypedSelector';

export default function TransitionsSnackbar() {
    const {createAlert, clearAlert} = useAction();
    const {alert, visible} = useTypedSelector((state) => state.alert);

    React.useEffect(() => {
        setTimeout(() => {
            clearAlert();
        }, 2500);
    }, [alert]);

    return (
        <>
            {alert && (
                <Snackbar
                    open={visible}
                    TransitionComponent={Fade}
                    key={'test#1424'}
                    anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                    autoHideDuration={2500}
                >
                    <Alert severity={alert.type} sx={{width: '100%'}}>
                        {alert.message}
                    </Alert>
                </Snackbar>
            )}
        </>
    );
}
